<template>
  <section>
    <aside>
      <button type="button" :class="`text-sm my-4 flex items-center gap-x-2 p-2
      bg-neutral-100 rounded-md hover:bg-neutral-200
        transition-all duration-300 ease-in-out`" aria-label="Toggle filters menú"
        @click.prevent="doGoBack">
        <MoleculesIconsLoader icon-name="arrow-narrow" extra-classes="size-5" />
        <span class="text-sm">Go Back</span>
      </button>
    </aside>
    <slot></slot>
  </section>
</template>

<script>
import MoleculesIconsLoader from '@/components/Molecules/Icons/Loader.vue';

export default {
  name: 'LayoutProfile',
  components: {
    MoleculesIconsLoader,
  },
  methods: {
    doGoBack: function () {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
