import React from 'react';
import twodogs from "../assets/twodogs.png";
import kibble from "../assets/kibble.png";

const  DogFoodBenefits = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center py-12">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl mb-16">
        <img
          src={kibble}
          alt="Dogs eating healthy food"
          className="w-full md:w-1/2 rounded-xl object-cover"
        />
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Improve overall gastrointestinal health for better nutrient absorption
          </h2>
          <p className="text-gray-600">
            Through rigorous scientific studies and consultations with veterinarians, 
            we have created a breakthrough formula exclusively tailored to combat 
            the health challenges prevalent in dogs. A staggering 91% of our customers 
            have reported significant improvements in their dogs’ health after 
            incorporating our product into their diet.
          </p>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 w-full max-w-5xl">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Prebiotics nourish the beneficial gut bacteria,<br />
            supporting digestive health
          </h2>
          <p className="text-gray-600">
            Our dog food formula contains carefully selected prebiotics that work 
            in harmony with the gut microbiota, providing the necessary nutrients 
            for the growth and maintenance of beneficial bacteria, ultimately 
            supporting digestive health.
          </p>
        </div>
        <img
          src={twodogs}
          alt="Dog food kibble"
          className="w-full md:w-1/2 rounded-xl object-cover"
        />
      </div>
    </div>
  );
}


export default DogFoodBenefits;