export const getRealtimeWeather = async (lat, long) => {
  try {
    const res = await fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat}%2C${long}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "1ed03d24b6msh0cffdeb65a12596p112460jsn2f800ae326cd",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      }
    );
    const result_1 = await res.json();
    return result_1;
  } catch (error) {
    return error;
  }
};

export const getSunriseSunset = async (city) => {
    try {
      const res = await fetch(
        `https://weatherapi-com.p.rapidapi.com/astronomy.json?q=${city}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "1ed03d24b6msh0cffdeb65a12596p112460jsn2f800ae326cd",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          },
        }
      );
      const result_1 = await res.json();
      return result_1;
    } catch (error) {
      return error;
    }
  };

export const getAQI = async (city) => {
  try {
    const res = await fetch(
      `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "1ed03d24b6msh0cffdeb65a12596p112460jsn2f800ae326cd",
          "X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
        },
      }
    );
    const result_1 = await res.json();
    return result_1;
  } catch (error) {
    return error;
  }
};
