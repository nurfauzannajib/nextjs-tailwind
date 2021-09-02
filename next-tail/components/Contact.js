import React from "react";

function Contact() {
  return (
    <div className>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-white overflow-hidden sm:mr-10 mx-auto flex items-start justify-start relative">
            <div>
              <p className="font-mono font-bold font-grey-10 lg:text-6xl md:text-3xl">
                Tertarik dengan jasa kami?
              </p>
              <div className="mt-8">
                <p className="font-serif font-light font-grey-10 text-xl">
                  Silahkan isi form yang tertera dan Tim kami <br />
                  akan menghubungi anda dalam 24 jam
                </p>
              </div>
              <div className="relative mb-4">
                <span className="absolute mt-3 ml-2 text-green-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                    />
                  </svg>
                </span>
                <button className="h-12 w-56 pl-4 hover:border-green-10 rounded-md border-2 border-white">
                  +6285256355743
                </button>
              </div>
            </div>
          </div>
          {/* Form Start */}
          <div class="lg:w-2/5 md:w-1/2 bg-blue-450 p-16 rounded-xl flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <label
              for="name"
              class="leading-10 text-md text-grey-10 font-semibold font-mono"
            >
              Name
            </label>
            <div class="relative mb-4">
              <span className="absolute mt-2 ml-2 text-green-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
              <input class="w-full bg-white rounded-md border-2 border-grey-10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-10 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <label
              for="email"
              class="leading-10 text-md text-grey-10 font-semibold font-mono"
            >
              Email
            </label>
            <div class="relative mb-4">
              <span className="absolute mt-2 ml-2 text-green-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded-md border-2 border-grey-10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-10 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label
                for="message"
                class="leading-10 ttext-md text-grey-10 font-semibold font-mono"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Pesan"
                class="w-full bg-white rounded-md border-2 border-grey-10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div className="flex flex-initial justify-end">
              <button class="bg-green-10 hover:bg-grey-10 text-white font-bold py-2 px-8 rounded">
                Kirim
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
