<template>
  <q-page>
    <q-tabs
      v-model="tab"
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="groupSchedule" label="Group" />
      <q-tab name="personalSchedule" label="Personal" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="groupSchedule">
        <div class="schedule-slot">
          <q-card class="my-card">
            <q-tabs
              v-model="tabInside"
              class="text-grey week-tabs"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="monday" label="L" />
              <q-tab name="tuesday" label="M" />
              <q-tab name="wednesday" label="M" />
              <q-tab name="thursday" label="J" />
              <q-tab name="friday" label="V" />
            </q-tabs>
          </q-card>
          <q-tab-panels v-model="tabInside" animated>
            <q-tab-panel name="monday">
              <div class="text-h6">monday</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="tuesday">
              <div class="text-h6">tuesday</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="wednesday">
              <div class="text-h6">wednesday</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
            <q-tab-panel name="thursday">
              <div class="text-h6">thursday</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
            <q-tab-panel name="friday">
              <div class="text-h6">friday</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
          <!-- <q-card class="my-card">
            <q-card-section>{{ lorem }}</q-card-section>
          </q-card>-->
        </div>
      </q-tab-panel>

      <q-tab-panel name="personalSchedule">
        <div class="text-h6">Alarms</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<style>
.q-page {
  background-color: #fff;
}
.q-tabs {
  width: 100%;
  margin-top: 10px;
}
.q-tab {
  padding: 0 10px;
}

.q-tab-panel {
  padding: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #fff;
}
.q-card {
  width: 100%;
  margin-bottom: 1px;
}
.schedule-slot {
  width: 90%;
  border-radius: 5%;
  background-color: #f5f5f5;
}

.my-card {
  width: 100%;
  /* background: black; */
}
.q-card > div {
  margin-top: 0;
}
</style>

<script>
export default {
  name: "PageIndex",
  mounted() {
    this.$store.dispatch("promoData/initStore");
  },
  data() {
    return {
      tab: "groupSchedule",
      tabInside: "monday"
    };
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
