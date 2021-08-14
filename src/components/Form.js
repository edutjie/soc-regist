import React from 'react'

function Form(){
  return(
    <div>
      <div class="py-12">
          <h2 class="text-2xl font-bold">Unstyled</h2>
          <p class="mt-2 text-lg text-gray-600">This is how form elements look out of the box.</p>
          <div class="mt-8 max-w-md">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Full name</span>
                <input type="text" class="mt-1 block w-full" placeholder="" />
              </label>
              <label class="block">
                <span class="text-gray-700">Email address</span>
                <input type="email" class="mt-1 block w-full" placeholder="john@example.com" />
              </label>
              <label class="block">
                <span class="text-gray-700">When is your event?</span>
                <input type="date" class="mt-1 block w-full" />
              </label>
              <label class="block">
                <span class="text-gray-700">What type of event is it?</span>
                <select class="block w-full mt-1">
                  <option>Corporate event</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
              <label class="block">
                <span class="text-gray-700">Additional details</span>
                <textarea class="mt-1 block w-full" rows="3"></textarea>
              </label>
              <div class="block">
                <div class="mt-2">
                  <div>
                    <label class="inline-flex items-center">
                      <input type="checkbox" checked />
                      <span class="ml-2">Email me news and special offers</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Form