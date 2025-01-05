import React from "react";
import img1 from "../../src/assets/image/visa.png";
import img2 from "../assets/image/book.png";
import img3 from "../assets/image/larning.png";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div id="project" className="my-20">
      <h1 className="text-2xl md:text-4xl font-bold underline text-center mb-8 text-white">
        My Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}


        <div className="max-w-md bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-orange-400">
          <img
            className="w-full h-48 object-cover"
            src={img1}
            alt="WorldVisaDesk Project"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">WorldVisaDesk</h2>
            <p className="text-gray-400 mb-4">
              A comprehensive visa processing platform that assists users in
              applying for visas to various countries.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-blue-600 text-sm px-3 py-1 rounded-full">
                React
              </span>
              <span className="bg-red-600 text-sm px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-pink-600 text-sm px-3 py-1 rounded-full">
                Node.js
              </span>
              <span className="bg-green-600 text-sm px-3 py-1 rounded-full">
                MongoDB
              </span>
              <span className="bg-yellow-500 text-sm px-3 py-1 rounded-full">
                Express.js
              </span>
            </div>
            <div className="mt-4 flex justify-between">
            <Link to="/visa">
              <button className="bg-[#0A3981] text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                View More Details
              </button>
            </Link>
            </div>
          </div>
        </div>




        {/* Card 2 */}
        <div className="max-w-md bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-orange-400">
          <img
            className="w-full h-48 object-cover"
            src={img2}
            alt="BookNest Project"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">BookNest</h2>
            <p className="text-gray-400 mb-4">
              An online library platform where users can borrow books
              seamlessly.
            </p>
            <div className="flex gap-2 flex-wrap">
            <span className="bg-blue-600 text-sm px-3 py-1 rounded-full">
                React
              </span>
              <span className="bg-red-600 text-sm px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-pink-600 text-sm px-3 py-1 rounded-full">
                Node.js
              </span>
              <span className="bg-green-600 text-sm px-3 py-1 rounded-full">
                MongoDB
              </span>
              <span className="bg-yellow-500 text-sm px-3 py-1 rounded-full">
                Express.js
              </span>
            </div>
            <div className="mt-4 flex justify-between">
            <Link to="/book">
              <button className="bg-[#0A3981] text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                View More Details
              </button>
            </Link>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="max-w-md bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-orange-400">
          <img
            className="w-full h-48 object-cover"
            src={img3}
            alt="Vocabulary Learning Project"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Vocabulary Learning</h2>
            <p className="text-gray-400 mb-4">
              An English learning platform where users can enhance their
              vocabulary through various methods.
            </p>
            <div className="flex gap-2 flex-wrap">
            <span className="bg-blue-600 text-sm px-3 py-1 rounded-full">
                React
              </span>
              <span className="bg-red-600 text-sm px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
              <span className="bg-pink-600 text-sm px-3 py-1 rounded-full">
                Node.js
              </span>
              <span className="bg-green-600 text-sm px-3 py-1 rounded-full">
                MongoDB
              </span>
              <span className="bg-yellow-500 text-sm px-3 py-1 rounded-full">
                Express.js
              </span>
            </div>
            <div className="mt-4 flex justify-between">
            <Link to="/vocabulary">
              <button className="bg-[#0A3981] text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                View More Details
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
