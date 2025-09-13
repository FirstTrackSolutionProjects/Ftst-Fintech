import React from "react";
import { FaCheckCircle } from "react-icons/fa";


export default function CreditCard() {
    
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <span className="text-purple-600 font-semibold uppercase tracking-wide text-sm sm:text-base">
            Smart Spending
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 leading-snug">
            Powerful <span className="text-purple-600">Credit Cards</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
            Enjoy cashback, rewards, and exclusive offers with our secure 
            credit cards. Perfect for shopping, travel, and online payments.
          </p>

          <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
            {[
              "High cashback rewards",
              "Zero annual fee options",
              "Worldwide acceptance",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center justify-center lg:justify-start gap-3">
                <FaCheckCircle className="text-purple-600 text-xl flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

           <a
            href="https://fts.firsttracksolutiontechnologies.com/credit-card"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium shadow-lg hover:from-purple-700 hover:to-indigo-600 transition-all"
            >
            Get Your Card
            </a>

        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src="/images/credit-card .jpg"
            alt="Credit Card Illustration"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl shadow-xl border border-gray-100 transform hover:scale-105 transition duration-500"
          />
          <div className="absolute -top-8 -right-8 w-32 sm:w-40 h-32 sm:h-40 bg-purple-100 rounded-full blur-2xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
}
