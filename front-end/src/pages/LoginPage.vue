<template>
  <q-page class="flex flex-center">
    <div class="container">
      <div class="description-area">
        <h3 class="text-rubik">Schedule Planner App</h3>
        <p class="text-subtitle1">Fa din studentia ta o perioada minunata!</p>
      </div>
      <div class="login-area">
        <q-card class="login-card">
          <q-card-section class="card-section">
            <div class="img-center">
              <img src="../assets/sad.svg" />
            </div>
          </q-card-section>

          <q-tabs v-model="tab">
            <q-tab label="Sign In" name="one" />
            <q-tab label="Sign Up" name="two" />
          </q-tabs>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="one">
              <q-input
                standout="bg-light-blue-8   text-white"
                v-model="password"
                type="password"
                label="Password"
              />
              <q-input
                standout="bg-light-blue-8    text-white"
                v-model="email"
                type="email"
                label="Email"
              />
            </q-tab-panel>

            <q-tab-panel name="two">
              <q-input
                standout="bg-light-blue-8   text-white"
                v-model="password"
                type="password"
                label="Password"
              />
              <q-input
                standout="bg-light-blue-8    text-white"
                v-model="email"
                type="email"
                label="Email"
              />
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
  max-width: 300px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 2vh;
  width: 25vw;
  background-color: #f5f5f5;
}

.q-tab-panel {
  background-color: #f5f5f5;
}

.card-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.q-field--standout .q-field__control {
  margin-bottom: 10px;
}
@media only screen and (max-width: 700px) {
  .description-area {
    display: none;
  }
  .login-card {
    width: 90%;
  }
}
</style>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      tab: "one",
      password: "",
      email: ""
    };
  }
};
</script>
