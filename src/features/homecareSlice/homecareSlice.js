import { createSlice } from "@reduxjs/toolkit";

const intialValue = [
  {
    id: 1,
    name: "Dining",
    img: "./homecare/dining.jpg",
  },
  {
    id: 2,
    name: "Home",
    img: "./homecare/home.jpg",
  },
  {
    id: 3,
    name: "Kitchen",
    img: "./homecare/kitchen.jpg",
  },
  {
    id: 4,
    name: "Health and Beauty",
    img: "./homecare/health.jpg",
  },
];

const homecareSlice = createSlice({
  name: "homecare",
  initialState: intialValue,
  reducers: {},
});

export const getHome = (state) => state.homecare;
export default homecareSlice.reducer;
