<template>
  <tr data-testid="table-head-row">
    <th class="w-14">ID</th>
    <th class="w-[16rem]">Property</th>
    <th class="w-1/4 lg:w-1/6">Type</th>
    <th class="w-1/4 lg:w-1/6">Rented for</th>
    <th class="w-1/4 lg:w-1/6">Period</th>
    <th v-show="isShowPeriodDetails" class="w-1/4 lg:w-1/6"
      data-testid="table-head-hidden-comlumn">From</th>
    <th v-show="isShowPeriodDetails" class="w-1/4 lg:w-1/6"
      data-testid="table-head-hidden-comlumn">To</th>
    <th class="w-24">Rented</th>
  </tr>
</template>

<script>
export default {
  name: 'MoleculesTableHeadRow',
  computed: {
    isShowPeriodDetails() {
      return this.$store.state.showPeriodDetails;
    },
  },
};
</script>
