<template>
  <main>
		<div class="relative bg-white">
      <div class="relative pt-12 pb-16 px-4 sm:pt-16 lg:pt-0 sm:px-6 lg:px-6 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2 xl:px-0">
        <div class="lg:pr-8">
          <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 class="text-3xl text-gray-700 leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
              Contact us
            </h2>
            <p class="mt-4 text-lg leading-7 text-gray-500 sm:mt-3">
              What business problem are you trying to solve?
            </p>
            <dl class="mt-8 text-base leading-6 text-gray-500">
              <div>
                <dt class="sr-only">Postal address</dt>
                <dd>
                  <p v-html="content['Physical Address']"></p>
                </dd>
              </div>
              <div class="mt-6">
                <dt class="sr-only">Phone number</dt>
                <dd class="flex">
                  <svg class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span v-html="content['Phone Number']" class="ml-3"></span>
                </dd>
              </div>
              <div class="mt-3">
                <dt class="sr-only">Email</dt>
                <dd class="flex">
                  <svg class="flex-shrink-0 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span v-html="content['Email Address']" class="ml-3"></span>
                </dd>
              </div>
            </dl>
            <form action="https://icscanhelp.us7.list-manage.com/subscribe/post?u=285c6f1164e3bd8c329e8bb36&amp;id=3e68db4c52" method="POST" target="_blank" novalidate class="mt-9 grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8">
              <div>
                <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">First name</label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input id="first_name" name="FNAME" class="form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                </div>
              </div>
              <div>
                <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">Last name</label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input id="last_name" name="LNAME" class="form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Email</label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input id="email" name="EMAIL" type="email" class="form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="company" class="block text-sm font-medium leading-5 text-gray-700">Company</label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input id="company" name="COMPANY" class="form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between">
                  <label for="phone" class="block text-sm font-medium leading-5 text-gray-700">Phone</label>
                  <span class="text-sm leading-5 text-gray-500">Optional</span>
                </div>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input id="phone" name="PHONE" class="form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between">
                  <label for="how_can_we_help" class="block text-sm font-medium leading-5 text-gray-700">How can we help you?</label>
                  <span class="text-sm leading-5 text-gray-500">Max. 500 characters</span>
                </div>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <textarea id="how_can_we_help" name="MESSAGE" rows="4" class="form-textarea block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5"></textarea>
                </div>
              </div>
              <fieldset class="sm:col-span-2">
                <legend class="block text-sm font-medium leading-5 text-gray-700">
                  Expected budget
                </legend>
                <div class="mt-4 grid grid-cols-1 row-gap-4">
                  <div class="flex items-center">
                    <input id="budget_under_25k" name="BUDGET" value="Less than $25K" type="radio" class="form-radio h-4 w-4 text-orange-600 transition duration-150 ease-in-out">
                    <label for="budget_under_25k" class="ml-3">
                      <span class="block text-sm leading-5 text-gray-700">Less than $25K</span>
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input id="budget_25k-50k" name="BUDGET" value="$25K - $50K" type="radio" class="form-radio h-4 w-4 text-orange-600 transition duration-150 ease-in-out">
                    <label for="budget_25k-50k" class="ml-3">
                      <span class="block text-sm leading-5 text-gray-700">$25K – $50K</span>
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input id="budget_50k-100k" name="BUDGET" value="$50K - $100K" type="radio" class="form-radio h-4 w-4 text-orange-600 transition duration-150 ease-in-out">
                    <label for="budget_50k-100k" class="ml-3">
                      <span class="block text-sm leading-5 text-gray-700">$50K – $100K</span>
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input id="budget_over_100k" name="BUDGET" value="$100K+" type="radio" class="form-radio h-4 w-4 text-orange-600 transition duration-150 ease-in-out">
                    <label for="budget_over_100k" class="ml-3">
                      <span class="block text-sm leading-5 text-gray-700">$100K+</span>
                    </label>
                  </div>
                </div>
              </fieldset>
              <div class="sm:col-span-2">
                <label for="how_did_you_hear_about_us" class="block text-sm font-medium leading-5 text-gray-700">How did you hear about us?</label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input id="how_did_you_hear_about_us" name="SOURCE" class="form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                </div>
              </div>
              <div class="text-right sm:col-span-2">
                <div id="mce-responses" class="clear">
                  <div class="response" id="mce-error-response" style="display:none"></div>
                  <div class="response" id="mce-success-response" style="display:none"></div>
                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_285c6f1164e3bd8c329e8bb36_3e68db4c52" tabindex="-1" value=""></div>
                <span class="inline-flex rounded-md shadow-sm">
                  <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-orange-500 hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700 transition duration-150 ease-in-out">
                    Submit
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import Content from '@/content/pages/contact.json';

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
