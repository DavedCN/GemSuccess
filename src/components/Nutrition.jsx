import React from "react";
import HappyDogBites from "../assets/HappyDogBites.png"

const  Nutrition=() =>{
  return (
    <section className="bg-gray-50 border-t border-b border-gray-200 py-12 px-15">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
            Nutrition is the foundation for longer, healthier lives in dogs.
          </h1>
          <p className="text-gray-500 mb-7 text-base">
            Invest in your dog’s future with our scientifically formulated superfood-powered supplements.
            Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <span className="text-[#EE6F4B] font-semibold text-2xl mt-1">97%</span>
              <span className="text-gray-700 text-sm">
                Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#EE6F4B] font-semibold text-2xl mt-1">84%</span>
              <span className="text-gray-700 text-sm">
                Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.
              </span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-[#EE6F4B] font-semibold text-2xl mt-1">92%</span>
              <span className="text-gray-700 text-sm">
                Our dog food’s high protein and fat digestibility contribute to ideal stool quality.
              </span>
            </div>
          </div>
          <button
            className="bg-[#EE6F4B] text-white rounded-md font-medium px-6 py-3 focus:outline-none hover:bg-orange-600 transition"
            type="button"
          >
            Give your furry friend the gift of wholesome nutrition
          </button>
        </div>
       {/* Right Section */}
<div className="md:w-1/2 flex justify-center items-stretch">
  <div className="relative h-full w-full max-w-md md:max-w-lg">
    <img
      src={HappyDogBites}
      alt="Dog and Happy Dog Bites product"
      className="h-full w-full object-cover rounded-lg shadow-lg"
    />
  </div>
</div>

      </div>
    </section>
  );
}


export default Nutrition;