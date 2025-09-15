<template>
  <PagesProfile></PagesProfile>
</template>

<script>
import PagesProfile from '@/components/Pages/Profile.vue';

export default {
  name: 'ViewsProfile',
  components: {
    PagesProfile,
  },
  created: function () {
    document.title = 'Profile';
  },
};
</script>
