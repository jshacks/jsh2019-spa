<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          <img class="logo" src="../assets/logo1.png" />
        </q-toolbar-title>
        <q-btn
          class="absolute-right"
          @click="$router.push('/login')"
          round
          color="primary"
          icon="img:../assets/logout.png"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<style>
.logo {
  margin-top: 12%;
  width: 30%;
}
.q-btn {
  cursor: pointer;
  box-shadow: none;
  padding-right: 5%;
}
.q-toolbar__title {
  z-index: -1;
  text-align: center;
  border-radius: 5%;
  font-size: 2em;
}
img {
  left: 50%;
}
.fixed-top {
  height: 10%;
  top: 0;
  left: 0;
  right: 0;
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
  */
@media (min-width: 650px) {
  .logo {
    width: 20%;
    margin-top: 5%;
  }
}
@media (min-width: 1000px) {
  .fixed-top {
    height: 10%;
    top: 0;
    left: 0;
    right: 0;
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 30%;
  }
  .logo {
    width: 10%;
    margin-top: 3%;
  }
}

/* 
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */

@media (min-width: 768px) and (max-width: 1280px) {
  .fixed-top {
    height: 7%;
    top: 0;
    left: 0;
    right: 0;
    border-bottom-left-radius: 30%;
    border-bottom-right-radius: 30%;
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>



