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
            <q-tab-panel class="hour-slot" name="monday">
              <q-slide-item @left="onLeft" @right="onRight" right-color="deep-orange-3 ">
                <template v-slot:right>
                  <div class="more-info">
                    <p>{{subject}}</p>
                    <p>{{professor}}</p>
                    <p>{{timeSlot}}</p>
                    <p>{{classRoom}}</p>
                    <q-btn
                      @click="back"
                      flat
                      round
                      color="white"
                      style="padding: 0"
                      icon="keyboard_arrow_left"
                    />
                  </div>
                </template>
                <div class="container">
                  <div class="first-top">
                    <p>{{subject}}</p>
                    <div class="icons-area">
                      <q-btn v-if="hourType.type ==='curs'" outline round disable label="C" />
                      <q-btn v-else outline round color="primary" disable label="S" />

                      <q-btn round v-if="hasAssignement" outline disable label="A" />

                      <q-btn
                        flat
                        round
                        color="white"
                        style="padding: 0"
                        icon="keyboard_arrow_right"
                      />
                    </div>
                  </div>
                  <div class="second-top">
                    <p>{{timeSlot}}</p>
                    <p>{{classRoom}}</p>
                  </div>
                </div>
              </q-slide-item>
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
        </div>
      </q-tab-panel>

      <q-tab-panel name="personalSchedule">
        <div class="text-h6">Alarms</div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<style scoped>
.q-page {
  background-color: #fff;
}

.q-slide-item {
  width: 100%;
  border-radius: 7px;
}
.q-slide-item__content {
  background: transparent;
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
.container {
  width: 100%;
  height: 100%;
  background-color: brown;
  display: flex;
  flex-direction: column;
  padding: 0;
  padding: 10px 20px;
  color: #fff;

  border-radius: 7px;
}
.first-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.second-top p {
  margin: 0;
  font-size: 14px;
}
.first-top p {
  margin: 0;
  font-size: 14px;
}

.first-top,
.second-top {
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
}

.hour-slot {
  padding: 0;
  margin-top: 30px;
}
.icons-area {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.q-btn {
  padding: 0;
}

.q-btn,
.q-icon {
  font-size: 1.018em !important;
}

.more-info {
  color: #2c2c2c;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.more-info p {
  margin: 0;
  margin-bottom: 3px;
  width: 100%;
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
      tabInside: "monday",
      subject: "POO",
      timeSlot: "11:00 - 12:30",
      classRoom: "2011A",
      hasAssignement: true,
      professor: "Smeureanu Ion",
      hourType: {
        type: "curs"
      },
      reset: {}
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
  },
  methods: {
    back() {
      this.reset();
    },
    onLeft({ reset }) {
      this.finalize(reset);
    },

    onRight({ reset }) {
      this.reset = reset;
    }
  }
};
</script>
