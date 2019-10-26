<template>
  <q-page class="flex flex-center">
    <div class="container">
      <div class="description-area">
        <h3 class="text-rubik">Schedule Planner App</h3>
        <p class="text-subtitle1">Fa din studentia ta o perioada minunata!</p>
      </div>
      <div class="login-area">
        <q-card class="login-card">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <img src="../assets/background.svg" />
          </q-card-section>

          <q-tabs v-model="tab">
            <q-tab label="Sign In" name="one" />
            <q-tab label="Sign Up" name="two" />
          </q-tabs>

          <q-separator />

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
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-image: url("../assets/background.svg");
  background-repeat: no-repeat;
  background-position: fixed;
  background-size: cover;
}
.description-area,
.login-area {
  flex-basis: 0;
  flex-grow: 1;
}
.description-area {
}
.login-area {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-card {
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
  name: "LoginPage",
  data() {
    return {
      tab: "one"
    };
  }
};
</script>
