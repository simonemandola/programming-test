<template>
<li class="col-span-2 m-2 min-h-60">
  <article :class="`p-4 border border-neutral-200 rounded-md h-full border-l-4
  ${ property.rentedPeriod.isRented ? 'border-l-green-400' : 'border-l-red-500' }
  bg-neutral-100 shadow-md shadow-black/30`">
  <div class="flex gap-x-2 mb-2">
    <MoleculesIconsLoader icon-name="image"
      extra-classes="size-20 [&_path]:fill-neutral-300"></MoleculesIconsLoader>
    <div class="flex flex-col gap-y-2">
      <p class="text-sm mt-2 font-medium">{{ property.name }}</p>
      <p class="w-fit text-xs py-1 px-3 rounded-md bg-neutral-200 leading-[1]">
          {{ utilsCapitalizeFirstChar(property.type.name) }}</p>
    </div>
  </div>
  <div class="my-3">
    <p class="text-sm flex items-center gap-x-2">
    <span class="font-medium min-w-1/3">Rented from:</span>
      {{ property.rentedPeriod.from
      ? utilsFormatDate(property.rentedPeriod.from) : '-' }}</p>
    <p class="text-sm flex items-center gap-x-2">
      <span class="text-sm font-medium min-w-1/3">Rented to:</span>
      <span v-if="property.rentedPeriod.isRented">Currently rented</span>
      <span v-else>
          {{ property.rentedPeriod.to
          ? utilsFormatDate(property.rentedPeriod.to) : '-' }}
      </span>
    </p>
  </div>
  <p class="text-sm flex items-center gap-x-2">
    <span class="font-medium min-w-1/3">Rented period:</span>
    <span>{{ property.rentedPeriod.total.text }}</span>
  </p>
  </article>
</li>
</template>

<script>
import MoleculesIconsLoader from '@/components/Molecules/Icons/Loader.vue';
import utilsCapitalizeFirstChar from '@/utils/utilsCapitalizeFirstChar';
import utilsFormatDate from '@/utils/utilsFormatDate';

export default {
  name: 'MoleculesUserPropertiesListItem',
  components: {
    MoleculesIconsLoader,
  },
  props: {
    property: Object,
  },
  data: () => ({
    utilsCapitalizeFirstChar,
    utilsFormatDate,
  }),
};
</script>
