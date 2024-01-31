import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    id: 1,
    name: "Shop activity smartwatches",
    img: "./accessories/watch.jpg",
    link: "Shop Now",
  },
  {
    id: 2,
    name: "A whole new way to work",
    img: "./accessories/work.jpg",
    link: "Shop personal computers",
  },
  {
    id: 3,
    name: "Player's paradise starts here",
    img: "./accessories/gaming.jpg",
    link: "Shop video games",
  },
  {
    id: 4,
    name: "Upgrade your office furniture",
    img: "./accessories/furniture.jpg",
    link: "Shop now",
  },
];

const forHomeSlice = createSlice({
  name: "home",
  initialState: initialValue,
  reducers: {},
});

export const getForHome = (state) => state.home;
export default forHomeSlice.reducer;
