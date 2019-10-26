<template>
  <q-page class="flex flex-center">
    <q-circular-progress
      v-if="!loaded"
      indeterminate
      size="40vw"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    />
` <div class="year-card">


          <q-tabs v-model="tab">
            <q-tab label="Sign In" name="one" />
            <q-tab label="Sign Up" name="two" />
          </q-tabs>


          <q-tab-panels v-model="tab" animated>
            <q-tab-panel
              name="one"
            >The QCard component is a great way to display important pieces of grouped content.</q-tab-panel>

            <q-tab-panel name="two">
              With so much content to display at once, and often so little screen real-estate,
              Cards have fast become the design pattern of choice for many companies, including
              the likes of Google and Twitter.
            </q-tab-panel>
          </q-tab-panels>
      </div>`
  </q-page>
</template>

<style>

.year-card {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 2vh;
  width: 25vw;
  background-color: #f5f5f5;
}
</style>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      tab: "one"
    };
  },
  mounted() {
    this.$store.dispatch("promoData/initStore");
  },
  computed: {
    level() {
      return (this.$store.getters["promoData/getLevel"] / 5) * 100;
    },
    status() {
      return this.$store.getters["promoData/getStatus"];
    },
    loaded() {
      return this.$store.getters["promoData/getLoaded"];
    }
  }
};
</script>
