<template>
  <ul class="mt-4 grid sm:grid-cols-4 md:grid-cols-6">
    <MoleculesUserPropertiesListItem
      v-for="(property, index) in properties" :key="index" :property="property" />
  </ul>
</template>

<script>
import MoleculesUserPropertiesListItem from '@/components/Molecules/User/PropertiesList/Item.vue';

export default {
  name: 'MoleculesUserPopertiesListMain',
  components: {
    MoleculesUserPropertiesListItem,
  },
  props: {
    properties: Array,
  },
};
</script>
