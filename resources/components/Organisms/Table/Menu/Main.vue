<template>
  <div class="flex items-center">
    <button type="button" :class="`text-sm my-4 flex items-center gap-x-2 p-2 bg-neutral-100
      rounded-md border border-neutral-300 hover:bg-neutral-200 transition-all duration-300
      ease-in-out`" title="Toggle filter menú" aria-label="Toggle filter menú"
      @click.prevent="toggleShowFilters" data-testid="button-show-filters">
      <MoleculesIconsLoader icon-name="filter" extra-classes="size-5"></MoleculesIconsLoader>
        <span>Filters</span>
    </button>
    <button type="button" :class="`ml-auto text-sm my-4 flex items-center gap-x-2 p-2
      bg-neutral-100 rounded-md hover:bg-neutral-200
      transition-all duration-300 ease-in-out`" title="Show period details"
      aria-label="Toggle filters menú" @click.prevent="toggleShowPeriodDetails">
      <span class="text-sm">Period details</span>
      <MoleculesIconsLoader v-if="isShowPeriodDetails" icon-name="checkbox-filled"
        extra-classes="size-5" />
      <MoleculesIconsLoader v-else icon-name="checkbox-empty" extra-classes="size-5" />
    </button>
  </div>
</template>

<script>
import MoleculesIconsLoader from '@/components/Molecules/Icons/Loader.vue';

export default {
  name: 'OrganismsTableMenuMain',
  components: {
    MoleculesIconsLoader,
  },
  computed: {
    isShowPeriodDetails() {
      return this.$store.state.showPeriodDetails;
    },
  },
  methods: {
    toggleShowFilters: function () {
      this.$store.commit('toggleShowFilters');
    },
    toggleShowPeriodDetails: function () {
      this.$store.state.showPeriodDetails = !this.$store.state.showPeriodDetails;
    },
  },
};
</script>
