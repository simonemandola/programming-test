<template>
  <div class="my-8">
    <h3 class="text-lg font-semibold flex items-center gap-x-2">
      <MoleculesIconsLoader icon-name="user" extra-classes="size-4 fill-neutral-900" />
      <span>User</span>
    </h3>
    <form class="mt-4" @submit.prevent>
      <div class="relative">
        <div class="w-fit absolute top-1/2 right-4 -translate-y-1/2">
            <label class="relative w-7 flex items-center gap-x-2">
              <input ref="checkboxHtml" type="checkbox" name="filter-by-user"
                class="appearance-none absolute size-7 cursor-pointer"
                @change="handleOnCheckboxChange" />
              <MoleculesIconsLoader icon-name="toggle"
                :extra-classes="`pointer-events-none size-7 fill-neutral-900
                ${ isChecked ?
                  '[&_#point]:fill-green-300 translate-x-[2px]'
                  : '[&_#point]:fill-neutral-900 rotate-y-180'}
                [&_#point]:stroke-neutral-900`" />
            </label>
        </div>
        <label class="w-full">
            <input ref="inputKeywordHtml" type="text" name="keyword" placeholder="Don Joe"
              class="w-full py-2 px-4 border rounded-xl
                border-neutral-400 hover:border-neutral-500" @keyup="handleOnKeywordInput">
        </label>
      </div>
    </form>
  </div>
</template>

<script>
import MoleculesIconsLoader from '@/components/Molecules/Icons/Loader.vue';

export default {
  name: 'MoleculesFilterUser',
  components: {
    MoleculesIconsLoader,
  },
  props: {
    users: {
      type: Array,
    },
  },
  methods: {
    handleOnCheckboxChange: function (event) {
      this.isChecked = event.target.checked;
      this.$store.dispatch('manageFilters', {
        type: 'USER',
        value: this.isChecked ? this.$refs.inputKeywordHtml.value : '',
      });
    },
    handleOnKeywordInput: function (event) {
      if (!this.isChecked) return;
      this.$store.dispatch('manageFilters', {
        type: 'USER',
        value: event.target.value,
      });
    },
  },
  data: () => ({
    isChecked: false,
  }),
};
</script>
