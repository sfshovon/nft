import { buttons } from "@/utils/DiscoverMoreData";
import { BiFilter } from "react-icons/bi";

const NftTabs = () => {
  return (
    <div className="lg:flex justify-between mb-12">
      <div className="lg:flex flex-wrap gap-2">
      {
        buttons.map((button, index) => (
          <button key={index} className={button?.className}>
            {button?.text}
          </button>
        ))
      }
      </div>
      <div>
        <button className="bg-gray-200 rounded-full px-6 py-3 text-primary flex items-center lg:mt-0 mt-6">
          <span> <BiFilter size={22}/> </span>
          <span>All Filters</span>
        </button>
      </div>
    </div>
  );
};

export default NftTabs;
