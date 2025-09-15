<template>
  <section class="mt-4">
    <h2 class="text-xl font-semibold">Filter</h2>
    <MoleculesFilterType :types="types" />
    <MoleculesFilterRentPeriod :rent-periods="rentPeriods" />
    <MoleculesFilterUser :users="users" />
    <MoleculesFilterCurrentlyRented />
    </section>
</template>

<script>
import MoleculesFilterType from '@/components/Molecules/Filter/Type.vue';
import MoleculesFilterRentPeriod from '@/components/Molecules/Filter/RentPeriod.vue';
import MoleculesFilterUser from '@/components/Molecules/Filter/User.vue';
import MoleculesFilterCurrentlyRented from '@/components/Molecules/Filter/CurrentlyRented.vue';
import utilsCapitalizeFirstChar from '@/utils/utilsCapitalizeFirstChar';

export default {
  name: 'OrganismsFilterMain',
  components: {
    MoleculesFilterType,
    MoleculesFilterRentPeriod,
    MoleculesFilterUser,
    MoleculesFilterCurrentlyRented,
  },
  beforeMount: function () {
    this.types = Array.from(this.$store.state.rawData.propertyTypes);
    this.users = Array.from(this.$store.state.rawData.users).map(
      (item) => utilsCapitalizeFirstChar(item.name),
    );
  },
  data: () => ({
    types: null,
    users: null,
    rentPeriods: ['<6 months', '<24 months', '<36 months', '>48 months'],
  }),
};
</script>
