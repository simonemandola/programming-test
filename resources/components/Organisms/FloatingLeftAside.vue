<template>
  <aside ref="overlayHtml"
    :class="`fixed z-50 inset-0 backdrop-blur-[2px] bg-black/50
    opacity-0 pointer-events-none transition-all duration-300 ease-in-out`">
    <section :class="`w-full h-full max-w-[425px] p-4 bg-neutral-100 overflow-auto
      -translate-x-full transition-all duration-300 ease-in-out`" data-test-id="filters">
      <header class="sticky -top-4 p-2 bg-neutral-100 w-full flex items-center justify-end gap-x-4">
        <MoleculesResetFilters></MoleculesResetFilters>
        <button type="button" :class="`flex items-center justify-center
          gap-x-2 min-w-12 p-2 rounded-lg bg-neutral-200 hover:bg-neutral-400/50`"
          title="Close" aria-label="Close" @click.prevent="doCloseFilters">
          <MoleculesIconsLoader icon-name="cross"
            extra-classes="size-7 [&_path]:stroke-neutral-900" />
        </button>
      </header>
      <OrganismsFilterMain></OrganismsFilterMain>
    </section>
  </aside>
</template>

<script>
import MoleculesIconsLoader from '@/components/Molecules/Icons/Loader.vue';
import MoleculesResetFilters from '@/components/Molecules/ResetFilters.vue';
import OrganismsFilterMain from '@/components/Organisms/Filter/Main.vue';

export default {
  name: 'OrganismsFloatingLeftAside',
  components: {
    MoleculesIconsLoader,
    MoleculesResetFilters,
    OrganismsFilterMain,
  },
  computed: {
    isShow() {
      return this.$store.state.filters.show;
    },
  },
  methods: {
    toggleShow: function () {
      const el = this.$refs.overlayHtml;
      if (!el) return;
      if (el.classList.value.includes('opacity-0')) {
        el.classList.remove(...['opacity-0', 'pointer-events-none']);
        window.setTimeout(() => {
          el.firstElementChild.classList.remove('-translate-x-full');
          this.showContent = true;
        }, 300);
      } else {
        el.firstElementChild.classList.add('-translate-x-full');
        this.showContent = false;
        window.setTimeout(() => {
          el.classList.add(...['opacity-0', 'pointer-events-none']);
        }, 300);
      }
    },
    doCloseFilters: function () {
      this.$store.commit('toggleShowFilters');
    },
  },
  watch: {
    isShow: function () {
      this.toggleShow();
    },
  },
  data: () => ({
    showContent: false,
  }),
};
</script>
