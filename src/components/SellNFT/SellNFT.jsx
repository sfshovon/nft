import { SellNFTData, SellNFTImages } from "@/utils/SellNFTData";

const SellNFT = () => {
  const { title, description, buttonText } = SellNFTData;
  const { Image1, Image2, Image3, Circle1, Circle2, Circle3 } = SellNFTImages;
  
  return (
    <div className="lg:px-24 px-12 grid grid-cols-2 gap-28 justify-center items-center py-20">
      <div className="lg:col-span-1 col-span-2 grid grid-rows-2 grid-cols-2 gap-4 items-center justify-center">
        <div className="row-span-2 col-span-1">
          <div className="flex justify-end mb-16 relative">
            <img src={Image1} alt="image" />
            <img src={Circle1} alt="circle" className="absolute -bottom-6 -right-8" />
          </div>
          <div className="flex justify-end relative">
            <img src={Image2} alt="image" />
            <img src={Circle2} alt="circle" className="absolute -bottom-6 -right-8" />
          </div>
        </div>
        <div className="row-span-2 col-span-1 flex justify-end relative">
          <img src={Image3} alt="image" />
          <img src={Circle3} alt="circle" className="absolute -bottom-6 -right-8" />
        </div>
      </div>

      <div className="lg:col-span-1 col-span-2">
        <h2 className="text-2xl text-center lg:text-left text-black font-sans font-extrabold uppercase py-8">{title}</h2>
        <p className="lg:pe-32">{description}</p>
        <button className="capitalize btn rounded-full bg-[#3D00B7] text-white px-6 py-1 mt-6">{buttonText}</button>
      </div>
    </div>
  );
};

export default SellNFT;
