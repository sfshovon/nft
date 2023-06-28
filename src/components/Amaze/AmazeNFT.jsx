import { AmazeNFTData } from "@/utils/AmazeNFTData";
import Image from "next/image";

const AmazeNFT = () => {
  return (
    <div className="bg-slate-100 grid grid-cols-3 justify-center items-center gap-4 lg:px-24 px-12 py-10 lg:py-24">
      <div className="lg:col-span-1 col-span-3">
        <h1 className="lg:w-3/4 text-2xl text-black font-sans font-extrabold uppercase lg:text-left text-center">
          The amazing NFT art of the world here
        </h1>
      </div>

      <div className="lg:flex flex-row lg:col-span-2 col-span-3">
      {
        AmazeNFTData.map((data, index) => (
          <div key={index} className="lg:col-span-1 col-span-3 flex gap-4">
            <div className="col-span-1 mt-2 lg:mt-0">
              <Image src={data?.imageSrc} width={64} height={64} />
            </div>
            <div className="col-span-3">
              <div className="flex flex-col">
                <h1 className="text-2xl text-black font-sans font-extrabold">{data?.title}</h1>
                <p className={`${data.width} mt-4 text-gray-800`}>{data?.description}</p>
              </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default AmazeNFT;
