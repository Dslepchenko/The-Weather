import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWeather: {
    city: "",
    temperature: "",
    day:'',
    description:'',
    icon:'',
    dayTime:'',
    nightTime:''
  },
  days:[

  ],
  loading:'success'
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather(state, action) {
      state.currentWeather = action.payload.currentWeather;
    },
    setDaysWeather(state, action){
        state.days=action.payload.days
    },
    setLoading(state,action){
      state.loading=action.payload
    }
  },
});

export const { setWeather, setDaysWeather, setLoading } = weatherSlice.actions;

export default weatherSlice.reducer;
