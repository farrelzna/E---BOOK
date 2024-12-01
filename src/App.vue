<template>

  <div>
    <!-- nama wajib sesuai dengan component -->
    <Navbar></Navbar>
    <!-- menampilkan pages sesuai dengan url/path ynag diakses -->
    <router-view></router-view>
  </div>

</template>

<script>
  // import components
  import Navbar from './components/Navbar.vue';

  // inisialisasi component
  export default {
    name: "App",
    components: {
      Navbar
    }
  }
</script>