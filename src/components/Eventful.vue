<template>
    <div class="">
        <div class="flex justify-between p-12">
            <div>
                <h1 class="font-bold text-2xl">Welcome John Doe,</h1>
                <p class="text-xs w-100 mt-2">Here are items in your eventful moment bucket.</p>
            </div>
            <div class="text-center">
                <button type="submit"
                    class="border-2 w-100 border-indigo-700  bg-indigo-700 text-white px-5 py-2 mx-auto rounded-md hover:bg-transparent hover:text-indigo-700">
                    <router-link to="Additems">
                        Add items
                    </router-link>
                </button>
            </div>
        </div>

        <!-- Card Component -->
        <div class="">
            <section class="md:h-full flex items-center text-gray-600">
                <div class="container px-5 py-14 mx-auto">

                    <div class="flex flex-wrap -m-4">

                        <!-- CARD 1 -->
                        <div class="p-4 sm:w-1/2 lg:w-1/2">
                            <div class="w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                                <div class="p-6 hover:bg-yellow-400 hover:text-white transition duration-300 ease-in">
                                    <p class="text-xs font-bold mb-3 text-black">Lorem ipsum began as scrambled, nonsensical
                                        Latin
                                        derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.</p>
                                    <p class="leading-relaxed mb-3 text-sm text-black font-light">Until recently, the
                                        prevailing view assumed lorem ipsum
                                        was born as a nonsense text. “It’s not Latin, though it looks like it, and it
                                        actually says nothing,” Before & After magazine answered a curious reader, “Its
                                        ‘words’ loosely approximate the frequency with which letters occur in English, which
                                        is why at a glance it looks pretty real. Until recently, the prevailing view assumed
                                        lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it,
                                        and it actually says nothing,” Before & After magazine answered a curious reader,
                                        “Its ‘words’ loosely approximate the frequency with which letters occur in English,
                                        which is why at a glance it looks pretty real.</p>
                                    <div class="flex items-center flex-wrap ">
                                        <a class="text-blue-900 inline-flex items-center md:mb-2 lg:mb-0">View Details

                                        </a>
                                        <span
                                            class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">

                                            20/01/2021 </span>
                                        <span class="text-black inline-flex items-center leading-none text-sm">

                                            20/01/2025 </span>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <!-- CARD 2 -->

                        <div class="p-4 sm:w-1/2 lg:w-1/2">
                            <div class="w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                                <div class="p-6 hover:bg-yellow-400 hover:text-white transition duration-300 ease-in">
                                    <p class="text-xs font-bold mb-3 text-black">Lorem ipsum began as scrambled, nonsensical
                                        Latin
                                        derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.</p>
                                    <p class="leading-relaxed mb-3 text-sm text-black font-light">Until recently, the
                                        prevailing view assumed lorem ipsum
                                        was born as a nonsense text. “It’s not Latin, though it looks like it, and it
                                        actually says nothing,” Before & After magazine answered a curious reader, “Its
                                        ‘words’ loosely approximate the frequency with which letters occur in English, which
                                        is why at a glance it looks pretty real. Until recently, the prevailing view assumed
                                        lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it,
                                        and it actually says nothing,” Before & After magazine answered a curious reader,
                                        “Its ‘words’ loosely approximate the frequency with which letters occur in English,
                                        which is why at a glance it looks pretty real.</p>
                                    <div class="flex items-center flex-wrap ">
                                        <a class="text-blue-900 inline-flex items-center md:mb-2 lg:mb-0">View Details

                                        </a>
                                        <span
                                            class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">

                                            20/01/2021 </span>
                                        <span class="text-black inline-flex items-center leading-none text-sm">

                                            20/01/2025 </span>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <!-- CARD 3 -->

                        <div class="p-4 sm:w-1/2 lg:w-1/2">
                            <div class="w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                                <div class="p-6 hover:bg-yellow-400 hover:text-white transition duration-300 ease-in">
                                    <p class="text-xs font-bold mb-3 text-black">Lorem ipsum began as scrambled, nonsensical
                                        Latin
                                        derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.</p>
                                    <p class="leading-relaxed mb-3 text-sm text-black font-light">Until recently, the
                                        prevailing view assumed lorem ipsum
                                        was born as a nonsense text. “It’s not Latin, though it looks like it, and it
                                        actually says nothing,” Before & After magazine answered a curious reader, “Its
                                        ‘words’ loosely approximate the frequency with which letters occur in English, which
                                        is why at a glance it looks pretty real. Until recently, the prevailing view assumed
                                        lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it,
                                        and it actually says nothing,” Before & After magazine answered a curious reader,
                                        “Its ‘words’ loosely approximate the frequency with which letters occur in English,
                                        which is why at a glance it looks pretty real.</p>
                                    <div class="flex items-center flex-wrap ">
                                        <a class="text-blue-900 inline-flex items-center md:mb-2 lg:mb-0">View Details

                                        </a>
                                        <span
                                            class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">

                                            20/01/2021 </span>
                                        <span class="text-black inline-flex items-center leading-none text-sm">

                                            20/01/2025 </span>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <!-- CARD 4 -->

                        <div class="p-4 sm:w-1/2 lg:w-1/2">
                            <div class="w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                                <div class="p-6 hover:bg-yellow-400 hover:text-white transition duration-300 ease-in">
                                    <p class="text-xs font-bold mb-3 text-black">Lorem ipsum began as scrambled, nonsensical
                                        Latin
                                        derived from Cicero’s 1st-century BC text De Finibus Bonorum et Malorum.</p>
                                    <p class="leading-relaxed mb-3 text-sm text-black font-light">Until recently, the
                                        prevailing view assumed lorem ipsum
                                        was born as a nonsense text. “It’s not Latin, though it looks like it, and it
                                        actually says nothing,” Before & After magazine answered a curious reader, “Its
                                        ‘words’ loosely approximate the frequency with which letters occur in English, which
                                        is why at a glance it looks pretty real. Until recently, the prevailing view assumed
                                        lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it,
                                        and it actually says nothing,” Before & After magazine answered a curious reader,
                                        “Its ‘words’ loosely approximate the frequency with which letters occur in English,
                                        which is why at a glance it looks pretty real.</p>
                                    <div class="flex items-center flex-wrap ">
                                        <a class="text-blue-900 inline-flex items-center md:mb-2 lg:mb-0">View Details

                                        </a>
                                        <span
                                            class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">

                                            20/01/2021 </span>
                                        <span class="text-black inline-flex items-center leading-none text-sm">

                                            20/01/2025 </span>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </div>

    </div>
</template>
   
<script>
export default {
    name: 'Footer'

}
</script>
   
 
 
 