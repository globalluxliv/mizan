import React from "react";

const Content = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-indigo-600 py-12 text-center text-white">
        <h1 className="text-4xl font-bold">Charity for Change</h1>
        <p className="mt-4 text-lg">
          Making the world a better place, one step at a time.
        </p>
      </header>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Mission</h2>
        <p className="text-center max-w-2xl mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <img
          src="https://via.placeholder.com/800x400"
          alt="Mission"
          className="w-full rounded-lg shadow-lg"
        />
      </section>

      {/* Goals Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-6">Our Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-indigo-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Goal 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
            <div className="p-6 bg-indigo-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Goal 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
            <div className="p-6 bg-indigo-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Goal 3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
            <div className="p-6 bg-indigo-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Goal 4</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Causes Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Featured Causes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Cause 1"
              className="w-full rounded mb-4"
            />
            <h3 className="text-xl font-semibold">Cause 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Cause 2"
              className="w-full rounded mb-4"
            />
            <h3 className="text-xl font-semibold">Cause 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Cause 3"
              className="w-full rounded mb-4"
            />
            <h3 className="text-xl font-semibold">Cause 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="bg-indigo-600 py-12 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Make a Difference Today</h2>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-2 rounded font-semibold">
          Donate Now
        </button>
      </section>
    </div>
  );
};

export default Content;
