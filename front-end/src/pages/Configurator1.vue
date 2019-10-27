<template>
  <q-page>
    <div v-if="!isClicked" class="container1">
      <h5>Selecteaza intervalul orar in care esti disponibil</h5>
      <q-badge color="secondary">Luni</q-badge>
      <q-slider v-model="x1" markers :min="7.30" :max="19.30" :step="1.20" />
      <q-slider v-model="y1" markers :min="7.30" :max="19.30" :step="1.20" />

      <q-badge color="secondary">Marti</q-badge>
      <q-slider v-model="x2" markers :min="7.30" :max="19.30" :step="1.20" />
      <q-slider v-model="y2" markers :min="7.30" :max="19.30" :step="1.20" />
      <q-badge color="secondary">Miercuri</q-badge>
      <q-slider v-model="x3" markers :min="7.30" :max="19.30" :step="1.20" />
      <q-slider v-model="y3" markers :min="7.30" :max="19.30" :step="1.20" />
      <q-badge color="secondary">Joi</q-badge>
      <q-slider v-model="x4" markers :min="7.30" :max="19.30" :step="1.20" />
      <q-slider v-model="y4" markers :min="7.30" :max="19.30" :step="1.20" />
      <q-badge color="secondary">Vineri</q-badge>
      {{x5}}
      <q-slider v-model="x5" markers :min="7.30" :max="19.30" :step="1.20" />
      {{y5}}
      <q-slider v-model="y5" markers :min="7.30" :max="19.30" :step="1.20" />
      <q-btn
        color="primary"
        style="padding-left: 10px; padding-right: 10px;"
        @click="handleClick"
        label="Trimite"
      />
    </div>
    <div v-else class="container2">
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
              <div class="container-group">
                <div class="first-top">
                  <p>{{shortName}}</p>
                  <p>{{professor}}</p>
                </div>
                <div class="second-top">
                  <p>{{timeSlot}}</p>
                  <p>{{classRoom}}</p>
                </div>
              </div>
            </q-slide-item>
          </q-expansion-item>

          <q-expansion-item expand-separator label="Marti">
            <q-slide-item>
              <div class="container-group">
                <div class="first-top">
                  <p>{{shortName}}</p>
                  <p>{{professor}}</p>
                </div>
                <div class="second-top">
                  <p>{{timeSlot}}</p>
                  <p>{{classRoom}}</p>
                </div>
              </div>
            </q-slide-item>
          </q-expansion-item>

          <q-expansion-item expand-separator label="Miercuri">
            <q-slide-item>
              <div class="container-group">
                <div class="first-top">
                  <p>{{shortName}}</p>
                  <p>{{professor}}</p>
                </div>
                <div class="second-top">
                  <p>{{timeSlot}}</p>
                  <p>{{classRoom}}</p>
                </div>
              </div>
            </q-slide-item>
          </q-expansion-item>

          <q-expansion-item expand-separator label="Joi">
            <q-slide-item>
              <div class="container-group">
                <div class="first-top">
                  <p>{{shortName}}</p>
                  <p>{{professor}}</p>
                </div>
                <div class="second-top">
                  <p>{{timeSlot}}</p>
                  <p>{{classRoom}}</p>
                </div>
              </div>
            </q-slide-item>
          </q-expansion-item>

          <q-expansion-item expand-separator label="Vineri">
            <q-slide-item>
              <div class="container-group">
                <div class="first-top">
                  <p>{{shortName}}</p>
                  <p>{{professor}}</p>
                </div>
                <div class="second-top">
                  <p>{{timeSlot}}</p>
                  <p>{{classRoom}}</p>
                </div>
              </div>
            </q-slide-item>
          </q-expansion-item>
        </q-tab-panel>

        <q-tab-panel name="chooseSchedule">
          <q-expansion-item
            :key="index"
            v-for="(element,index) in list"
            expand-separator
            :label="element.shortName"
          >
            <q-slide-item :key="index" v-for="(item,index) in element.subjectList">
              <div class="container-schedule">
                <div class="first-top">
                  <p>{{element.shortName}}</p>
                  <p>{{item.professor}}</p>
                </div>
                <div class="second-top">
                  <p>{{item.timeSlot}}</p>
                  <div class="q-gutter-sm">
                    <q-radio dense v-model="item.shape" val="da" color="cyan" label="Da" />
                    <q-radio dense v-model="item.shape" val="nu" color="cyan" label="Nu" />
                  </div>
                  <p>{{item.classRoom}}</p>
                </div>
              </div>
            </q-slide-item>
          </q-expansion-item>
          <!-- <q-expansion-item expand-separator :label="shortNameCTS">
            <q-slide-item :key="index" v-for="(item,index) in subjectListCTS">
              <div class="container-schedule">
                <div class="first-top">
                  <p>{{shortNameCTS}}</p>
                  <p>{{item.professor}}</p>
                </div>
                <div class="second-top">
                  <p>{{item.timeSlot}}</p>
                  <div class="q-gutter-sm">
                    <q-radio dense v-model="shapeCTS" val="da" color="cyan" label="Da" />
                    <q-radio dense v-model="shapeCTS" val="nu" color="cyan" label="Nu" />
                  </div>
                  <p>{{item.classRoom}}</p>
                </div>
              </div>
            </q-slide-item>
          </q-expansion-item>
          <q-expansion-item expand-separator :label="shortNameATP">
            <q-slide-item :key="index" v-for="(item,index) in subjectListATP">
              <div class="container-schedule">
                <div class="first-top">
                  <p>{{shortNameATP}}</p>
                  <p>{{item.professor}}</p>
                </div>
                <div class="second-top">
                  <p>{{item.timeSlot}}</p>
                  <div class="q-gutter-sm">
                    <q-radio dense v-model="shapeATP" val="da" color="cyan" label="Da" />
                    <q-radio dense v-model="shapeATP" val="nu" color="cyan" label="Nu" />
                  </div>
                  <p>{{item.classRoom}}</p>
                </div>
              </div>
            </q-slide-item>
          </q-expansion-item>
          <q-expansion-item expand-separator :label="shortNameEconomie">
            <q-slide-item v-for="(item,index) in subjectsListEconomie" :key="index">
              <div class="container-schedule">
                <div class="first-top">
                  <p>{{shortNameEconomie}}</p>
                  <p>{{item.professor}}</p>
                </div>
                <div class="second-top">
                  <p>{{item.timeSlot}}</p>
                  <div class="q-gutter-sm">
                    <q-radio dense v-model="shapeECO" val="da" color="cyan" label="Da" />
                    <q-radio dense v-model="shapeECO" val="nu" color="cyan" label="Nu" />
                  </div>
                  <p>{{item.classRoom}}</p>
                </div>
              </div>
            </q-slide-item>
          </q-expansion-item>-->
        </q-tab-panel>
        <q-tab-panel name="finalSchedule">
          <q-expansion-item expand-separator label="Luni">
            <q-slide-item>
              <div class="container-group">
                <div class="first-top">
                  <p>{{shortName}}</p>
                  <p>{{professor}}</p>
                </div>
                <div class="second-top">
                  <p>{{timeSlot}}</p>
                  <p>{{classRoom}}</p>
                </div>
              </div>
            </q-slide-item>
          </q-expansion-item>

          <q-expansion-item expand-separator label="Marti">
            <q-slide-item>
              <div class="container-group">
                <div class="first-top">
                  <p>{{shortName}}</p>
                  <p>{{professor}}</p>
                </div>
                <div class="second-top">
                  <p>{{timeSlot}}</p>
                  <p>{{classRoom}}</p>
                </div>
              </div>
            </q-slide-item>
          </q-expansion-item>

          <q-expansion-item expand-separator label="Miercuri">
            <q-slide-item>
              <div class="container-group">
                <div class="first-top">
                  <p>{{shortName}}</p>
                  <p>{{professor}}</p>
                </div>
                <div class="second-top">
                  <p>{{timeSlot}}</p>
                  <p>{{classRoom}}</p>
                </div>
              </div>
            </q-slide-item>
          </q-expansion-item>

          <q-expansion-item expand-separator label="Joi">
            <q-slide-item>
              <div class="container-group">
                <div class="first-top">
                  <p>{{shortName}}</p>
                  <p>{{professor}}</p>
                </div>
                <div class="second-top">
                  <p>{{timeSlot}}</p>
                  <p>{{classRoom}}</p>
                </div>
              </div>
            </q-slide-item>
          </q-expansion-item>

          <q-expansion-item expand-separator label="Vineri">
            <q-slide-item>
              <div class="container-group">
                <div class="first-top">
                  <p>{{shortName}}</p>
                  <p>{{professor}}</p>
                </div>
                <div class="second-top">
                  <p>{{timeSlot}}</p>
                  <p>{{classRoom}}</p>
                </div>
              </div>
            </q-slide-item>
          </q-expansion-item>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<style scoped>
