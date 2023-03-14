<template>
    <div class="flex mt-2 ml-12">
        <div class="w-96 p-6 mb-10">

            <div class="mt-2">
                <label for="date" class="block text-base mb-2">Date in the future</label>
                <input type="text" id="date"
                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
            </div>
            <div class="mt-6">
                <label for="title" class="block text-base mb-2">Title</label>
                <input type="text" id="title"
                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
            </div>
            <div class="mt-6">
                <label for="details" class="block text-base mb-2">Details</label>
                <!-- <input type="text" id="details"
                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" /> -->
                <textarea
                    class="w-full h-60 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-0 focus:border-gray-600"
                    rows="4"></textarea>
            </div>

            <div class="mt-5 text-center">
                <button type="submit"
                    class="border-2 border-blue-500 bg-blue-500 text-white py-2 w-2/4 my-2 mx-auto rounded-md hover:bg-transparent hover:text-blue-500">
                    <router-link to="Eventful">
                        Save
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
   
 
 
 