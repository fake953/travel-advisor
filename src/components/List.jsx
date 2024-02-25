import Place from "./Places";
const List = ({places}) => {
  return (
    <div className="max-h-screen overflow-auto" >
      <h1 className=" text-gray-800 text-2xl mt-2 mb-5">
        Resturants, Hotels & Attractions around you
      </h1>
      <div className="flex justify-between p-3">
        <div>
          <span className="px-1.5">Type</span>
          <select className="focus:outline-none cursor-pointer shadow-md" >
            <option className="cursor-pointer" value="Resturants">Resturants</option>
            <option className="cursor-pointer" value="Hotels">Hotels</option>
            <option className="cursor-pointer" value="Attractions">Attractions</option>
          </select>
        </div>
        <div>
          <span className="pr-1.5">Rating</span>
          <select className="focus:outline-none cursor-pointer shadow-md " >
            <option className="cursor-pointer" value={0}>All</option>
            <option className="cursor-pointer" value={3}>Above 3.0</option>
            <option className="cursor-pointer" value={4}>Above 4.0</option>
            <option className="cursor-pointer" value={4.5}>Above 4.5</option>
          </select>
        </div>
      </div>
      {places?.map((place, i) => (
        <div key={i} className="grid col-span-3 sm:col-span-12">
          <Place place={place} />
        </div>
      ))}
    </div>
  );
};

export default List;
