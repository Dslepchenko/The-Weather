import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API = "gdwoaNtBsfRUJyXr4GHGgBLDf5vVyB07";
const BaseUrl = "https://dataservice.accuweather.com";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),

  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: (city) => `/currentconditions/v1/${city}?apikey=${API}`,
    }),

    getLocation: builder.query({
      query: (q) => {
        return `locations/v1/cities/autocomplete?apikey=${API}&q=${q}`;
      },

      transformResponse(res) {
        if (!res) {
          return [];
        }
        return res;
      },
    }),
    
    getFiveDayForecast: builder.query({
      query: (city) =>
        `forecasts/v1/daily/5day/${city}?apikey=${API}&metric=true`,
    }),
  }),
});

export const {
  useGetCurrentWeatherQuery,
  useGetLocationQuery,
  useGetFiveDayForecastQuery,
} = weatherApi;
