<template>
  <form @submit.prevent="handleSubmit">
    <div class="flex justify-center items-center mt-16">
      <div class="w-96 p-6 ">
        <h1 class="text-3xl block font-semibold">Create an account,</h1>
        <!-- <p class="mt-3 font-light text-sm">Hi, my name is Eventful Moments, I am a bucket… no, not the bucket of water but I
        store awesome moments you will
        like to have in coming years.</p> -->
        <div class="mt-6">
          <label for="Fullname" class="block text-base mb-2">Enter your Full name</label>
          <input type="text" id="fullname" v-model="fullname"
            class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" required />
        </div>
        <div class="mt-6">
          <label for="email" class="block text-base mb-2">Email</label>
          <input type="text" id="email" v-model="email"
            class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" required />
        </div>
        <div class="mt-6">
          <label for="password" class="block text-base mb-2">Password</label>
          <input type="password" id="password" v-model="password"
            class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" required />
        </div>

        <div class="mt-5 mb-20 text-center">
          <button type="submit"
            class="border-2 border-blue-500 bg-blue-500 text-white py-2 w-2/4 my-2 mx-auto rounded-md hover:bg-transparent hover:text-blue-500 ">
            <!-- <router-link to="/">
            Create
          </router-link> -->
            Create
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
   
<script>
import axios from 'axios'


export default {
  name: 'Register',
  data() {
    return {
      fullname: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit() {

      const response = await axios.post('signup',
        {
          fullname: this.fullname,
          email: this.email,
          password: this.password
        }

      );

      localStorage.setItem('token', response.data.token)
      this.$router.push('/')
    }
  }

}
</script>
   