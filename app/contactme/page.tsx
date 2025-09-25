import React from "react";

export default function page() {
  return (
    <div>
      <section className=" text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold">
            Contact <span className="text-orange-500">Me</span>
          </h2>
          <p className="text-lg mt-2 text-gray-400">Let's get in touch!</p>

          <form className="mt-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full border-b-2 border-gray-600 focus:outline-none focus:border-orange-500 py-2 placeholder-gray-500"
                />
              </div>

              <div>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone"
                  className="w-full border-b-2 text-orange-500 border-gray-600 focus:outline-none focus:border-orange-500 py-2 placeholder-gray-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="w-full  border-b-2 border-gray-600 focus:outline-none focus:border-orange-500 py-2 placeholder-gray-500"
                />
              </div>

              <div>
                <input
                  id="address"
                  type="text"
                  placeholder="Address"
                  className="w-full  border-b-2 border-gray-600 focus:outline-none focus:border-orange-500 py-2 placeholder-gray-500"
                />
              </div>
            </div>

            <div>
              <textarea
                id="content"
                placeholder="Content"
                className="w-108 h-40 border-b-2 border-gray-600 focus:outline-none focus:border-orange-500 py-2 resize-none placeholder-orange-500 "
              ></textarea>
            </div>

            <div className="flex items-center mt-6">
              <input
                id="newsletter"
                type="checkbox"
                className="h-4 w-4 text-orange-500 bg-gray-900 border-gray-600 rounded focus:ring-orange-500"
              />
              <label htmlFor="newsletter" className="ml-2 text-gray-400">
                I would like to receive the newsletter.
              </label>
            </div>

            <button
              type="submit"
              className="w-90 h-10 px-12 text-lg bg-orange-500 rounded-md hover:scale-110 hover:bg-orange-400 transition duration-150"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
