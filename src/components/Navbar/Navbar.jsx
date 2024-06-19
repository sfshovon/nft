import Image from "next/image";
import { FiMenu, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <div>Market Place</div>
      </li>
      <li>
        <div>Resource</div>
      </li>
      <li>
        <div>About</div>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 grid grid-cols-12 lg:items-center lg:justify-center justify-start items-start top-0 z-50 lg:px-24">
      <div className="flex lg:col-span-6 col-span-1">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-primary">
            <FiMenu className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-bold z-20"
          >
            {menuItems}
          </ul>
        </div>
        <div className="lg:flex hidden justify-center items-center">
          <Image src="/logo.png" alt="Logo" width={107} height={29} />
          <ul className="menu menu-horizontal px-4 font-bold ml-3 flex">
            {menuItems}
          </ul>
        </div>
      </div>
      <div className="lg:col-span-6 col-span-11 lg:flex-row flex-col-reverse justify-center items-center gap-4">
        <div className="relative w-full lg-w-auto">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-full border-2 border-base-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-800 bg-white"
          />
        </div>
        <div className="flex gap-2">
          <button className="normal-case btn btn-accent rounded-full bg-[#3D00B7] text-white px-8">
            Upload
          </button>
          <button className="normal-case btn btn-accent rounded-full border-[#3D00B7] text-[#3D00B7] bg-white lg:px-4 py-1 hover:text-white">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
