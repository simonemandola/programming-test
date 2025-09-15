<template>
    <main class="max-w-7xl mx-auto px-4 pt-4 pb-8">
        <slot></slot>
        <OrganismsFloatingLeftAside ></OrganismsFloatingLeftAside>
    </main>
</template>

<script>
import OrganismsFloatingLeftAside from '@/components/Organisms/FloatingLeftAside.vue';

export default {
  name: 'LayoutDefault',
  components: {
    OrganismsFloatingLeftAside,
  },
};
</script>
