import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    id: 1,
    name: "thermaltake",
    img: "./pcparts/thermaltake.jpg",
  },
  {
    id: 2,
    name: "deepcool",
    img: "./pcparts/deepcool.jpg",
  },
  {
    id: 3,
    name: "define",
    img: "./pcparts/define.webp",
  },
  {
    id: 4,
    name: "bitfenix",
    img: "./pcparts/bitfenix.jpg",
  },
  {
    id: 5,
    name: "gigabyte",
    img: "./pcparts/gigabyte.jpg",
  },
  {
    id: 6,
    name: "fulltower",
    img: "./pcparts/fulltower.jpg",
  },
  {
    id: 7,
    name: "corsair",
    img: "./pcparts/corsair.jpg",
  },
  {
    id: 8,
    name: "razer",
    img: "./pcparts/razer.webp",
  },
  {
    id: 9,
    name: "master",
    img: "./pcparts/master.webp",
  },
  {
    id: 10,
    name: "corsaircc",
    img: "./pcparts/corsaircc.jpg",
  },
  {
    id: 11,
    name: "commander",
    img: "./pcparts/commander.jpg",
  },
  {
    id: 12,
    name: "z3",
    img: "./pcparts/z3.jpg",
  },
  {
    id: 13,
    name: "comrade",
    img: "./pcparts/comrade.jpg",
  },
  {
    id: 14,
    name: "one",
    img: "./pcparts/one.jpg",
  },
  {
    id: 15,
    name: "crown",
    img: "./pcparts/crown.jpg",
  },
];

const pcSlice = createSlice({
  name: "pc",
  initialState: initialValue,
  reducers: {},
});

export const getPC = (state) => state.pc;
export default pcSlice.reducer;
