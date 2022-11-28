import React from "react";

// export function Tik () {

const Tik = () => {
  return (
    <div class="mt-8 space-y-8">
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>

        <span class="mx-4 text-gray-700 dark:text-gray-300">
          All limited links
        </span>
      </div>

      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>

        <span class="mx-4 text-gray-700 dark:text-gray-300">
          Own analytics platform
        </span>
      </div>

      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>

        <span class="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
      </div>

      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 text-blue-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>

        <span class="mx-4 text-gray-700 dark:text-gray-300">
          Optimize hashtags
        </span>
      </div>

      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-red-500 "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <span class="mx-4 text-gray-700 dark:text-gray-300">
          Unlimited users
        </span>
      </div>
    </div>
  );
};

function PricingSection() {
  return (
    <section class="bg-gradient-to-b from-white via-sky-50 to-sky-100 dark:bg-gray-800">
      <div class="container px-6 py-8 mx-auto">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Basit, şeffaf fiyatlar
            </h2>
            <p class="mt-4 text-gray-500 dark:text-gray-400">
              Kontrat yok. Süpriz fatura yok. Esnek Planlar var.
            </p>
          </div>

          <div class="overflow-hidden p-0.5 mt-6 border rounded-lg dark:border-gray-700">
            <div class="sm:-mx-0.5 flex">
              <button class=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-white bg-blue-500 rounded-lg">
                Aylık
              </button>
              <button class=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 bg-transparent rounded-lg hover:bg-gray-200">
                Yıllık
              </button>
            </div>
          </div>
        </div>

        <div class="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div class="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gradient-to-b from-cyan-50 to-sky-200 dark:hover:bg-gray-700">
            <p class="text-lg font-medium text-gray-800 dark:text-gray-100">
              Temel
            </p>
            <h4 class="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">
              $19{" "}
              <span class="text-base font-normal text-gray-600 dark:text-gray-400">
                / Ay
              </span>
            </h4>
            <p class="mt-4 text-gray-500 dark:text-gray-300">
              Birkaç ürün satan küçük işletmeler için
            </p>

            <Tik />

            <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Seçin
            </button>
          </div>

          <div class="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gradient-to-b from-cyan-50 to-sky-200 dark:hover:bg-gray-700">
            <p class="text-lg font-medium text-gray-800 dark:text-gray-100">
              Standart
            </p>
            <h4 class="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">
              $39{" "}
              <span class="text-base font-normal text-gray-600 dark:text-gray-400">
                / Ay
              </span>
            </h4>
            <p class="mt-4 text-gray-500 dark:text-gray-300">
              Küçük ölçekli toptancılar ve kooperatifler için
            </p>

            <Tik />

            <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Seçin
            </button>
          </div>

          <div class="px-6 py-4 transition-colors duration-200 transform bg-gray-700 rounded-lg dark:bg-gray-600">
            <p class="text-lg font-medium text-gray-100">Özel</p>
            <h4 class="mt-2 text-4xl font-semibold text-gray-100">
              $99 <span class="text-base font-normal text-gray-400">/ Ay</span>
            </h4>
            <p class="mt-4 text-gray-300">
              Orta ölçekli toptancılar ve kooperatifler için
            </p>

            <div class="mt-8 space-y-8">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span class="mx-4 text-gray-300">All limited links</span>
              </div>

              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span class="mx-4 text-gray-300">Own analytics platform</span>
              </div>

              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span class="mx-4 text-gray-300">Chat support</span>
              </div>

              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span class="mx-4 text-gray-300">Optimize hashtags</span>
              </div>

              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span class="mx-4 text-gray-300">Unlimited users</span>
              </div>
            </div>

            <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Seçin
            </button>
          </div>

          <div class="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gradient-to-b from-cyan-50 to-sky-200 dark:hover:bg-gray-700">
            <p class="text-lg font-medium text-gray-800 dark:text-gray-100">
              Pro
            </p>
            <h4 class="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">
              $199{" "}
              <span class="text-base font-normal text-gray-600 dark:text-gray-400">
                / Ay
              </span>
            </h4>
            <p class="mt-4 text-gray-500 dark:text-gray-300">
              Büyük toptancılar ve kooperatifler için
            </p>

            <Tik />

            <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Seçin
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
