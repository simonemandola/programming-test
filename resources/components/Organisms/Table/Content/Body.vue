<template>
  <div class="h-full max-h-96 overflow-auto">
    <table v-if="existProperties" :class="`w-full table-fixed [&_td]:text-center [&_td]:border
    [&_td]:border-neutral-400 [&_tr:first-child>td]:border-t-transparent
     [&_td:not(:last-child)]:border-r-transparent [&_td]:p-3`">
      <tbody data-testid="table-body">
        <OrganismsTableContentRow
          v-for="(property, index) in parsedProperties" :key="index"
          :property="property" :users="users" :property-types="propertyTypes" >
        </OrganismsTableContentRow>
      </tbody>
    </table>
    <div v-else class="text-center p-16">
      <h2 class="font-medium text-lg mb-2">No results.</h2>
      <p class="flex items-center justify-center gap-x-1">
        <span>Try</span>
        <MoleculesResetFilters ></MoleculesResetFilters>
        <span>your filters.</span>
      </p>
    </div>
</div>
</template>

<script>
import MoleculesResetFilters from '@/components/Molecules/ResetFilters.vue';
import OrganismsTableContentRow from '@/components/Organisms/Table/Content/Row.vue';

export default {
  name: 'OrganismsTableContentBody',
  components: {
    MoleculesResetFilters,
    OrganismsTableContentRow,
  },
  computed: {
    parsedProperties: function () {
      return this.$store.state.parsedDataFiltered;
    },
    existProperties: function () {
      return this.$store.state.parsedDataFiltered.length > 0;
    },
  },
  beforeMount: function () {
    this.properties = this.$store.state.rawData.properties;
    this.users = this.$store.state.rawData.users;
    this.propertyTypes = this.$store.state.rawData.propertyTypes;
  },
  data: () => ({
    properties: null,
    users: null,
    propertyTypes: null,
  }),
};
</script>
