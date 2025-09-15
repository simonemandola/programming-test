<template>
  <LayoutsProfile>
    <section v-if="existUser" data-testid="profile-content">
      <h1 class="font-semibold text-2xl">Profile</h1>
      <MoleculesUserCard :user-data="userData" :properties="properties" />
      <section class="mt-8">
        <h2 class="font-medium text-lg">Properties</h2>
        <MoleculesUserPopertiesListMain v-if="properties.length > 0" :properties="properties" />
        <p v-else>This user does not yet have any properties.</p>
      </section>
    </section>
    <section v-else>
      <h1 class="font-semibold text-2xl mt-10">User Not found.</h1>
    </section>
  </LayoutsProfile>
</template>

<script>
import LayoutsProfile from '@/components/Layouts/profile.vue';
import MoleculesUserCard from '@/components/Molecules/User/Card.vue';
import MoleculesUserPopertiesListMain from '@/components/Molecules/User/PropertiesList/Main.vue';

export default {
  name: 'OrganismsProfileMain',
  components: {
    LayoutsProfile,
    MoleculesUserCard,
    MoleculesUserPopertiesListMain,
  },
  created: function () {
    if (!this.$route.query.user || this.$route.query.user === '') {
      this.$router.replace({ name: 'home' });
    } else if (this.$store.state.rawData?.users) {
      const currentUser = this.$store.state.rawData.users.find((user) => user.id
        === parseInt(this.$route.query?.user, 10));
      if (currentUser) {
        this.existUser = true;
        this.userData = currentUser;
      }
    }
  },
  mounted: function () {
    if (this.existUser) {
      this.properties = this.$store.state.parsedData.filter((property) => property.user.id
        === this.userData.id);
    }
  },
  data: () => ({
    userData: null,
    properties: [],
    existUser: false,
  }),
};
</script>
