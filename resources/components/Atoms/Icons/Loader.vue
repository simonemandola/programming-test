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
          component = () => import('./Items/Check.vue');
          break;
        case 'cross':
          component = () => import('./Items/Cross.vue');
          break;
        case 'arrow':
          component = () => import('./Items/Arrow.vue');
          break;
        case 'arrow-narrow':
          component = () => import('./Items/ArrowNarrow.vue');
          break;
        case 'filter':
          component = () => import('./Items/Filter.vue');
          break;
        case 'reset':
          component = () => import('./Items/Reset.vue');
          break;
        case 'house':
          component = () => import('./Items/House.vue');
          break;
        case 'time':
          component = () => import('./Items/Time.vue');
          break;
        case 'user':
          component = () => import('./Items/User.vue');
          break;
        case 'toggle':
          component = () => import('./Items/Toggle.vue');
          break;
        case 'checkbox-empty':
          component = () => import('./Items/CheckboxEmpty.vue');
          break;
        case 'checkbox-filled':
          component = () => import('./Items/CheckboxFilled.vue');
          break;
        case 'keys':
          component = () => import('./Items/Keys.vue');
          break;
        case 'avatar':
          component = () => import('./Items/Avatar.vue');
          break;
        case 'image':
          component = () => import('./Items/Image.vue');
          break;
        default:
      }
      return component;
    },
  },
};
</script>
