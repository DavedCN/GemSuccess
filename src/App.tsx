import HeroSection from "./components/HeroSection";
import Nutrition from "./components/Nutrition";
import DogFoodBenefits from "./components/DogFoodBenefits";

export default function App() {
  return (
    <main className="w-screen min-h-screen overflow-x-hidden bg-white">
      <HeroSection />
      <Nutrition/>
      <DogFoodBenefits/>
    </main>
  );
}
