import { FaEthereum } from "react-icons/fa";
import AvatarStack from "./AvatarStack";

const SingleNft = ({ nft }) => {
  const { id, title, imageSrc, eth, time } = nft;
  return (
    <div className="card p-4 bg-base-100 shadow-sm">
      <div className="relative">
        <figure>
          <img src={imageSrc} className="w-full" alt="Avatar" />
        </figure>
        <div className="absolute -bottom-4 left-4">
          <AvatarStack></AvatarStack>
        </div>
      </div>
      <div className="card-body p-0">
        <h2 className="card-title mt-5 font-bold">{title}</h2>
        <div className="flex justify-between mb-3">
          <div className="flex items-center gap-2">
            <FaEthereum className="text-green-600"/>
            <span className="text-green-600 font-bold">{eth} ETH</span>
          </div>
          <div className="text-gray-500">
            <p>{id} of 321</p>
          </div>
        </div>
        <hr />
        <div className="card-actions justify-between mt-3 items-center">
          <div className="badge bg-gray-100 p-3 text-primary font-semibold">
            {time} left
          </div>
          <div className="text-primary text-lg font-semibold">Place a bid</div>
        </div>
      </div>
    </div>
  );
};

export default SingleNft;
