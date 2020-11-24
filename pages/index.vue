<template>
  <main>
    <div class="bg-gray-50 pt-12 sm:pt-16">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl leading-9 font-extrabold text-gray-700 sm:text-4xl sm:leading-10">
            Who are we?
          </h2>
          <div class="mt-3 text-lg text-gray-500 sm:mt-4 grid grid-cols-2 divide-x-2 divide-gray-200">
            <div v-html="content['Section 1 Left Text']" class="text-left p-3"></div>
            <div v-html="content['Section 1 Right Text']" class="text-left p-3"></div>
          </div>
        </div>
      </div>
      <div class="mt-8 pb-12 bg-white sm:pb-16">
        <div class="relative">
          <div class="absolute inset-0 h-1/2 bg-gray-50"></div>
          <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
              <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500" id="item-1">
                    Years experience
                  </dt>
                  <dd class="order-1 text-5xl leading-none font-extrabold text-orange-500" aria-describedby="item-1">
                    20
                  </dd>
                </div>
                <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Support
                  </dt>
                  <dd class="order-1 text-5xl leading-none font-extrabold text-orange-500">
                    24/7
                  </dd>
                </div>
                <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Satifaction
                  </dt>
                  <dd class="order-1 text-5xl leading-none font-extrabold text-orange-500">
                    100%
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-8 overflow-hidden lg:py-16">
      <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <svg class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="250" fill="none" viewBox="0 0 404 250">
          <defs>
            <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>
        <div class="relative">
          <h3 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Reduce risk and complexity
          </h3>
          <p v-html="content['Section 2 Sub-Title']" class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500"></p>
        </div>
        <div class="relative mt-4 sm:mt-6 lg:mt-10">
          <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="lg:col-start-2 xl:-ml-16">
              <ul>
                <li class="sm:mt-30 md:mt-0">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="content['Section 2 Point 1 Icon']" />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <p v-html="content['Section 2 Point 1 Text']" class="mt-2 text-base leading-6 text-gray-500"></p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="content['Section 2 Point 2 Icon']" />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <p v-html="content['Section 2 Point 2 Text']" class="mt-2 text-base leading-6 text-gray-500"></p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="content['Section 2 Point 3 Icon']" />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <p v-html="content['Section 2 Point 3 Text']" class="mt-2 text-base leading-6 text-gray-500"></p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="mt-10 relative lg:mt-0 lg:col-start-1">
              <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="250" fill="none" viewBox="0 0 784 250">
                <defs>
                  <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>
              <img class="relative rounded-md" width="490" src="ics-image-2.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-12 bg-gray-50">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-700 sm:text-4xl sm:leading-10">
            Raise Integrity, Compliance, & Security
          </h3>
        </div>
        <div class="mt-10">
          <div class="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div class="flex items-center justify-center h-24 w-24 rounded-full mx-auto bg-orange-500 text-white">
                <svg class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="content['Section 3 Point 1 Icon']" />
                </svg>
              </div>
              <div class="mt-5">
                <h5 v-html="content['Section 3 Point 1 Title']" class="text-xl leading-6 font-medium text-gray-700"></h5>
                <p v-html="content['Section 3 Point 1 Sub-Title']" class="mt-2 text-lg leading-7 text-gray-500"></p>
              </div>
            </div>
            <div class="mt-10 lg:mt-0">
              <div class="flex items-center justify-center h-24 w-24 rounded-full mx-auto bg-orange-500 text-white">
                <svg class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="content['Section 3 Point 2 Icon']" />
                </svg>
              </div>
              <div class="mt-5">
                <h5 v-html="content['Section 3 Point 2 Title']" class="text-xl leading-6 font-medium text-gray-700"></h5>
                <p v-html="content['Section 3 Point 2 Sub-Title']" class="mt-2 text-lg leading-7 text-gray-500"></p>
              </div>
            </div>
            <div class="mt-10 lg:mt-0">
              <div class="flex items-center justify-center h-24 w-24 rounded-full mx-auto bg-orange-500 text-white">
                <svg class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="content['Section 3 Point 3 Icon']" />
                </svg>
              </div>
              <div class="mt-5">
                <h5 v-html="content['Section 3 Point 3 Title']" class="text-xl leading-6 font-medium text-gray-700"></h5>
                <p v-html="content['Section 3 Point 3 Sub-Title']" class="mt-2 text-lg leading-7 text-gray-500"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-16 overflow-hidden lg:py-24">
      <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
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
              Customized solutions
            </h4>
            <p v-html="content['Section 4 Sub-Title']" class="mt-3 text-lg leading-7 text-gray-500"></p>
            <ul class="mt-10">
              <li>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-14 w-14 text-orange-500">
                      <svg class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="content['Section 4 Point 1 Icon']" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 v-html="content['Section 4 Point 1 Title']" class="text-lg leading-6 font-medium text-gray-700"></h5>
                    <p v-html="content['Section 4 Point 1 Sub-Title']" class="mt-2 text-base leading-6 text-gray-500"></p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-14 w-14 text-orange-500">
                      <svg class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="content['Section 4 Point 2 Icon']" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 v-html="content['Section 4 Point 2 Title']" class="text-lg leading-6 font-medium text-gray-700"></h5>
                    <p v-html="content['Section 4 Point 2 Sub-Title']" class="mt-2 text-base leading-6 text-gray-500"></p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-14 w-14 text-orange-500">
                      <svg class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="content['Section 4 Point 3 Icon']" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 v-html="content['Section 4 Point 3 Title']" class="text-lg leading-6 font-medium text-gray-700"></h5>
                    <p v-html="content['Section 4 Point 3 Sub-Title']" class="mt-2 text-base leading-6 text-gray-500"></p>
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
            <img class="relative mx-auto rounded-md" width="490" src="/ics-image-1.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import Content from '@/content/pages/home.json';

  export default {
    layout: 'home',
    data: function() {
      return {
        content: Content
      }
    }
  }
</script>

<style>

</style>
