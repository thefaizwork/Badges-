import React from "react";
import Badge from "./assets/b.png";
import Post from "./assets/P.svg";

function App() {
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen p-6 overflow-hidden">
      <div className="bg-white shadow-lg rounded-lg p-4 lg:p-6 flex flex-col lg:flex-row w-full lg:w-[90%] max-w-7xl lg:max-w-full lg:h-[800px] overflow-hidden"> 

        {/* Column 1 */}
        <div className="w-full lg:w-1/4 p-4 lg:p-4 border-b lg:border-r flex flex-col items-center mb-6 lg:mb-0 overflow-hidden">
          <img
            src={Badge}
            alt="Badge Icon"
            className="w-24 h-24 lg:w-52 lg:h-52 mb-4"
          />

          <div className="mt-6 lg:mt-32">
            <h2 className="text-gray-500 text-xl lg:text-3xl font-semibold mb-6 mr-0 lg:mr-24 text-center">
              Badge Details
            </h2>
            <h3 className="text-gray-500 text-xl lg:text-base font-bold tracking-widest mb-4 lg:mb-2 mr-0 lg:text-end text-center">
              EARNING CRITERIA
            </h3>
            <ul className="list-disc list-inside text-gray-600 text-sm lg:text-sm text-center lg:text-end ">
              <li>User must complete the earning criteria to earn this badge</li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-full lg:w-1/2 p-4 lg:p-4 overflow-hidden">
          <h1 className="text-2xl lg:text-3xl text-gray-600 font-bold mb-4">
            Postman API Fundamentals Student Expert
          </h1>
          <p className="text-gray-600 mb-4 text-sm lg:text-base">
            Postman Student Experts are proficient in the essential skills
            required for consuming APIs in Postman and applications.
          </p>
          <p className="text-gray-600 mb-2 text-sm lg:text-base">
            Awarded to <strong>hello.rajat.rajput@gmail.com</strong>
          </p>
          <p className="text-gray-400 text-xs lg:text-sm mb-6">
            Issued on: Jul 20, 2024 at 11:11 AM
          </p>

          <ul className="list-disc list-inside text-gray-700 text-sm lg:text-base mt-6 lg:mt-52"> {/* Adjusted gap */}
            <h1 className="text-gray-600 mb-2 text-sm lg:text-base"><strong>A hands-on certificate that teaches</strong></h1>
            <li>What APIs are and their importance in modern software development</li>
            <li>How to use Postman to work with APIs</li>
            <li>Making GET, POST, PATCH, and DELETE requests</li>
            <li>Query parameters, bodies, headers, response codes</li>
            <li>Basic scripting</li>
            <li>API Key Authorization</li>
            <li>How to use APIs in your applications</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="w-full lg:w-1/4 p-4 lg:p-4 flex flex-col items-center overflow-hidden">
          <button className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-2 rounded-full shadow-md hover:from-gray-800 hover:to-gray-900 transition duration-300 text-xs lg:text-sm font-medium mb-6 lg:mb-12">
            Share
          </button>

          <div className="text-center mb-6 lg:mb-12 ">
            <img
              src={Post}
              alt="Postman Logo"
              className="w-12 h-12 lg:w-12 lg:h-12  lg:mb-5 lg:ml-14 mb-5 ml-12"
            />
            <button className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-4 py-2 rounded-full shadow-md hover:from-gray-800 hover:to-gray-900 transition duration-300 text-xs lg:text-sm font-medium">
              Offered by: Postman
            </button>
          </div>

          <div className="flex flex-wrap gap-2 justify-center  lg:mt-44">
            <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-xs lg:text-sm">api</span>
            <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-xs lg:text-sm">testing</span>
            <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-xs lg:text-sm">scripting</span>
            <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-xs lg:text-sm">postman</span>
            <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-xs lg:text-sm">student</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
