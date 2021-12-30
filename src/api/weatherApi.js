import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
const API= 'gdwoaNtBsfRUJyXr4GHGgBLDf5vVyB07';
export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://dataservice.accuweather.com' }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: (city) => `/currentconditions/v1/${city}?apikey=${API}`,
    }),
    getLocation: builder.query({
        query: (q) => {
            console.log(q);
            return `locations/v1/cities/autocomplete?apikey=${API}&q=${q}`},
            transformResponse(res){
                if(!res) {
                return [];
                }
                return res;
            }
      }),
    getFiveDayForecast:  builder.query({
        query: (city) => `forecasts/v1/daily/5day/${city}?apikey=${API}&metric=true`,
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCurrentWeatherQuery, useGetLocationQuery, useGetFiveDayForecastQuery } = weatherApi;


