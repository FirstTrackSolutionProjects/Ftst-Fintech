import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Insurance() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="relative z-10 text-center lg:text-left">
          <span className="text-green-600 font-semibold uppercase tracking-wide text-sm sm:text-base">
            Secure Your Future
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 leading-snug">
            Comprehensive <span className="text-green-600">Insurance Plans</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
            Protect what matters most with affordable and reliable insurance plans 
            for health, life, travel, and more—all in one place. 
            Enjoy peace of mind with hassle-free claims and trusted coverage.
          </p>

          <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
            {[
              "Health & Life Coverage",
              "Travel Insurance",
              "Hassle-free Claims",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center justify-center lg:justify-start gap-3">
                <FaCheckCircle className="text-green-600 text-xl flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="mt-8 px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-medium shadow-lg hover:from-green-700 hover:to-emerald-600 transition-all">
            Explore Insurance
          </button>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src="/images/insurance .jpg"
            alt="Insurance Illustration"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl shadow-xl border border-gray-100 transform hover:scale-105 transition duration-500"
          />
          {/* Decorative Circle */}
          <div className="absolute -top-8 -right-8 w-32 sm:w-40 h-32 sm:h-40 bg-green-100 rounded-full blur-2xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
}
