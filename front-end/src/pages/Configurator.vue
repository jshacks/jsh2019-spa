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
      <q-tab name="chooseSchedule" label="Choose" />
      <q-tab name="finalSchedule" label="Final" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="groupSchedule">
        <q-expansion-item expand-separator label="Luni">
          <q-slide-item>
            <template style="width: 100%;" v-slot:right>
              <div class="row items-center">
                <div style="margin-right: 10px; font-weight:bold;">
                  <p>{{subject}}</p>
                  <p>{{shortName}}</p>
                </div>
                <div style="margin-right: 15px; ">
                  <p>{{timeSlot}}</p>
                  <p>{{classRoom}}</p>
                </div>
                <p>{{professor}}</p>
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
                <p>{{shortName}}</p>
                <div class="icons-area">
                  <q-btn v-if="hourType.type ==='curs'" outline round disable label="C" />
                  <q-btn v-else outline round color="primary" disable label="S" />

                  <q-btn round v-if="hasAssignement" outline disable label="A" />

                  <q-btn flat round color="white" style="padding: 0" icon="keyboard_arrow_right" />
                </div>
              </div>
              <div class="second-top">
                <p>{{timeSlot}}</p>
                <p>{{classRoom}}</p>
              </div>
            </div>
          </q-slide-item>
        </q-expansion-item>
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
}
.q-tabs {
  width: 100%;
  margin-top: 10px;
}
.q-tab {
  padding: 0 10px;
}

.container {
  margin-bottom: 10px;
}

.q-tab-panel {
  padding: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  name: "config",
  mounted() {
    this.$store.dispatch("promoData/initStore");
  },
  data() {
    return {
      tab: "groupSchedule",
      tabInside: "monday",
      subject: "Programare Orientata Obiect",
      timeSlot: "11:00 - 12:30",
      classRoom: "2011A",
      hasAssignement: true,
      professor: "Smeureanu Ion",
      shortName: "POO",
      hourType: {
        type: "curs"
      }
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
    onLeft({ reset }) {
      this.finalize(reset);
    },

    onRight({ reset }) {},

    finalize(reset) {
      this.timer = setTimeout(() => {
        reset();
      }, 1000);
    }
  }
};
</script>
