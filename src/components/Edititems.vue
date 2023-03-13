<template>
    <div class="flex mt-2 ml-12">
        <div class="w-96 p-6 mb-10">

            <div class="mt-2">
                <label for="date" class="block text-base mb-2">Date in the future</label>
                <input type="text" id="date" placeholder="20/07/2050"
                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
            </div>
            <div class="mt-6">
                <label for="title" class="block text-base mb-2">Title</label>
                <input type="text" id="title"
                    placeholder="Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum."
                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
            </div>
            <div class="mt-6">
                <label for="details" class="block text-base mb-2">Details</label>
                <!-- <input type="text" id="details"
                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" /> -->
                <textarea
                    placeholder="Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real."
                    class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-0 focus:border-gray-600"
                    rows="4"></textarea>
            </div>

            <div class="mt-5 text-center">
                <button type="submit"
                    class="border-2 border-indigo-700 bg-indigo-700 text-white py-2 w-2/4 my-2 mx-auto rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">
                    <router-link to="/">
                        Update
                    </router-link>
                </button>
            </div>
        </div>
    </div>
</template>
   
<script>
export default {
    name: 'Footer'

}
</script>
   
 
 
 