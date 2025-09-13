import React from "react";
import { FaCheckCircle, FaHome, FaUserGraduate, FaUser, FaBuilding } from "react-icons/fa";

export  default function Loan() {
  const loanTypes = [
    { icon: <FaHome className="text-blue-600 text-2xl" />, name: "Home Loan" },
    { icon: <FaUserGraduate className="text-green-600 text-2xl" />, name: "Education Loan" },
    { icon: <FaUser className="text-purple-600 text-2xl" />, name: "Personal Loan" },
    { icon: <FaBuilding className="text-pink-600 text-2xl" />, name: "Business Loan" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm sm:text-base">
            Flexible & Fast
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 leading-snug">
             <span className="text-blue-600">Loan Approval</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
            Apply for loans that fit your needs—quick approval, minimal paperwork, 
            and flexible repayment options designed for you.
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
            {loanTypes.map((loan, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white shadow-md p-3 rounded-xl hover:shadow-lg transition">
                {loan.icon}
                <span className="text-gray-700 font-medium">{loan.name}</span>
              </div>
            ))}
          </div>

         <a
            href="https://fts.firsttracksolutiontechnologies.com/loan"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium shadow-lg hover:from-purple-700 hover:to-indigo-600 transition-all"
            >
            Apply Now
            </a>

        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src="/images/loan .jpg"
            alt="Loan Illustration"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl shadow-xl border border-gray-100 transform hover:scale-105 transition duration-500"
          />
          <div className="absolute -top-8 -right-8 w-32 sm:w-40 h-32 sm:h-40 bg-blue-100 rounded-full blur-2xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
}
