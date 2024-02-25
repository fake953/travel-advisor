import axios from "axios";
const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
export const GetApi = async (ne,sw) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL,  {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': '0af433e7d5msh3bee3e87d277141p144a15jsn526b16dcc73e',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
