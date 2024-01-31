import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    id: 1,
    name: "juliette",
    img: "./perfume/juliette.jpg",
  },
  {
    id: 2,
    name: "pottery",
    img: "./perfume/pottery.jpg",
  },
  {
    id: 3,
    name: "nivea",
    img: "./perfume/nivea.webp",
  },
  {
    id: 4,
    name: "spotlight",
    img: "./perfume/spotlight.jpg",
  },
  {
    id: 5,
    name: "bleu",
    img: "./perfume/bleu.jpg",
  },
  {
    id: 6,
    name: "unum",
    img: "./perfume/unum.webp",
  },
  {
    id: 7,
    name: "arom",
    img: "./perfume/arom.jpg",
  },
  {
    id: 8,
    name: "tendre",
    img: "./perfume/tendre.webp",
  },
  {
    id: 9,
    name: "our",
    img: "./perfume/our.jpg",
  },
  {
    id: 10,
    name: "blood",
    img: "./perfume/blood.jpg",
  },
  {
    id: 11,
    name: "fragrant",
    img: "./perfume/fragrant.jpg",
  },
  {
    id: 12,
    name: "valentino",
    img: "./perfume/valentino.jpg",
  },
  {
    id: 13,
    name: "sauvage",
    img: "./perfume/sauvage.jpg",
  },
  {
    id: 14,
    name: "versace",
    img: "./perfume/versace.jpg",
  },
  {
    id: 15,
    name: "essencial",
    img: "./perfume/essencial.jpg",
  },
];

const perfumeSlice = createSlice({
  name: "perfume",
  initialState: initialValue,
  reducers: {},
});

export const getPerfume = (state) => state.perfume;
export default perfumeSlice.reducer;
