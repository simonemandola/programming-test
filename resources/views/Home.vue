<template>
    <PagesHome></PagesHome>
</template>

<script>
import PagesHome from '@/components/Pages/Home.vue';

export default {
  name: 'ViewsHome',
  components: {
    PagesHome,
  },
  created: function () {
    document.title = 'Property Table';
  },
};
</script>
