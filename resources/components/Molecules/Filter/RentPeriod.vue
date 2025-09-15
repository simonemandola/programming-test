<template>
  <div class="my-8">
    <h3 class="text-lg font-semibold flex items-center gap-x-2">
      <MoleculesIconsLoader icon-name="time" extra-classes="size-4 fill-neutral-900" />
      <span>Rent Period</span>
      <span class="text-xs opacity-50">(month)</span>
    </h3>
    <div class="mt-4">
      <label class="w-full flex items-center gap-x-2">
        <span class="text-sm min-w-24 shrink-0" :key="sliderValue">{{ labelText }}</span>
        <input ref="sliderHtml" type="range" min="0" max="72" value="0" step="6"
          class="slider" @input="handleOnIput"/>
      </label>
    </div>
  </div>
</template>

<script>
import MoleculesIconsLoader from '@/components/Molecules/Icons/Loader.vue';

export default {
  name: 'MoleculesFilterRentPeriod',
  components: {
    MoleculesIconsLoader,
  },
  props: {
    rentPeriods: {
      type: Array,
    },
  },
  computed: {
    labelText: function () {
      return parseInt(this.sliderValue, 10) === 0 ? 'Off' : `Less than ${this.sliderValue}`;
    },
    isActive() {
      const filtersActive = this.$store.state.filters.active;
      if (filtersActive.length === 0) {
        return false;
      }
      return filtersActive.some((filter) => filter.type === 'RENT_PERIOD');
    },
  },
  methods: {
    handleOnIput: function (event) {
      this.sliderValue = event.target.value;
      this.$store.dispatch('manageFilters', {
        type: 'RENT_PERIOD',
        value: this.sliderValue,
      });
    },
  },
  watch: {
    isActive(newValue) {
      if (!newValue) {
        this.$refs.sliderHtml.value = 0;
        this.sliderValue = 0;
      }
    },
  },
  data: () => ({
    sliderValue: 0,
  }),
};
</script>
