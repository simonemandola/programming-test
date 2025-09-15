<template>
  <section>
    <h1 class="font-semibold text-2xl mt-4 mb-8">Property table with rental status</h1>
    <OrganismsTableMenuMain />
    <OrganismsTableMain />
  </section>
</template>

<script>
import OrganismsTableMenuMain from '@/components/Organisms/Table/Menu/Main.vue';
import OrganismsTableMain from '@/components/Organisms/Table/Main.vue';

export default {
  name: 'TemplatesIndex',
  components: {
    OrganismsTableMenuMain,
    OrganismsTableMain,
  },
};
</script>
