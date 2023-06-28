import { HeroContent } from "@/utils/HeroData";
import HeroImageStack from "./HeroImageStack";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <div className="flex justify-between min-h-screen px-20">
      <div className="hero-content w-full flex-col lg:flex-row">
        <div className="text-center flex flex-col lg:w-1/2 lg:text-left">
          <h1 className="text-4xl font-bold uppercase lg:w-3/4">
            {HeroContent.title}
          </h1>
          <p className="py-6 lg:w-3/5">{HeroContent.description}</p>
          <div className="mb-4">
            <button className="normal-case btn btn-accent rounded-full bg-[#3D00B7] text-white px-4 py-1">
              {HeroContent.buttonLabel}
            </button>
          </div>
          <HeroStats />
        </div>
        <div className="lg:w-1/2">
          <HeroImageStack />
        </div>
      </div>
    </div>
  );
};

export default Hero;
