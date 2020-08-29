<template>
  <div>
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-screen-xl mx-auto">
        <div class="relative z-10 pb-8 bg-white lg:max-w-2xl lg:w-full">
          <NavigationBar />
        </div>
      </div>
    </div>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>
  html {
    font-family:
      Roboto,
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      'Helvetica Neue',
      Arial,
      sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }
</style>