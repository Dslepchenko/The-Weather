import { configureStore } from '@reduxjs/toolkit'
import  weatherSlice  from './slices/weather'
import favorites from './slices/favorites'
import { weatherApi } from '../api/weatherApi'

export const store = configureStore({
  reducer: {
      weather: weatherSlice,
      favorites: favorites,
      [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
})