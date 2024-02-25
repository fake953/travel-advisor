const Place = ({ place }) => {
  console.log(place)
  return (
    <div className="my-4 mx-4 min-h-40 overflow-hidden shadow-lg rounded-md text-gray-500 ">
      <img
        className="w-full h-46 text-gray-600 object-cover"
        src={
          place.photo
            ? place.photo.images.large.url
            : "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.webp?b=1&s=612x612&w=0&k=20&c=C318sxgBBIO66E7vi_0Eu3lXHm9uRDauKvRgeyxY2O4="
        }
        alt=""
      />
      <div className="m-3 ">
        <h1 className="text-2xl  ">{place.name}</h1>
        <div className="flex justify-between my-1 text-lg">
          <span>price</span>
          <span>{place.price_level}</span>
        </div>
        <div className="flex justify-between my-1 text-lg">
          <span>Ranking</span>
          <span>{place.ranking} </span>
        </div>
        <div className="m-2">
          {place?.awards?.map((award) => (
            <div className="flex justify-between my-2 text-lg">
              <img src={award.images.small} alt={award.display_name} />
              <span>{award.display_name}</span>
            </div>
          ))}
        </div>
        <div>
          {/* {place?.cuisine?.map(({name})=>(
            <span className="py-1 px-2 m-3 bg-gray-200 rounded-full ">
            {name}
          </span>
          ))} */}
        </div>
        {place?.address && (
          <div className="flex justify-between my-1 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mt-1"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            <span>{place.address}</span>
          </div>
        )}
        {place?.phone && (
          <div className="flex justify-between my-1 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 m-1"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>

            <span>{place.phone}</span>
          </div>
        )}
        <div>
          <button
            className=" text-blue-300 uppercase"
            onClick={() => {
              window.open(place.web_url, "_blank");
            }}
          >
            trip advisor
          </button>
          <button
            className=" text-blue-300 uppercase"
            onClick={() => {
              window.open(place.website, "_blank");
            }}
          >
            website
          </button>
        </div>
      </div>
    </div>
  );
};

export default Place;
{
  /* <div className="flex justify-between my-1 text-lg">
          <svg
            className="w-4 h-4 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
              clipRule="evenodd"
            />
          </svg>
          <span>6523615821656873</span>
        </div> */
}
