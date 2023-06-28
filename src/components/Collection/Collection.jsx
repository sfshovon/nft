import { FeaturedData } from "@/utils/FeaturedData";

const Collection = () => {
  return (
    <div className="lg:px-24 px-12 bg-slate-100 py-10">
      <h1 className="text-2xl text-black font-sans font-extrabold uppercase lg:text-left text-center mb-8">
        Collection featured nft
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {
        FeaturedData.map((featured) => {
          const { mainImageSrc, otherImageList, collectionName, userImg, userName, itemsCount } = featured;
          return (
            <div className="col-span-1 lg:mb-0 mb-8">
              <div className="flex gap-4">
                <div>
                  <img src={mainImageSrc} alt="image" />
                </div>
                <div className="grid gap-2">
                {
                  otherImageList.map((other) => (
                    <img src={other} alt="image" />
                  ))
                }
                </div>
              </div>
              <p className="font-bold mb-2 mt-4">{collectionName}</p>
              <div className="flex justify-between lg:pe-10 items-center">
                <div className="flex gap-2 items-center">
                  <div className="avatar">
                    <div className="w-8 rounded">
                      <img src={userImg} alt="User"/>
                    </div>
                  </div>
                  <span className="text-xs font-bold">by {userName}</span>
                </div>
                <button className={`btn-primary btn-outline border-2 text-xs md:text-sm rounded-full lg:px-3 px-2 py-1 lg:py-1 text-white font-bold}`}>
                  Total {itemsCount} Items
                </button>
              </div>
            </div>
          );
        })
      }
      </div>
    </div>
  );
};

export default Collection;
