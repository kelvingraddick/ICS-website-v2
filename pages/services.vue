<template>
  <main>
		<div class="bg-white">
      <div class="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-0">
        <div class="space-y-8 sm:space-y-12">
          <div class="space-y-5 sm:space-y-4">
            <h2 class="text-3xl text-gray-700 leading-9 font-extrabold tracking-tight sm:text-4xl">Our services</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-hidden">
      <div class="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>
        <div class="relative lg:grid lg:grid-cols-3 lg:col-gap-8">
          <div class="lg:col-span-1">
            <h3 class="leading-9 tracking-tight text-gray-700 sm:text-4xl sm:leading-10">
              <i v-html="content['Section 1 Sub-Title']"></i>
            </h3>
          </div>
          <div class="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
            <div>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="content['Section 1 Point 1 Icon']" />
                </svg>
              </div>
              <div class="mt-5">
                <h4 v-html="content['Section 1 Point 1 Title']" class="text-lg leading-6 font-medium text-gray-700"></h4>
                <p v-html="content['Section 1 Point 1 Sub-Title']" class="mt-2 text-base leading-6 text-gray-500"></p>
              </div>
            </div>
            <div class="mt-10 sm:mt-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="content['Section 1 Point 2 Icon']" />
                </svg>
              </div>
              <div class="mt-5">
                <h4 v-html="content['Section 1 Point 2 Title']" class="text-lg leading-6 font-medium text-gray-700"></h4>
                <p v-html="content['Section 1 Point 2 Sub-Title']" class="mt-2 text-base leading-6 text-gray-500"></p>
              </div>
            </div>
            <div class="mt-10 sm:mt-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="content['Section 1 Point 3 Icon']" />
                </svg>
              </div>
              <div class="mt-5">
                <h4 v-html="content['Section 1 Point 3 Title']" class="text-lg leading-6 font-medium text-gray-700"></h4>
                <p v-html="content['Section 1 Point 3 Sub-Title']" class="mt-2 text-base leading-6 text-gray-500"></p>
              </div>
            </div>
            <div class="mt-10 sm:mt-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="content['Section 1 Point 4 Icon']" />
                </svg>
              </div>
              <div class="mt-5">
                <h4 v-html="content['Section 1 Point 4 Title']" class="text-lg leading-6 font-medium text-gray-700"></h4>
                <p v-html="content['Section 1 Point 4 Sub-Title']" class="mt-2 text-base leading-6 text-gray-500"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 pt-12 sm:pt-16">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mx-auto text-center">
          <h2 class="text-3xl leading-9 font-extrabold text-gray-700 sm:text-4xl sm:leading-10">
            How we work
          </h2>
          <img class="relative w-full mt-16 pb-24" src="/ics-image-15.png" alt="">
        </div>
      </div>
    </div>
    <div class="pt-12 sm:pt-16">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mx-auto text-center">
          <h2 class="text-3xl leading-9 font-extrabold text-gray-700 sm:text-4xl sm:leading-10">
            Our products and services
          </h2>
          <img class="relative w-full mx-auto mt-16 mb-24" src="/ics-services-1.png" alt="">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import Content from '@/content/pages/services.json';

  export default {
    data: function() {
      return {
        content: Content
      }
    }
  }
</script>

<style>

</style>
