// Donate.jsx
import React from "react";
import Qr from "../assets/qr.png";

const Donate = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Donation Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Support Our Cause
        </h1>
        <p className="text-gray-600 mb-6">
          Your generous donations help us make a difference. Scan the QR code
          below to donate via Zelle.
        </p>

        {/* QR Code Image */}
        <div className="flex justify-center mb-6">
          <img
            src={Qr}
            alt="QR Code"
            className="w-48 h-48 rounded-lg shadow-md"
          />
        </div>

        {/* Description & Additional Info */}
        <p className="text-gray-500 text-sm">
          Any amount you give helps us continue our mission. Thank you for your
          support!
        </p>
      </div>
    </div>
  );
};

export default Donate;
