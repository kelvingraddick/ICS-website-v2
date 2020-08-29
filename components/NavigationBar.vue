<template>
  <div class="relative bg-white overflow-hidden">
    <div class="relative">
      <nav class="relative flex items-center justify-between sm:h-32 lg:justify-start">
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="#" aria-label="Home">
              <img class="h-16 w-auto sm:h-18" src="/ics-logo.png" alt="ICS logo">
            </a>
            <div class="-mr-2 flex items-center md:hidden">
              <button v-on:click="menuOpen = true" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:pr-4">
          <nuxt-link to="/" class="font-medium text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Home</nuxt-link>
          <nuxt-link to="/about" class="ml-8 font-medium text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About</nuxt-link>
          <nuxt-link to="/services" class="ml-8 font-medium text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Services</nuxt-link>
          <nuxt-link to="/contact" class="ml-8 font-medium text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Contact</nuxt-link>
        </div>
      </nav>
    </div>
    <div v-show="menuOpen" class="fixed z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-md">
        <div class="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <img class="h-8 w-auto" src="/ics-logo.png" alt="ICS logo">
            </div>
            <div class="-mr-2">
              <button v-on:click="menuOpen = false" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3">
            <nuxt-link to="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Home</nuxt-link>
            <nuxt-link to="/about" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">About</nuxt-link>
            <nuxt-link to="/services" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Services</nuxt-link>
            <nuxt-link to="/contact" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Contact</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        menuOpen: false
      }
    }
  }
</script>