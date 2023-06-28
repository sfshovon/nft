
const HeroImageStack = () => {
  return (
    <div className="flex relative lg:left-8">
      <div className="flex items-center justify-center z-30 relative">
        <div className="absolute top-4 left-4 text-white">
          <p className=" font-bold mb-4">Abstr Gradient NFT</p>
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <div className="w-8 rounded">
                <img src="/Section-1/Hero-User.png" alt="User"/>
              </div>
            </div>
            <span>Arkhan17</span>
          </div>
        </div>
        <img src="/Section-1/Hero-Circle.png" alt="circle" className="absolute top-20 md:top-48 -left-12 md:-left-16 w-24 h-24 md:w-auto md:h-auto"/>
        <img src="/Section-1/Hero-1.png" alt="Image 1" className="rounded-md mb-2 h-full w-full"/>
        <div className="glass text-white text-sm absolute left-8 md:left-0 bottom-2 md:bottom-8 grid grid-cols-2 w-4/5 md:w-5/6 p-2 rounded-xl gap-2 md:gap-0">
          <div className="col-span-1">
            <p>Current Bid</p>
            <p>0.25 ETH</p>
          </div>
          <div className="col-span-1">
            <p>Ends In</p>
            <p>12h 43m 42s</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center z-20 absolute left-20 top-4">
        <img src="/Section-1/Hero-2.png" alt="Image 2" className="rounded-md mb-2"/>
      </div>
      <div className="flex flex-col items-center justify-center z-10 absolute left-40 top-8">
        <img src="/Section-1/Hero-3.png" alt="Image 3" className="rounded-md mb-2"/>
      </div>
    </div>
  );
};

export default HeroImageStack;
