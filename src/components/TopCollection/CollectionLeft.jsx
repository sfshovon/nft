import React from "react";
import { FaEthereum } from "react-icons/fa";

const CollectionLeft = () => {
  return (
    <div className="grid-cols-1 lg:pe-10 mb-10 lg:mb-0">
      <img src="/Section-3/Sec-3-1.png" alt="image" />
      <div className="flex justify-between mt-8">
        <div className="flex gap-2">
          <div>
            <img src="/Section-3/Sec-3-5-User.png" height={48} width={48} alt="image" />
          </div>
          <div className="w-full">
            <p className="text-sm font-bold mb-2">The Futr Abstr</p>
            <p className="text-xs">10 in the stock</p>
          </div>
        </div>
        <div>
          <p className="text-xs text-right">Highest Bid</p>
          <p className="flex justify-center items-center ">
            <FaEthereum />
            <span>0.25 ETH</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionLeft;
