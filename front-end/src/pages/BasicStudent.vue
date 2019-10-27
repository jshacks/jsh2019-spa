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
              <q-slide-item
                v-for="(item,index) in group.luni"
                :key="index"
                @left="onLeft"
                @right="onRight"
                right-color="deep-orange-3 "
              >
                <template style="width: 100%;" v-slot:right>
                  <div class="row items-center">
                    <div style="margin-right: 10px; font-weight:bold;">
                      <p>{{item.subject}}</p>
                      <p>{{item.shortName}}</p>
                    </div>
                    <div style="margin-right: 15px; ">
                      <p>{{item.timeSlot}}</p>
                      <p>{{item.classRoom}}</p>
                    </div>
                    <p>{{item.professor}}</p>
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
                    <p>{{item.shortName}}</p>
                    <div class="icons-area">
                      <q-btn v-if="item.hourType.type ==='curs'" outline round disable label="C" />
                      <q-btn v-else outline round color="primary" disable label="S" />

                      <q-btn round v-if="item.hasAssignement" outline disable label="A" />

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
                    <p>{{item.timeSlot}}</p>
                    <p>{{item.classRoom}}</p>
                  </div>
                </div>
              </q-slide-item>
            </q-tab-panel>
            <q-tab-panel class="hour-slot" name="tuesday">
              <q-slide-item
                v-for="(item,index) in group.marti"
                :key="index"
                @left="onLeft"
                @right="onRight"
                right-color="deep-orange-3 "
              >
                <template style="width: 100%;" v-slot:right>
                  <div class="row items-center">
                    <div style="margin-right: 10px; font-weight:bold;">
                      <p>{{item.subject}}</p>
                      <p>{{item.shortName}}</p>
                    </div>
                    <div style="margin-right: 15px; ">
                      <p>{{item.timeSlot}}</p>
                      <p>{{item.classRoom}}</p>
                    </div>
                    <p>{{item.professor}}</p>
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
                    <p>{{item.shortName}}</p>
                    <div class="icons-area">
                      <q-btn v-if="item.hourType.type ==='curs'" outline round disable label="C" />
                      <q-btn v-else outline round color="primary" disable label="S" />

                      <q-btn round v-if="item.hasAssignement" outline disable label="A" />

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
                    <p>{{item.timeSlot}}</p>
                    <p>{{item.classRoom}}</p>
                  </div>
                </div>
              </q-slide-item>
            </q-tab-panel>
            <q-tab-panel class="hour-slot" name="wednesday">
              <q-slide-item
                v-for="(item,index) in group.miercuri"
                :key="index"
                @left="onLeft"
                @right="onRight"
                right-color="deep-orange-3 "
              >
                <template style="width: 100%;" v-slot:right>
                  <div class="row items-center">
                    <div style="margin-right: 10px; font-weight:bold;">
                      <p>{{item.subject}}</p>
                      <p>{{item.shortName}}</p>
                    </div>
                    <div style="margin-right: 15px; ">
                      <p>{{item.timeSlot}}</p>
                      <p>{{item.classRoom}}</p>
                    </div>
                    <p>{{item.professor}}</p>
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
                    <p>{{item.shortName}}</p>
                    <div class="icons-area">
                      <q-btn v-if="item.hourType.type ==='curs'" outline round disable label="C" />
                      <q-btn v-else outline round color="primary" disable label="S" />

                      <q-btn round v-if="item.hasAssignement" outline disable label="A" />

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
                    <p>{{item.timeSlot}}</p>
                    <p>{{item.classRoom}}</p>
                  </div>
                </div>
              </q-slide-item>
            </q-tab-panel>

            <q-tab-panel class="hour-slot" name="friday">
              <q-slide-item
                v-for="(item,index) in group.vineri"
                :key="index"
                @left="onLeft"
                @right="onRight"
                right-color="deep-orange-3 "
              >
                <template style="width: 100%;" v-slot:right>
                  <div class="row items-center">
                    <div style="margin-right: 10px; font-weight:bold;">
                      <p>{{item.subject}}</p>
                      <p>{{item.shortName}}</p>
                    </div>
                    <div style="margin-right: 15px; ">
                      <p>{{item.timeSlot}}</p>
                      <p>{{item.classRoom}}</p>
                    </div>
                    <p>{{item.professor}}</p>
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
                    <p>{{item.shortName}}</p>
                    <div class="icons-area">
                      <q-btn v-if="item.hourType.type ==='curs'" outline round disable label="C" />
                      <q-btn v-else outline round color="primary" disable label="S" />

                      <q-btn round v-if="item.hasAssignement" outline disable label="A" />

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
                    <p>{{item.timeSlot}}</p>
                    <p>{{item.classRoom}}</p>
                  </div>
                </div>
              </q-slide-item>
            </q-tab-panel>

            <q-tab-panel class="hour-slot" name="thursday">
              <q-slide-item
                v-for="(item,index) in group.joi"
                :key="index"
                @left="onLeft"
                @right="onRight"
                right-color="deep-orange-3 "
              >
                <template style="width: 100%;" v-slot:right>
                  <div class="row items-center">
                    <div style="margin-right: 10px; font-weight:bold;">
                      <p>{{item.subject}}</p>
                      <p>{{item.shortName}}</p>
                    </div>
                    <div style="margin-right: 15px; ">
                      <p>{{item.timeSlot}}</p>
                      <p>{{item.classRoom}}</p>
                    </div>
                    <p>{{item.professor}}</p>
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
                    <p>{{item.shortName}}</p>
                    <div class="icons-area">
                      <q-btn v-if="item.hourType.type ==='curs'" outline round disable label="C" />
                      <q-btn v-else outline round color="primary" disable label="S" />

                      <q-btn round v-if="item.hasAssignement" outline disable label="A" />

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
                    <p>{{item.timeSlot}}</p>
                    <p>{{item.classRoom}}</p>
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
              <q-slide-item
                v-for="(item,index) in personal.luni"
                :key="index"
                @left="onLeft"
                @right="onRight"
                right-color="deep-orange-3 "
              >
                <template style="width: 100%;" v-slot:right>
                  <div class="row items-center">
                    <div style="margin-right: 10px; font-weight:bold;">
                      <p>{{item.subject}}</p>
                      <p>{{item.shortName}}</p>
                    </div>
                    <div style="margin-right: 15px; ">
                      <p>{{item.timeSlot}}</p>
                      <p>{{item.classRoom}}</p>
                    </div>
                    <p>{{item.professor}}</p>
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
                    <p>{{item.shortName}}</p>
                    <div class="icons-area">
                      <q-btn v-if="item.hourType.type ==='curs'" outline round disable label="C" />
                      <q-btn v-else outline round color="primary" disable label="S" />

                      <q-btn round v-if="item.hasAssignement" outline disable label="A" />

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
                    <p>{{item.timeSlot}}</p>
                    <p>{{item.classRoom}}</p>
                  </div>
                </div>
              </q-slide-item>
            </q-tab-panel>
            <q-tab-panel class="hour-slot" name="tuesday">
              <q-slide-item
                v-for="(item,index) in personal.marti"
                :key="index"
                @left="onLeft"
                @right="onRight"
                right-color="deep-orange-3 "
              >
                <template style="width: 100%;" v-slot:right>
                  <div class="row items-center">
                    <div style="margin-right: 10px; font-weight:bold;">
                      <p>{{item.subject}}</p>
                      <p>{{item.shortName}}</p>
                    </div>
                    <div style="margin-right: 15px; ">
                      <p>{{item.timeSlot}}</p>
                      <p>{{item.classRoom}}</p>
                    </div>
                    <p>{{item.professor}}</p>
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
                    <p>{{item.shortName}}</p>
                    <div class="icons-area">
                      <q-btn v-if="item.hourType.type ==='curs'" outline round disable label="C" />
                      <q-btn v-else outline round color="primary" disable label="S" />

                      <q-btn round v-if="item.hasAssignement" outline disable label="A" />

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
                    <p>{{item.timeSlot}}</p>
                    <p>{{item.classRoom}}</p>
                  </div>
                </div>
              </q-slide-item>
            </q-tab-panel>
            <q-tab-panel class="hour-slot" name="wednesday">
              <q-slide-item
                v-for="(item,index) in personal.miercuri"
                :key="index"
                @left="onLeft"
                @right="onRight"
                right-color="deep-orange-3 "
              >
                <template style="width: 100%;" v-slot:right>
                  <div class="row items-center">
                    <div style="margin-right: 10px; font-weight:bold;">
                      <p>{{item.subject}}</p>
                      <p>{{item.shortName}}</p>
                    </div>
                    <div style="margin-right: 15px; ">
                      <p>{{item.timeSlot}}</p>
                      <p>{{item.classRoom}}</p>
                    </div>
                    <p>{{item.professor}}</p>
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
                    <p>{{item.shortName}}</p>
                    <div class="icons-area">
                      <q-btn v-if="item.hourType.type ==='curs'" outline round disable label="C" />
                      <q-btn v-else outline round color="primary" disable label="S" />

                      <q-btn round v-if="item.hasAssignement" outline disable label="A" />

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
                    <p>{{item.timeSlot}}</p>
                    <p>{{item.classRoom}}</p>
                  </div>
                </div>
              </q-slide-item>
            </q-tab-panel>

            <q-tab-panel class="hour-slot" name="friday">
              <q-slide-item
                v-for="(item,index) in personal.vineri"
                :key="index"
                @left="onLeft"
                @right="onRight"
                right-color="deep-orange-3 "
              >
                <template style="width: 100%;" v-slot:right>
                  <div class="row items-center">
                    <div style="margin-right: 10px; font-weight:bold;">
                      <p>{{item.subject}}</p>
                      <p>{{item.shortName}}</p>
                    </div>
                    <div style="margin-right: 15px; ">
                      <p>{{item.timeSlot}}</p>
                      <p>{{item.classRoom}}</p>
                    </div>
                    <p>{{item.professor}}</p>
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
                    <p>{{item.shortName}}</p>
                    <div class="icons-area">
                      <q-btn v-if="item.hourType.type ==='curs'" outline round disable label="C" />
                      <q-btn v-else outline round color="primary" disable label="S" />

                      <q-btn round v-if="item.hasAssignement" outline disable label="A" />

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
                    <p>{{item.timeSlot}}</p>
                    <p>{{item.classRoom}}</p>
                  </div>
                </div>
              </q-slide-item>
            </q-tab-panel>

            <q-tab-panel class="hour-slot" name="thursday">
              <q-slide-item
                v-for="(item,index) in personal.joi"
                :key="index"
                @left="onLeft"
                @right="onRight"
                right-color="deep-orange-3 "
              >
                <template style="width: 100%;" v-slot:right>
                  <div class="row items-center">
                    <div style="margin-right: 10px; font-weight:bold;">
                      <p>{{item.subject}}</p>
                      <p>{{item.shortName}}</p>
                    </div>
                    <div style="margin-right: 15px; ">
                      <p>{{item.timeSlot}}</p>
                      <p>{{item.classRoom}}</p>
                    </div>
                    <p>{{item.professor}}</p>
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
                    <p>{{item.shortName}}</p>
                    <div class="icons-area">
                      <q-btn v-if="item.hourType.type ==='curs'" outline round disable label="C" />
                      <q-btn v-else outline round color="primary" disable label="S" />

                      <q-btn round v-if="item.hasAssignement" outline disable label="A" />

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
                    <p>{{item.timeSlot}}</p>
                    <p>{{item.classRoom}}</p>
                  </div>
                </div>
              </q-slide-item>
            </q-tab-panel>

            <q-tab-panel name="tuesday">
              <div class="text-h6">tuesday</div>Nu ai ore azi.
            </q-tab-panel>

            <q-tab-panel name="wednesday">
              <div class="text-h6">wednesday</div>Nu ai ore azi.
            </q-tab-panel>
            <q-tab-panel name="thursday">
              <div class="text-h6">thursday</div>Nu ai ore azi.
            </q-tab-panel>
            <q-tab-panel name="friday">
              <div class="text-h6">friday</div>Nu ai ore azi.
            </q-tab-panel>
          </q-tab-panels>
        </div>
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
  margin-bottom: 15px;
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

