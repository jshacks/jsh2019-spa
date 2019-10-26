<template>
  <q-layout view="hHh lpR fFf">

    <q-header 
   class="bg-primary text-whitev	">
      <q-toolbar>
        <q-toolbar-title class=" absolute-center">
          
          SPA
        </q-toolbar-title>
         <q-btn class="absolute-right" round color="primary" icon="img:../assets/logout.png"   @click="$router.push('/login')" />
     </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>


<style>
  .q-btn{
    box-shadow: none;
    padding-right: 5%;
  }
  .q-toolbar__title{
    z-index: -1;
    text-align:center;
    border-radius: 5%;
    font-size: 2em;
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

  @media (min-width: 1025px)  {
    
    .fixed-top {
      height: 10%;
      top: 0;
      left: 0;
      right: 0;
      border-bottom-left-radius: 30%;
      border-bottom-right-radius: 30%;
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
  data () {
    return {
    }
  }
}
</script>



