<template>
  <header class="border-1 border-solid border-rose-900 bg-emerald-900 md:flex md:items-center justify-between">
    <div class="md:ml-14 md:text-center text-center text-white font-bold italic cursor-pointer text-xl">Eventful Moment
    </div>

    <ul class="md:flex md:items-center text-center md:px-0 px-10 md:pb pb-6 mr-10 mt-4">
      <li class="text-white">
        <a href="#" class="text-x hover:text-orange-300">


          <router-link to="/">
            Login
          </router-link>
        </a>
        <a href="#" class="text-x ml-4 hover:text-orange-300">

          <router-link to="Register">
            Register
          </router-link>
        </a>
      </li>
    </ul>

    <!-- <div>
      <a href="#">Log in</a>
      <a href="#">Register</a>
    </div> -->
  </header>
</template>

<script>
export default {
  name: 'Header'

}
</script>
