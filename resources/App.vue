<template>
  <div id="app">
    <LayoutDefault>
      <router-view ></router-view>
    </LayoutDefault>
  </div>
</template>

<script>
import { users, propertyTypes, properties } from '@/mocks/api';
import LayoutDefault from '@/components/Layouts/default.vue';

export default {
  name: 'App',
  components: {
    LayoutDefault,
  },
  beforeMount: function () {
    this.$store?.commit('setData', { users, propertyTypes, properties });
  },
};
</script>
