<template>
  <i :class="`${extraClasses} block [&>svg]:w-full [&>svg]:h-auto`" aria-hidden="true">
    <component :is="iconComponent"></component>
  </i>
</template>

<script>
export default {
  name: 'MoleculesIconsLoader',
  props: {
    extraClasses: String,
    iconName: String,
  },
  computed: {
    iconComponent() {
      let component = null;
      switch (this.iconName) {
        case 'check':
          component = () => import('@/components/Atoms/Icons/Check.vue');
          break;
        case 'cross':
          component = () => import('@/components/Atoms/Icons/Cross.vue');
          break;
        case 'arrow':
          component = () => import('@/components/Atoms/Icons/Arrow.vue');
          break;
        case 'arrow-narrow':
          component = () => import('@/components/Atoms/Icons/ArrowNarrow.vue');
          break;
        case 'filter':
          component = () => import('@/components/Atoms/Icons/Filter.vue');
          break;
        case 'reset':
          component = () => import('@/components/Atoms/Icons/Reset.vue');
          break;
        case 'house':
          component = () => import('@/components/Atoms/Icons/House.vue');
          break;
        case 'time':
          component = () => import('@/components/Atoms/Icons/Time.vue');
          break;
        case 'user':
          component = () => import('@/components/Atoms/Icons/User.vue');
          break;
        case 'toggle':
          component = () => import('@/components/Atoms/Icons/Toggle.vue');
          break;
        case 'checkbox-empty':
          component = () => import('@/components/Atoms/Icons/CheckboxEmpty.vue');
          break;
        case 'checkbox-filled':
          component = () => import('@/components/Atoms/Icons/CheckboxFilled.vue');
          break;
        case 'keys':
          component = () => import('@/components/Atoms/Icons/Keys.vue');
          break;
        case 'avatar':
          component = () => import('@/components/Atoms/Icons/Avatar.vue');
          break;
        case 'image':
          component = () => import('@/components/Atoms/Icons/Image.vue');
          break;
        default:
      }
      return component;
    },
  },
};
</script>
