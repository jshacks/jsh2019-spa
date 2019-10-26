<template>
  <q-page class="flex flex-center">
    <div class="container">
      <div class="description-area">
        <h3 class="text-rubik">Schedule Planner App</h3>
        <p class="text-subtitle1">Fa din studentia ta o perioada minunata!</p>
      </div>
      <div class="login-area"></div>
    </div>
  </q-page>
</template>

<style>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: darkgoldenrod;
  /* background-image: url("../assets/img/background.svg");
  background-repeat: no-repeat;
  background-position: fixed;
  background-size: cover; */
}
.description-area,
.login-area {
  flex-basis: 0;
  flex-grow: 1;
}
.description-area {
  background: darkgreen;
}
.login-area {
  display: flex;
  background: darkred;
  justify-content: center;
  align-items: center;
}
</style>

<script>
export default {
  name: "LoginPage"
};
</script>
