<template>
  <form @submit.prevent="handleSubmit">
  <div class="flex justify-center items-center md:flex-wrap mt-16">
    <div class="md:w-4/12 sd:w-4/12 p-6 my-0 mx-auto">
      <h1 class="text-3xl md:text-sm  block font-semibold">Welcome back,</h1>
      <p class="mt-3 font-light text-sm">Hi, my name is Eventful Moments, I am a bucket… no, not the bucket of water but I
        store awesome moments you will
        like to have in coming years.</p>
      <div class="mt-6">
        <label for="email" class="block text-base mb-2">Email</label>
        <input type="text" id="email" v-model="email" required
          class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
      </div>
      <div class="mt-6">
        <label for="password" class="block text-base mb-2">Password</label>
        <input type="password" id="password" v-model="password" required
          class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
      </div>

      <div class="mt-5 mb-20 text-center">
        <button type="submit"
          class="border-2 border-blue-500 bg-blue-500 text-white py-2 w-2/4 my-2 mx-auto rounded-md hover:bg-transparent hover:text-blue-500 ">
          <!-- <router-link to="Eventful">
            Login
          </router-link> -->
          Login
        </button>
      </div>
    </div>
  </div>
</form>
</template>




<script>
import axios from 'axios'



export default {
  name: 'HomeView',
//  async created() {
//   let response = await axios.get('login')

//   console.log(response);
//   },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  // components: {
  // },


  methods: {
    async handleSubmit() {
      let response = await axios.post('login', {
        email: this.email,
        password: this.password,
      });

      localStorage.setItem('token', response.data.token)
      this.$router.push('/Eventful')
      console.log(response);
      //  if (result.status == 201) {
      //   alert('login done')
      // }
    }
  }

}
</script>
