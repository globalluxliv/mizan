import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
        Contact Us
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-lg text-gray-700 dark:text-gray-300">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Get in Touch
        </h2>

        <div className="mb-4">
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            Email:
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Info@mizanhumanity.com
          </p>
        </div>

        <div className="mb-4">
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            Phone:
          </p>
          <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
        </div>

        <div className="mb-4">
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            Address:
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            295 W Thames St, <br />
            New York, NY 10280, USA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
