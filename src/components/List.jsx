import Place from "./Places";
const List = ({
  places,
  childClicked,
  loading,
  scroll,
  setScroll,
  setType,
  type,
  setFloorRating,
  floorReting,
}) => {
  return (
    <div className="overflow-auto max-h-screen ">
      {loading ? (
        <div className="text-3xl text-center">Loading ...</div>
      ) : (
        <>
          <h1 className=" text-gray-800 text-2xl mt-2 mb-5">
            Resturants, Hotels & Attractions around you
          </h1>
          <div className="flex justify-between p-3">
            <div>
              <span className="px-1.5">Type</span>
              <select
                onChange={(e) => {
                  setType(e.target.value);
                }}
                className="focus:outline-none cursor-pointer shadow-md"
              >
                <option className="cursor-pointer" value="restaurants">
                  Resturants
                </option>
                <option className="cursor-pointer" value="hotels">
                  Hotels
                </option>
                <option className="cursor-pointer" value="attractions">
                  Attractions
                </option>
              </select>
            </div>
            <div>
              <span className="pr-1.5">Rating</span>
              <select
                onChange={(e) => {
                  setFloorRating(e.target.value);
                  console.log(e.target.value);
                }}
                className="focus:outline-none cursor-pointer shadow-md "
              >
                <option className="cursor-pointer" value={0}>
                  All
                </option>
                <option className="cursor-pointer" value={3}>
                  Above 3.0
                </option>
                <option className="cursor-pointer" value={4}>
                  Above 4.0
                </option>
                <option className="cursor-pointer" value={4.5}>
                  Above 4.5
                </option>
              </select>
            </div>
          </div>
          {places?.map((place, i) => (
            <div key={i} className="grid col-span-3 sm:col-span-12">
              <Place scroll={scroll} place={place} setScroll={setScroll} />
            </div>
          ))}
          kl
        </>
      )}
    </div>
  );
};

export default List;
