import { RightCollectionList } from "@/utils/CollectionData";
import { FaEthereum } from "react-icons/fa";

const CollectionRight = () => {
  return (
    <div className="grid-cols-1 lg:border-l lg:pl-10">
      <h1 className="text-xl text-black font-sans font-extrabold uppercase lg:text-left text-center">
        Top collections over
      </h1>
      <p className="text-primary font-bold mt-2 mb-4 lg:text-left text-center">Last 7 days</p>
      {
        RightCollectionList.map((right) => {
          const { id, imageSrc, verified, red, perc, bid, title } = right;
          return (
            <div key={id} className={`flex justify-between items-center py-4 ${id !== 5 ? "border-b" : ""}`}>    
              <div className="flex justify-start items-center md:gap-8">
                <p className="font-bold mr-2 md:mr-0">{id}</p>
                <div className="relative mr-4 md:mr-0">
                  <img src={imageSrc} alt="image" />
                  {
                    verified && (
                      <span className="absolute -top-2 -right-2">
                        <img src="/Section-3/verify 1.png" alt="image" />
                      </span>
                    )
                  }
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-left">{title}</p>
                  <p className="flex items-center text-left">
                    <FaEthereum className="mr-1" />
                    <span>{bid}</span>
                  </p>
                </div>
              </div>
              <p className={`${red ? "text-red-500" : "text-success"} font-bold text-right`}>
                {perc}%
              </p>
            </div>
          );
        })
      }
    </div>
  );
};

export default CollectionRight;
