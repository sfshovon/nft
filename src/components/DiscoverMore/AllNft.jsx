"use client";
import { DiscoverMoreNft } from "@/utils/DiscoverMoreData";
import { useState } from "react";
import NftTabs from "./NftTabs";
import SingleNft from "./SingleNft";

const AllNft = () => {
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  const displayedItems = showAll ? DiscoverMoreNft : DiscoverMoreNft.slice(0, 16);
  const buttonText = showAll ? "Less NFTs" : "More NFTs";

  return (
    <div className="bg-gray-100 lg:px-24 px-4 py-12 mt-20">
      <h1 className="text-2xl text-center lg:text-left text-black font-sans font-extrabold uppercase py-8">
        Discover more nfts
      </h1>
      <NftTabs></NftTabs>
      <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-8">
      {
        displayedItems?.map((nft) => (
          <SingleNft nft={nft}/>
        ))
      }
      </div>
      <div className="flex justify-center mt-8">
        <button className="btn normal-case border-primary text-primary border-2 rounded-full px-6 py-4" onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default AllNft;
