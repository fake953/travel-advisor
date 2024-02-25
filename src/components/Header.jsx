import { Autocomplete } from "@react-google-maps/api";
const Header = () => {
  return (
    <div className=" bg-blue-500 text-2xl static text-white py-6 px-3 w-full flex justify-between">
      <div>
        <h1 className="">Travel Advisor</h1>
      </div>
      <div className="flex text-center ">
        <div>Explore new places</div>
        <div className=" bg-white mx-3 flex text-gray-600 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 mt-1.5"
          >
            <path
              className=" bg-blue-300"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          {/* <Autocomplete> */}
          <input className="focus:outline-none text-sm" placeholder="Search..." />
          {/* </Autocomplete> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
