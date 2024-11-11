import React from "react";
import Image1 from "../assets/image1.jpg";
import Water from "../assets/water.jpg";
import Education from "../assets/education.jpg";
import Disaster from "../assets/disaster.jpg";

const Content = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-indigo-600 py-10 sm:py-16 text-center text-white">
        <h1 className="text-3xl sm:text-5xl font-bold">Charity for Change</h1>
        <p className="mt-4 text-sm sm:text-lg max-w-md sm:max-w-xl mx-auto">
          Join us in making the world a better place, one step at a time. Your
          support brings hope, resources, and change to those who need it most.
        </p>
      </header>

      {/* Mission and Image Section */}
      <section className="container mx-auto px-4 py-10 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="max-w-md sm:max-w-2xl mx-auto text-sm sm:text-lg text-gray-600 mb-6 sm:mb-8">
          At Charity for Change, we’re dedicated to creating sustainable change
          in communities worldwide. Through education, resource distribution,
          and empowerment, we aim to uplift those in need and provide them with
          the tools to build a brighter future.
        </p>
        <img
          src={Image1}
          alt="Our Mission"
          className="w-full rounded-lg shadow-lg max-w-md sm:max-w-4xl mx-auto"
        />
      </section>

      {/* Goals Section */}
      <section className="bg-white py-10 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8">
            Our Goals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              {
                title: "Provide Clean Water",
                desc: "Ensure safe, accessible water sources for communities in need.",
              },
              {
                title: "Support Education",
                desc: "Offer educational resources to empower the next generation.",
              },
              {
                title: "Disaster Relief",
                desc: "Respond quickly to natural disasters, providing aid and rebuilding support.",
              },
              {
                title: "Community Development",
                desc: "Foster sustainable growth with skills training and economic programs.",
              },
            ].map((goal, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-indigo-100 rounded-lg shadow-md text-center"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {goal.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {goal.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Causes Section */}
      <section className="container mx-auto px-4 py-10 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8">
          Featured Causes
        </h2>
        <p className="max-w-md sm:max-w-2xl mx-auto text-center text-sm sm:text-lg text-gray-600 mb-8">
          From providing clean water to supporting disaster recovery, our
          featured causes highlight some of the most impactful work we do.
          Discover how you can make a difference.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {[
            {
              title: "Clean Water Initiative",
              desc: "Bringing clean, accessible water to remote areas.",
              img: Water,
            },
            {
              title: "Educational Programs",
              desc: "Breaking the cycle of poverty with education.",
              img: Education,
            },
            {
              title: "Disaster Relief",
              desc: "Supporting communities affected by natural disasters.",
              img: Disaster,
            },
          ].map((cause, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 sm:p-6 text-center"
            >
              <img
                src={cause.img}
                alt={cause.title}
                className="w-full rounded mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold">
                {cause.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{cause.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Donation Section */}
      <section className="bg-indigo-600 py-10 sm:py-16 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Make a Difference Today
        </h2>
        <p className="max-w-md sm:max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-lg">
          Every donation helps us bring hope, resources, and empowerment to
          communities worldwide. Join us in creating lasting change. Every
          contribution, big or small, makes a meaningful impact.
        </p>
        <button className="bg-white text-indigo-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-200">
          Donate Now
        </button>
      </section>
    </div>
  );
};

export default Content;
