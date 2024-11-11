import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Mizan Humanity Inc.</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Dedicated to making a lasting difference in the lives of those who
            need it most. Together, we can create a world filled with hope,
            love, and opportunity.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          At Mizan Humanity Inc., our mission is to provide sustainable support
          to underprivileged communities around the world. We believe in
          empowering individuals through education, access to resources, and
          fostering a sense of hope and community.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Compassion",
                desc: "We approach our work with empathy, understanding, and a commitment to making meaningful connections.",
              },
              {
                title: "Integrity",
                desc: "Transparency and honesty are at the heart of everything we do, ensuring accountability to those we serve and our supporters.",
              },
              {
                title: "Empowerment",
                desc: "We focus on providing resources and opportunities that allow individuals to improve their own lives and communities.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-indigo-100 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="max-w-xl mx-auto text-lg mb-6">
            Every contribution counts, whether it’s a donation, volunteering, or
            simply spreading the word. Let’s work together to create lasting
            change.
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-200">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
