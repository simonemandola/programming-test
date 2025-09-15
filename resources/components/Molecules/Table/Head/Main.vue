<template>
  <table :class="`w-full table-fixed [&_th]:bg-green-200 [&_th]:uppercase
    [&_th]:tracking-[1px] [&_th]:border [&_th]:border-neutral-400
    [&_th]:font-semibold [&_th]:p-4`" data-testid="table-head">
    <thead>
      <MoleculesTableHeadRow></MoleculesTableHeadRow>
    </thead>
  </table>
</template>

<script>
import MoleculesTableHeadRow from '@/components/Molecules/Table/Head/Row.vue';

export default {
  name: 'MoleculesTableHeadMain',
  components: {
    MoleculesTableHeadRow,
  },
};
</script>
