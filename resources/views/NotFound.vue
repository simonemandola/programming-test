<template>
    <section class="flex flex-col items-center justify-center h-full">
        <h1 class="font-semibold text-2xl mt-56">404 - Page Not Found</h1>
        <p class="text-lg my-4">Sorry, this page does not exist.</p>
        <router-link :to="{ name: 'home' }" replace
          :class="`w-fit px-8 py-2 rounded-lg bg-green-400 hover:bg-green-500
           border border-green-600`">
        Back to Home</router-link>
    </section>
</template>

<script>
export default {
  name: 'ViewsNotFound',
  created: function () {
    document.title = '404 - Not Found';
  },
};
</script>
