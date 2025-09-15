<template>
  <Transition name="fade" appear>
    <tr class="w-full [&:nth-child(odd)]:bg-neutral-200/50 hover:!bg-neutral-300/70">
      <td class="w-14">{{ property.id }}</td>
      <td class="font-medium w-[16rem]">
        <span class="inline-flex" :title="property.name">
          <span class="py-0.5 px-4 rounded-md bg-slate-300/70 border border-slate-400">
            {{ property.name }}</span>
        </span>
      </td>
      <td class="w-1/4 lg:w-1/6">
        {{ utilsCapitalizeFirstChar(property.type?.name) }}</td>
      <td class="w-1/4 lg:w-1/6">
        <router-link :to="{ name: 'profile', query: { user: property.user.id } }"
          class="hover:underline" :title="property.user.name">
          {{ property.user.name }}
        </router-link>
      </td>
      <td class="w-1/4 lg:w-1/6">
        <MoleculesDropdown :allow-dropdown="!!(property.rentedPeriod.from) && !isShowPeriodDetails">
          <template #label>
            {{ property.rentedPeriod.total.text }}
          </template>
          <template #content>
            <div class="text-xs flex flex-col gap-y-1" v-if="property.rentedPeriod.from">
              <span class="flex gap-x-1">
                <span class="font-semibold min-w-1/4 text-start">From:</span>
                {{ utilsFormatDate(property.rentedPeriod.from) }}
              </span>
              <span v-if="property.rentedPeriod.to" class="flex gap-x-1">
                <span class="font-semibold min-w-1/4 text-start">To:</span>
                {{ utilsFormatDate(property.rentedPeriod.to) }}
              </span>
            </div>
          </template>
        </MoleculesDropdown>
      </td>
      <td v-show="isShowPeriodDetails" class="w-1/4 lg:w-1/6">
        {{ utilsFormatDate(property.rentedPeriod.from)
        ? utilsFormatDate(property.rentedPeriod.from) : '-' }}</td>
      <td v-show="isShowPeriodDetails" class="w-1/4 lg:w-1/6">
        {{ utilsFormatDate(property.rentedPeriod.to)
        ? utilsFormatDate(property.rentedPeriod.to) : '-'  }}</td>
      <td class="w-24">
        <span :class="`w-fit mx-auto p-1 bg-slate-200 outline outline-slate-300/80 rounded-md
          flex items-center justify-center`"
          :title="`${property.rentedPeriod.isRented ? 'Rented' : 'Not rented' }`"
          :aria-label="`${property.rentedPeriod.isRented
            ? 'The property is currently rented' : 'The property is not rented' }`">
          <MoleculesIconsLoader
            v-if="property.rentedPeriod.isRented"
            icon-name="check" extra-classes="mx-auto size-5"></MoleculesIconsLoader>
          <MoleculesIconsLoader v-else extra-classes="mx-auto size-5 [&>svg]:p-0.5"
            icon-name="cross"></MoleculesIconsLoader>
        </span>
      </td>
    </tr>
  </Transition>
</template>

<script>
import MoleculesIconsLoader from '@/components/Molecules/Icons/Loader.vue';
import MoleculesDropdown from '@/components/Molecules/Dropdown.vue';
import utilsCapitalizeFirstChar from '@/utils/utilsCapitalizeFirstChar';
import utilsFormatDate from '@/utils/utilsFormatDate';

export default {
  name: 'OrganismsTableContentRow',
  props: {
    property: Object,
    users: Array,
    propertyTypes: Array,
  },
  components: {
    MoleculesIconsLoader,
    MoleculesDropdown,
  },
  computed: {
    isShowPeriodDetails() {
      return this.$store.state.showPeriodDetails;
    },
  },
  data: () => ({
    utilsFormatDate,
    utilsCapitalizeFirstChar,
  }),
};
</script>