.q-slide-item__right > div {
  transform-origin: right center;
  width: 100% !important;
  height: 100%;
}
.items-center p {
  margin: 0;
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
      group: {
        luni: [
          {
            subject: "Economie",
            timeSlot: "7:30 - 8:50",
            classRoom: "2101",
            hasAssignement: false,
            professor: "Ion Ionescu",
            shortName: "Economie",
            hourType: {
              type: "curs"
            }
          },
          {
            subject: "Bazele Statisticii",
            timeSlot: "9:00 - 10:20",
            classRoom: "2101",
            hasAssignement: false,
            professor: "Maria Popescu",
            shortName: "BS",
            hourType: {
              type: "curs"
            }
          },
          {
            subject: "Bazele Statisticii",
            timeSlot: "10:30 - 11:50",
            classRoom: "2502",
            hasAssignement: true,
            professor: "Maria Popescu",
            shortName: "BS",
            hourType: {
              type: "seminar"
            }
          }
        ],
        marti: [
          {
            subject: "Bazele Programarii Calculatoarelor",
            timeSlot: "12:00 - 13:20",
            classRoom: "2209",
            hasAssignement: true,
            professor: "Ion Vasile",
            shortName: "BPC",
            hourType: {
              type: "seminar"
            }
          },
          {
            subject: "Bazele Tehnologiei informatiei",
            timeSlot: "13:30 - 14:50",
            classRoom: "2305",
            hasAssignement: true,
            professor: "Iulia Matei",
            shortName: "BTI",
            hourType: {
              type: "seminar"
            }
          },
          {
            subject: "Bazele Cercetarilor Operationale",
            timeSlot: "15:00 - 16:20",
            classRoom: "2103",
            hasAssignement: true,
            professor: "Ana Ionita",
            shortName: "BCO",
            hourType: {
              type: "seminar"
            }
          }
        ],
        miercuri: [
          {
            subject: "Bazele Programarii Calculatoarelor",
            timeSlot: "12:00 - 13:20",
            classRoom: "2201",
            hasAssignement: false,
            professor: "Andrei Dumitru",
            shortName: "BPC",
            hourType: {
              type: "curs"
            }
          },
          {
            subject: "Economie",
            timeSlot: "13:30 - 14:50",
            classRoom: "2621",
            hasAssignement: true,
            professor: "Vasile George",
            shortName: "Economie",
            hourType: {
              type: "seminar"
            }
          },
          {
            subject: "Bazele Tehnologiei informatiei",
            timeSlot: "15:00 - 16:20",
            classRoom: "2201",
            hasAssignement: false,
            professor: "Marin Grigorescu",
            shortName: "BTI",
            hourType: {
              type: "curs"
            }
          },
          {
            subject: "Limba Engleza",
            timeSlot: "16:30 - 17:50",
            classRoom: "2201",
            hasAssignement: false,
            professor: "Teo Belododia",
            shortName: "Engleza",
            hourType: {
              type: "seminar"
            }
          }
        ],
        joi: [],
        vineri: [
          {
            subject: "Algebra",
            timeSlot: "7:30 - 8:50",
            classRoom: "1208",
            hasAssignement: false,
            professor: "Octavian Manescu",
            shortName: "Algebra",
            hourType: {
              type: "seminar"
            }
          },
          {
            subject: "Algebra",
            timeSlot: "9:00 - 10:20",
            classRoom: "2201",
            hasAssignement: false,
            professor: "Octavian Manescu",
            shortName: "Algebra",
            hourType: {
              type: "curs"
            }
          }
        ]
      },
      personal: {
        luni: [
          {
            subject: "Economie",
            timeSlot: "7:30 - 8:50",
            classRoom: "2101",
            hasAssignement: false,
            professor: "Ion Ionescu",
            shortName: "Economie",
            hourType: {
              type: "curs"
            }
          },
          {
            subject: "Bazele Statisticii",
            timeSlot: "9:00 - 10:20",
            classRoom: "2101",
            hasAssignement: false,
            professor: "Maria Popescu",
            shortName: "BS",
            hourType: {
              type: "curs"
            }
          },
          {
            subject: "Bazele Statisticii",
            timeSlot: "10:30 - 11:50",
            classRoom: "2502",
            hasAssignement: true,
            professor: "Maria Popescu",
            shortName: "BS",
            hourType: {
              type: "seminar"
            }
          },
          {
            subject: "Algebra",
            timeSlot: "7:30 - 8:50",
            classRoom: "1208",
            hasAssignement: false,
            professor: "Octavian Manescu",
            shortName: "Algebra",
            hourType: {
              type: "seminar"
            }
          },
          {
            subject: "Algebra",
            timeSlot: "9:00 - 10:20",
            classRoom: "2201",
            hasAssignement: false,
            professor: "Octavian Manescu",
            shortName: "Algebra",
            hourType: {
              type: "curs"
            }
          }
        ],
        marti: [
          {
            subject: "Bazele Programarii Calculatoarelor",
            timeSlot: "12:00 - 13:20",
            classRoom: "2209",
            hasAssignement: true,
            professor: "Ion Vasile",
            shortName: "BPC",
            hourType: {
              type: "seminar"
            }
          },
          {
            subject: "Bazele Tehnologiei informatiei",
            timeSlot: "13:30 - 14:50",
            classRoom: "2305",
            hasAssignement: true,
            professor: "Iulia Matei",
            shortName: "BTI",
            hourType: {
              type: "seminar"
            }
          },
          {
            subject: "Bazele Cercetarilor Operationale",
            timeSlot: "15:00 - 16:20",
            classRoom: "2103",
            hasAssignement: true,
            professor: "Ana Ionita",
            shortName: "BCO",
            hourType: {
              type: "seminar"
            }
          }
        ],
        miercuri: [
          {
            subject: "Bazele Programarii Calculatoarelor",
            timeSlot: "12:00 - 13:20",
            classRoom: "2201",
            hasAssignement: false,
            professor: "Andrei Dumitru",
            shortName: "BPC",
            hourType: {
              type: "curs"
            }
          },
          {
            subject: "Economie",
            timeSlot: "13:30 - 14:50",
            classRoom: "2621",
            hasAssignement: true,
            professor: "Vasile George",
            shortName: "Economie",
            hourType: {
              type: "seminar"
            }
          },
          {
            subject: "Bazele Tehnologiei informatiei",
            timeSlot: "15:00 - 16:20",
            classRoom: "2201",
            hasAssignement: false,
            professor: "Marin Grigorescu",
            shortName: "BTI",
            hourType: {
              type: "curs"
            }
          },
          {
            subject: "Limba Engleza",
            timeSlot: "16:30 - 17:50",
            classRoom: "2201",
            hasAssignement: false,
            professor: "Teo Belododia",
            shortName: "Engleza",
            hourType: {
              type: "seminar"
            }
          }
        ],
        joi: [],
        vineri: []
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
