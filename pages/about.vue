<template>
  <main>
    <div class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 xl:px-0">
        <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div class="space-y-5 sm:space-y-4">
            <h2 class="text-3xl text-gray-700 leading-9 font-extrabold tracking-tight sm:text-4xl">About us</h2>
            <p v-html="content['Header Sub-Title Text']" class="text-xl leading-7 text-gray-500"></p>
          </div>
          <div class="lg:col-span-2">
            <ul class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:col-gap-8 lg:space-y-0">
              <li class="sm:py-8">
                <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                  <div class="relative pb-2/3 sm:pt-2/3">
                    <img class="absolute inset-0 object-cover h-full w-full shadow-lg rounded-lg" :src="content['CEO Image']"  alt="">
                  </div>
                  <div class="sm:col-span-2">
                    <div class="space-y-4">
                      <div class="text-lg text-gray-700 leading-6 font-medium space-y-1">
                        <h4>Andre Walthall</h4>
                        <p class="text-orange-500">Chief Executive Officer</p>
                      </div>
                      <div class="text-lg leading-7">
                        <p v-html="content['CEO Description Text']" class="text-gray-500"></p>
                      </div>
                      <ul class="flex space-x-5">
                        <li>
                          <a :href="content['CEO Twitter URL']" target="_blank" class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
                            <span class="sr-only">Twitter</span>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a :href="content['CEO LinkedIn URL']" target="_blank" class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150">
                            <span class="sr-only">LinkedIn</span>
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--
    <div class="bg-white">
      <div class="max-w-screen-xl w-full mx-auto py-12 px-4 sm:px-6 lg:px-0 lg:py-12">
        <div class="space-y-8 sm:space-y-12">
          <div class="space-y-5 sm:space-y-4">
            <h2 class="text-3xl text-gray-700 leading-9 font-extrabold tracking-tight sm:text-4xl">Meet the team</h2>
            <p v-html="content['Section 1 Sub-Title Text']" class="text-xl leading-7 text-gray-500"></p>
          </div>
          <ul class="grid grid-cols-2 col-gap-4 row-gap-8 sm:grid-cols-4 md:col-gap-6 lg:col-gap-8 lg:row-gap-12 xl:grid-cols-6">
            <li>
              <div class="space-y-4">
                <img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" :src="content['Section 1 Team Member 1 Image']" alt="">
                <div class="space-y-2">
                  <div class="text-xs text-gray-700 leading-4 font-medium lg:text-sm lg:leading-5">
                    <h4 v-html="content['Section 1 Team Member 1 Name']"></h4>
                    <p v-html="content['Section 1 Team Member 1 Title']" class="text-orange-500"></p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="space-y-4">
                <img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" :src="content['Section 1 Team Member 2 Image']" alt="">
                <div class="space-y-2">
                  <div class="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                    <h4 v-html="content['Section 1 Team Member 2 Name']"></h4>
                    <p v-html="content['Section 1 Team Member 2 Title']" class="text-orange-500"></p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="space-y-4">
                <img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" :src="content['Section 1 Team Member 3 Image']" alt="">
                <div class="space-y-2">
                  <div class="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                    <h4 v-html="content['Section 1 Team Member 3 Name']"></h4>
                    <p v-html="content['Section 1 Team Member 3 Title']" class="text-orange-500"></p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="space-y-4">
                <img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" :src="content['Section 1 Team Member 4 Image']" alt="">
                <div class="space-y-2">
                  <div class="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                    <h4 v-html="content['Section 1 Team Member 4 Name']"></h4>
                    <p v-html="content['Section 1 Team Member 4 Title']" class="text-orange-500"></p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    -->
    <div class="py-16 overflow-hidden lg:py-24">
      <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-0 lg:max-w-screen-xl">
        <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>
        <div class="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div class="relative">
            <h4 class="text-2xl leading-8 font-extrabold text-gray-700 tracking-tight sm:text-3xl sm:leading-9">
              Our core values
            </h4>
            <p v-html="content['Section 2 Sub-Title']" class="mt-3 text-lg leading-7 text-gray-500"></p>
            <ul class="mt-10">
              <li>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-14 w-14 text-orange-500">
                      <svg class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="content['Section 2 Point 1 Icon']" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 v-html="content['Section 2 Point 1 Title']" class="text-xl leading-6 font-medium text-gray-700"></h5>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-14 w-14 text-orange-500">
                      <svg class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="content['Section 2 Point 2 Icon']" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 v-html="content['Section 2 Point 2 Title']" class="text-xl leading-6 font-medium text-gray-700"></h5>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-14 w-14 text-orange-500">
                      <svg class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="content['Section 2 Point 3 Icon']" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 v-html="content['Section 2 Point 3 Title']" class="text-xl leading-6 font-medium text-gray-700"></h5>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-14 w-14 text-orange-500">
                      <svg class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="content['Section 2 Point 4 Icon']" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 v-html="content['Section 2 Point 4 Title']" class="text-xl leading-6 font-medium text-gray-700"></h5>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="mt-10 -mx-4 relative lg:mt-0">
            <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
              <defs>
                <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
            <img class="relative mx-auto" width="490" src="/ics-image-1.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 pt-12 sm:pt-16 pb-24">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl leading-9 font-extrabold text-gray-700 sm:text-4xl sm:leading-10">
            Why what we do is important
          </h2>
          <img class="relative w-full mx-auto mt-16" width="490" :src="content['Section 3 Image']" alt="">
        </div>
      </div>
    </div>
    <div class="container mx-auto pt-12">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl leading-9 font-extrabold text-gray-700 sm:text-4xl sm:leading-10">
            Video explanation
          </h2>
        </div>
      </div>
      <video class="mx-auto mt-12" controls>
        <source :src="content['Section 4 Video']" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </main>
</template>

<script>
  import Content from '@/content/pages/about.json';

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
