<template>
  <q-page >
    <q-circular-progress
      v-if="!loaded"
      indeterminate
      size="40vw"
      :thickness="0.22"
      color="teal"
      track-color="grey-3"
      class="q-ma-md"
    />
 <div class="year-area">


          <q-tabs v-model="tab">
            <q-tab label="Add subject" name="one" />
            <q-tab label="Add series lead" name="two" />
          </q-tabs>


          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="one">
              


              <div class="q-pa-md">
                <div class="q-gutter-md row">
                  <q-select
                    filled
                    v-model="subject"
                    use-input
                    input-debounce="0"
                    label="Subject"
                    :options="subjectOptions"
                    @filter="filterFn"
                    style="width: 250px"

                  >
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          No results
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="two">
              With so much content to display at once, and often so little screen real-estate,
              Cards have fast become the design pattern of choice for many companies, including
              the likes of Google and Twitter.
            </q-tab-panel>
          </q-tab-panels>
      </div>


       
  </q-page>


</template>

<style>
.q-pa-md{
  width:100%;
  display: flex;
 justify-content: center;
}

.q-tabs{
    width:100%;
}

</style>

<script>
const subjectOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]
// const subjectOptions = [
//   'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
// ]
export default {
  name: "MainPage",
  data() {
    return {
      tab: "one",
      subject: null,
      professor:null,
      subjectOptions: subjectOptions,

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
    onItemClick () {
      // console.log('Clicked on an Item')
    },
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.options = stringOptions
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.options = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    }
  }
};
</script>
