import { MiddleCollectionList } from "@/utils/CollectionData";
import { FaEthereum } from "react-icons/fa";

const CollectionMiddle = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-4">
    {
      MiddleCollectionList.map((middle) => {
        const { id, imageSrc, userImg } = middle;
        return (
          <div key={id} className="row-span-1 flex gap-4">
            <div>
              <img src={imageSrc} alt="image" />
            </div>
            <div className="flex-row">
              <p className="text-lg font-bold mb-2">The Futr Abstr</p>
              <div className="lg:flex flex-row justify-center items-center gap-2">
                <div className="flex justify-center items-center gap-2">
                  <img src={userImg} height={48} width={48} alt="image"/>
                  <p className="flex justify-center text-xs items-center lg:px-2 px-1 py-1 border-green-500 rounded-lg border-2 text-green-500">
                    <FaEthereum/>
                    <span>0.25 ETH</span>
                  </p>
                </div>
                <p className="text-xs text-gray-400 mt-2 lg:mt-0">{`${id} of 8`}</p>
              </div>
              <button 
                className={`btn-primary text-xs md:text-sm rounded-full lg:px-4 px-2 py-2 lg:py-3 text-white mt-4 font-bold ${
                  id === 1 ? "" : " btn-outline border-2"
                }`}>  
                Place a bid 
              </button>
            </div>
          </div>
        );
      })
    }
    </div>
  );
};

export default CollectionMiddle;
