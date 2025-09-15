<template>
  <div :class="`outline-1 -outline-offset-1 outline-neutral-400 rounded-lg
    overflow-auto shadow-md shadow-black/20`">
    <div class="min-w-[54rem] text-sm overflow-auto">
      <MoleculesTableHeadMain />
      <OrganismsTableContentBody />
    </div>
  </div>
</template>

<script>
import MoleculesTableHeadMain from '@/components/Molecules/Table/Head/Main.vue';
import OrganismsTableContentBody from '@/components/Organisms/Table/Content/Body.vue';

export default {
  name: 'OrganismsTableMain',
  components: {
    MoleculesTableHeadMain,
    OrganismsTableContentBody,
  },
};
</script>
