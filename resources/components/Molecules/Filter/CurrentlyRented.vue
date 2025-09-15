<template>
  <div class="my-8">
    <h3 class="text-lg font-semibold flex items-center gap-x-2">
      <MoleculesIconsLoader icon-name="keys" extra-classes="size-3.5 [&_path]:fill-neutral-900" />
      <span>Currently Rented</span>
    </h3>
    <form class="mt-4" @submit.prevent>
      <label class="w-fit flex items-center gap-x-2 cursor-pointer">
        <input ref="checkboxHtml" type="checkbox" name="filter-by-user"
          class="appearance-none absolute size-7 cursor-pointer"
          @change="handleOnCheckboxChange" />
          <span class="text-sm">Property is rented</span>
          <MoleculesIconsLoader v-if="isActive" icon-name="checkbox-filled"
            extra-classes="size-6 fill-green-400" />
          <MoleculesIconsLoader v-else icon-name="checkbox-empty"
            extra-classes="size-6" />
      </label>
    </form>
  </div>
</template>

<script>
import MoleculesIconsLoader from '@/components/Molecules/Icons/Loader.vue';

export default {
  name: 'MoleculesFilterCurrentlyRented',
  components: {
    MoleculesIconsLoader,
  },
  computed: {
    isActive() {
      const filtersActive = this.$store.state.filters.active;
      if (filtersActive.length === 0 || !filtersActive.some((filter) => filter.type === 'CURRENTLY_RENTED')) {
        return false;
      }
      return filtersActive.filter((filter) => filter.type === 'CURRENTLY_RENTED')[0].value;
    },
  },
  methods: {
    handleOnCheckboxChange: function (event) {
      this.$store.dispatch('manageFilters', {
        type: 'CURRENTLY_RENTED',
        value: event.target.checked,
      });
    },
  },
};
</script>