.q-page {
  background-color: #fff;
  display: flex;
  justify-content: center;
}

.container1 {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
}

/*-------------- PART 2 ------------------*/
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
  width: 100%;
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
.container-group {
  width: 100%;
  height: 100%;
  background-color: #1479c7;
  display: flex;
  flex-direction: column;
  padding: 0;
  padding: 10px 20px;
  color: #fff;
  margin-bottom: 15px;
  border-radius: 7px;
}
.container-schedule {
  width: 100%;
  height: 100%;
  background-color: #c94328;
  display: flex;
  flex-direction: column;
  padding: 0;
  padding: 10px 20px;
  color: #fff;
  margin-bottom: 15px;
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
.container2 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.q-tab-panels {
  background: #fff;
  width: 100%;
}
</style>

<script>
export default {
  name: "Configurator1",

  data() {
    return {
      tab: "groupSchedule",
      tabInside: "monday",
      subject: "Programare Orientata Obiect",
      timeSlot: "11:00 - 12:30",
      classRoom: "2011A",
      hasAssignement: true,
      professor: "George Vasile",
      shortNamePOO: "POO",
      shortNameEconomie: "Economie",
      shortNameCTS: "CTS",
      shortNameATP: "ATP",
      basicModel: 2,
      hourType: {
        type: "curs"
      },
      isClicked: false,
      list: [
        {
          shortName: "POO",

          subjectList: [
            {
              timeSlot: "07:30 - 08:50",
              professor: "Mihai Mih",
              classRoom: "2011A",
              shape: ""
            },
            {
              timeSlot: "12:00 - 13:30",
              professor: "George Vasile",
              classRoom: "2011D",
              shape: ""
            },
            {
              timeSlot: "12:00 - 13:30",
              professor: "Vasile Andrei",
              classRoom: "2112",
              shape: ""
            },
            {
              timeSlot: "09:00 - 10:20",
              professor: "Mihai Ionescu",
              classRoom: "2202",
              shape: ""
            }
          ]
        }
      ],

      subjectsListEconomie: [
        {
          shortName: "Economie",
          timeSlot: "10:30 - 11:50",
          professor: "Ion Andrei",
          classRoom: "2213",
          shapeECO: ""
        },
        {
          shortName: "Economie",
          timeSlot: "15:0 - 16:20",
          professor: "Marian Serban",
          classRoom: "8102",
          shapeECO: ""
        }
      ],
      subjectListCTS: [
        {
          shortName: "CTS",
          timeSlot: "09:00 - 10:20",
          professor: "Andrei Ion",
          classRoom: "2011A",
          shapeCTS: ""
        },
        {
          shortName: "CTS",
          timeSlot: "10:30 - 12:00",
          professor: "Mihai Vasile",
          classRoom: "2011D",
          shapeCTS: ""
        },
        {
          shortName: "CTS",
          timeSlot: "12:00 - 13:30",
          professor: "Ion Claudiu",
          classRoom: "2112",
          shapeCTS: ""
        },
        {
          shortName: "CTS",
          timeSlot: "09:00 - 10:20",
          professor: "Denisa Serban",
          classRoom: "2202",
          shapeCTS: ""
        },
        {
          shortName: "CTS",
          timeSlot: "18:00 - 19:20",
          professor: "Mihai Vasile",
          classRoom: "2011D",
          shapeCTS: ""
        }
      ],
      subjectListATP: [
        {
          shortName: "ATP",
          timeSlot: "07:30 - 08:50",
          professor: "Smeureanu Ion",
          classRoom: "2011A",
          shapeATP: ""
        },
        {
          shortName: "ATP",
          timeSlot: "09:00 - 10:20",
          professor: "Mihai Vasile",
          classRoom: "2011D",
          shapeATP: ""
        },
        {
          shortName: "ATP",
          timeSlot: "12:00 - 13:20",
          professor: "Ion Claudiu",
          classRoom: "2112",
          shapeATP: ""
        }
      ]
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
    handleClick(e) {
      this.isClicked = true;

      /*----- AICI TREBUIE SA TRIMITEM VALORILE DIN MODEL PENTRU INTERVAL -----*/
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
