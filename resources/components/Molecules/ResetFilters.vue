<template>
  <button type="button" :class="`flex items-center justify-center
    gap-x-2 min-w-12 p-2 rounded-lg hover:outline-2 hover:outline-neutral-500/50`"
    title="Reset filters" @click.prevent="doResetFilters">
    <MoleculesIconsLoader icon-name="reset" extra-classes="size-5 [&_path]:stroke-neutral-900" />
    <span>Reset</span>
  </button>
</template>

<script>
import MoleculesIconsLoader from '@/components/Molecules/Icons/Loader.vue';

export default {
  name: 'MoleculesResetFilters',
  components: {
    MoleculesIconsLoader,
  },
  methods: {
    doResetFilters: function () {
      this.$store.dispatch('manageFilters', {
        type: 'RESET',
      });
    },
  },
};
</script>
