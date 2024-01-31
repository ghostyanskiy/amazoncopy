import { createSlice } from "@reduxjs/toolkit";

const intialValue = [
  {
    id: 1,
    name: "Jeans under 50$",
    img: "./fashion/jeans.jpg",
  },
  {
    id: 2,
    name: "Tops under 25$",
    img: "./fashion/tops.jpg",
  },
  {
    id: 3,
    name: "Dresses under 30$",
    img: "./fashion/dress.jpg",
  },
  {
    id: 4,
    name: "Shoes under 50$",
    img: "./fashion/shoes.jpg",
  },
];

const fashionSlice = createSlice({
  name: "fashion",
  initialState: intialValue,
  reducers: {},
});

export const getFashion = (state) => state.fashion;
export default fashionSlice.reducer;
