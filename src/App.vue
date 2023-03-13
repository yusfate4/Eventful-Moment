<template>
  <div>
    <Header />

    <!-- <Register /> -->
    <router-view />
    <Footer />

  </div>
</template>


<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Register from '@/components/Register.vue'
import Additems from '@/components/Additems.vue'
import Edititems from '@/components/Edititems.vue'




export default {
  components: {
    Header,
    Footer,
    Register,
    Additems,
    Edititems,

  },
}

</script>