<template>
  <div class="my-8">
    <h3 class="text-lg font-semibold flex items-center gap-x-2">
      <MoleculesIconsLoader icon-name="house" extra-classes="size-3.5 fill-neutral-900" />
      <span>Type</span>
    </h3>
    <ul class="grid grid-cols-2 gap-1 mt-4">
      <li v-for="(item, index) in types" :key="index">
        <button type="button" :class="`${ activeFilterId === item.id ? 'bg-green-500/75' : '' }
          button-filter`" @click.prevent="handleClick(item.id)">
            {{ utilsCapitalizeFirstChar(item.name) }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import MoleculesIconsLoader from '@/components/Molecules/Icons/Loader.vue';
import utilsCapitalizeFirstChar from '@/utils/utilsCapitalizeFirstChar';

export default {
  name: 'MoleculesFilterType',
  components: {
    MoleculesIconsLoader,
  },
  props: {
    types: {
      type: Array,
    },
  },
  computed: {
    activeFilterId() {
      const filtersActive = this.$store.state.filters.active;
      if (filtersActive.length === 0 || !filtersActive.some((filter) => filter.type === 'TYPE')) {
        return -1;
      }
      return filtersActive.filter((filter) => filter.type === 'TYPE')[0].value;
    },
  },
  methods: {
    handleClick: function (id) {
      this.$store.dispatch('manageFilters', {
        type: 'TYPE',
        value: this.activeFilterId === id ? -1 : id,
      });
    },
  },
  data: () => ({
    utilsCapitalizeFirstChar,
  }),
};
</script>
