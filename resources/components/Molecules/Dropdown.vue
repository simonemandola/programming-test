<template>
  <div class="relative">
    <button v-if="allowDropdown" type="button" @click.prevent="toggleShowDropdown"
      class="w-full flex gap-x-0.5 items-center justify-center">
        <span :class="`${ isOpen ? 'rotate-x-180' : '' } w-fit min-w-1/6
          transition-all duration-300 ease-in-out`">
            <AtomsIconLoader :extra-classes="`mx-auto size-6`"
            icon-name="arrow"></AtomsIconLoader>
        </span>
        <span class="min-w-2/3">
            <slot name="label"></slot>
        </span>
    </button>
    <span v-else>
        <slot name="label"></slot>
    </span>
    <div ref="dropdownHtmlElement" v-if="allowDropdown"
      :class="`absolute top-[110%] left-1/2 -translate-x-1/2 z-10 opacity-0 pointer-events-none
       -translate-y-10 min-w-40 p-2 rounded-md border border-neutral-200 bg-neutral-50
       shadow-md shadow-black/30 transition-all duration-300 ease-in-out`">
        <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import AtomsIconLoader from '@/components/Molecules/Icons/Loader.vue';

export default {
  name: 'MoleculesDropdown',
  props: {
    allowDropdown: Boolean,
  },
  components: {
    AtomsIconLoader,
  },
  methods: {
    toggleShowDropdown: function () {
      const el = this.$refs.dropdownHtmlElement;
      if (!el) return;
      window.clearTimeout(this.timeout);
      if (el.classList.value.includes('opacity-0')) {
        this.isOpen = true;
        el.classList.remove(...[
          'opacity-0',
          'pointer-events-none',
          '-translate-y-10']);
        this.timeout = window.setTimeout(() => {
          this.toggleShowDropdown();
        }, 3000);
      } else {
        this.isOpen = false;
        el.classList.add(...['opacity-0',
          'pointer-events-none',
          '-translate-y-10']);
      }
    },
  },
  data: () => ({
    timeout: null,
    isOpen: false,
  }),
};
</script>
