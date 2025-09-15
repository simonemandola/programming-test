<template>
  <div :class="`mt-10 p-4 border border-neutral-300 rounded-md shadow-md w-fit
    border-l-4 flex items-start gap-x-2`">
    <MoleculesIconsLoader icon-name="avatar"
      extra-classes="size-12 [&_path]:fill-neutral-900"></MoleculesIconsLoader>
    <div>
      <p class="font-medium text-lg">{{ userData.name }}</p>
      <p class="text-sm mt-1">{{ properties.length }}
      {{ properties.length === 1 ? 'Property' : 'Properties' }}</p>
    </div>
</div>
</template>

<script>
import MoleculesIconsLoader from '@/components/Molecules/Icons/Loader.vue';

export default {
  name: 'MoleculesUserCard',
  components: {
    MoleculesIconsLoader,
  },
  props: {
    userData: Object,
    properties: Array,
  },
};
</script>
