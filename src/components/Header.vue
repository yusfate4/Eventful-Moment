<template>
  <header class="border-1 border-solid border-rose-900 bg-emerald-500 md:flex justify-between items-center">
    <div class="ml-14 text-white font-bold italic cursor-pointer text-xl">Eventful Moment</div>

    <ul class="md:flex md:items-center md:px-0 px-10 md:pb pb-6 mr-10 mt-4">
      <li class="text-white">
        <a href="#" class="text-x hover:text-orange-300">Log in</a>
        <a href="#" class="text-x ml-4 hover:text-orange-300">Register</a>
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
