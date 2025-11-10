import React from "react";
import Feature from "./Feature";
import Frame from "../assets/Frame.png";
import PP from "../assets/PP.png";
import MC from "../assets/MC.png";
import Visa from "../assets/Visa.png";
import GPay from "../assets/GPay.png";
import APay from "../assets/APay.png";
import SC from "../assets/shield-check.png";
import petfood from "../assets/petfood.png";
import food from "../assets/food.png";
import vet from "../assets/vet.png";
import primeingr from "../assets/primeingr.png";

const HeroSection = ()=> {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-14 px-3">
      <div className="max-w-3xl w-full flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl text-center font-semibold mb-10 px-4 py-2">
          What makes us different<br />makes them stronger
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-14">
          {/* Left features */}
          <div className="flex flex-col gap-8 items-end flex-1 md:w-1/4">
            <Feature
              icon={<img src={food} alt="Real Food" className="w-8 h-8 rounded-full" />}
              title="Real Food"
              desc="Wholesome recipes for dogs with real meat and veggies."
            />
            <Feature
              icon={<img src={primeingr} alt="Premium Ingredient" className="w-8 h-8 rounded-full" />}
            
              title="Premium Ingredient"
              desc="Elevating pet care with unmatched safety and quality."
            />
          </div>
          {/* Center Image */}
          <div className="md:w-1/3 flex items-center justify-center">
            <img
              src={Frame}
              alt="Dog meal half fresh half kibble"
              className="w-56 h-56 object-cover rounded-full border-8 border-white shadow-xl"
            />
          </div>
          {/* Right features */}
          <div className="flex flex-col gap-8 items-start flex-1 md:w-1/4">
            <Feature
              icon={<img src={petfood} alt="Made Fresh" className="w-8 h-8 rounded-full" />}
           
              title="Made Fresh"
              desc="We prioritize maintaining the integrity of whole foods and nutrition."
            />
            <Feature
              icon={<img src={vet} alt="Vet Developed" className="w-8 h-8 rounded-full" />}
             
              title="Vet Developed"
              desc="We raise the bar for dog nutrition, surpassing industry expectations."
            />
          </div>
        </div>
        {/* Call to action */}
        <div className="mt-12 flex flex-col items-center gap-2">
          <button className="bg-[#EE6F4B] hover:bg-orange-600 text-white text-base rounded-md py-3 px-8 font-medium shadow-md transition">
            Get your dog's healthy meal today!
          </button>
          <div className="flex items-center text-gray-500 text-sm mt-1 gap-2">
            <span className="flex items-center gap-1">
              <img src={SC} alt="Shield Check" className="h-4" /> 30-day money back guarantee
            </span>
            <span className="mx-2">|</span>
            <img src={PP} alt="PayPal" className="h-4 inline" />
            <img src={Visa} alt="Visa" className="h-4 inline" />
            <img src={MC} alt="Mastercard" className="h-4 inline" />
            <img src={APay} alt="Apple Pay" className="h-4 inline" />
            <img src={GPay} alt="Google Pay" className="h-4 inline" />
          </div>
        </div>
      </div>
    </section>
  );
}


export default HeroSection;