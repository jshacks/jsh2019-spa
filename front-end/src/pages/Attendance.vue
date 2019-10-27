<template>
  <q-page>
    <div class="year-area">
      <q-tabs v-model="tab">
        <q-tab label="Add subject" name="one" />
        <q-tab label="Add series lead" name="two" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="one">
          <div class="q-pa-md" style="width:100%">
            <q-list :key="index" v-for="(item,index) in users">
              <q-slide-item
                right-color="red-5"
                @left="(e) => onLeft(e, index)"
                @right="(e) => onRight(e, index)"
              >
                <template v-slot:left>
                  <div class="row items-center">
                    <q-icon left name="done" />Present
                  </div>
                </template>
                <template v-slot:right>
                  <div class="row items-center">Absent</div>
                </template>

                <q-item>
                  <q-item-section avatar>
                    <q-icon v-if="item.present===0" right size="xl" name="alarm" />
                    <q-icon v-else-if="item.present===1" right size="xl" color="green" name="done" />

                    <q-icon v-else right size="xl" color="red" name="block" />
                  </q-item-section>
                  <q-item-section>Zamfirescu Teodor</q-item-section>
                </q-item>
              </q-slide-item>
            </q-list>
          </div>
          <div class="q-pa-md q-gutter-sm">
            <q-btn class="Save" color="primary" label="Trimite" />
          </div>
        </q-tab-panel>
        <q-tab-panel name="two">
          <div class="q-gutter-md row">
            <q-select
              filled
              v-model="seriesLeads"
              use-input
              hide-selected
              fill-input
              input-debounce="0"
              :options="options"
              @filter="filterFn"
              style="width: 250px; padding-bottom: 32px"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">No results</q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<style>
.q-slide-item {
  border-bottom: 3px solid #3b1600;
}
.q-gutter-sm {
  display: flex;
  justify-content: center;
}
.stud_list {
  width: 80%;
}

.q-tab-panel {
  padding: none;
}

.q-pa-md {
  padding: none;
}
.q-tabs {
  width: 100%;
}
</style>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      tab: "one",
      users: [
        { name: "Aaaaaa Bbbbbb", present: 0 },
        { name: "Aaaaaa Bbbbbb", present: 0 },
        { name: "Aaaaaa Bbbbbb", present: 0 },
        { name: "Aaaaaa Bbbbbb", present: 0 },
        { name: "Aaaaaa Bbbbbb", present: 0 },
        { name: "Aaaaaa Bbbbbb", present: 0 },
        { name: "Aaaaaa Bbbbbb", present: 0 },
        { name: "Aaaaaa Bbbbbb", present: 0 },
        { name: "Aaaaaa Bbbbbb", present: 0 },
        { name: "Aaaaaa Bbbbbb", present: 0 },
        { name: "Aaaaaa Bbbbbb", present: 0 }
      ],
      isSend: false,
      seriesLeads: [
        {
          name: "Victor Babes",
          group: "1077"
        },
        {
          name: "Victor Babes",
          group: "1077"
        },
        {
          name: "Victor Babes",
          group: "1077"
        },
        {
          name: "Victor Babes",
          group: "1077"
        },
        {
          name: "Victor Babes",
          group: "1077"
        }
      ]
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
  },
  methods: {
    onItemClick() {
      // console.log('Clicked on an Item')
    },
    onLeft({ reset }, index) {
      this.users[index].present = 1;

      // this.$q.notify("Present action triggered. Resetting in 1 second.");
      this.finalize(reset);
    },
    onR(item) {},
    onRight({ reset }, index) {
      this.users[index].present = -1;
      console.log(this.users);
      // this.$q.notify("Right action triggered. Resetting in 1 second.");
      this.finalize(reset);
    },

    finalize(reset) {
      this.timer = setTimeout(() => {
        reset();
      }, 500);
    },
    handleSend() {
      isSend: true;
    }
  },

  beforeDestroy() {
    clearTimeout(this.timer);
  }
};
</script>
