import { createSlice } from "@reduxjs/toolkit";

const intialValue = [
  {
    id: 1,
    name: "Dresses",
    img: "./fashion/dresses.jpg",
  },
  {
    id: 2,
    name: "Knits",
    img: "./fashion/knits.jpg",
  },
  {
    id: 3,
    name: "Jackets",
    img: "./fashion/jacket.jpg",
  },
  {
    id: 4,
    name: "Jewerly",
    img: "./fashion/jewerly.jpg",
  },
];

const wearingSlice = createSlice({
  name: "wearing",
  initialState: intialValue,
  reducers: {},
});

export const getWearing = (state) => state.wearing;
export default wearingSlice.reducer;
