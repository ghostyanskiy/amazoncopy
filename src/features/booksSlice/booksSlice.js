import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    id: 1,
    name: "bitter",
    img: "./books/bitter.jpg",
  },
  {
    id: 2,
    name: "cloud",
    img: "./books/cloud.jpg",
  },
  {
    id: 3,
    name: "compulsive",
    img: "./books/compulsive.jpg",
  },
  {
    id: 4,
    name: "dakota",
    img: "./books/dakota.jpg",
  },
  {
    id: 5,
    name: "dekker",
    img: "./books/dekker.jpg",
  },
  {
    id: 6,
    name: "knowing",
    img: "./books/knowing.jpg",
  },
  {
    id: 7,
    name: "long",
    img: "./books/long.jpg",
  },
  {
    id: 8,
    name: "man",
    img: "./books/man.jpg",
  },
  {
    id: 9,
    name: "midnight",
    img: "./books/midnight.jpg",
  },
  {
    id: 10,
    name: "punch",
    img: "./books/punch.jpg",
  },
  {
    id: 11,
    name: "reality",
    img: "./books/reality.jpg",
  },
  {
    id: 12,
    name: "scotland",
    img: "./books/scotland.jpg",
  },
  {
    id: 13,
    name: "soldier",
    img: "./books/soldier.jpg",
  },
  {
    id: 14,
    name: "strategy",
    img: "./books/strategy.jpg",
  },
  {
    id: 15,
    name: "tough",
    img: "./books/tough.jpg",
  },
];

const booksSlice = createSlice({
  name: "books",
  initialState: initialValue,
  reducers: {},
});

export const getBooks = (state) => state.books;
export default booksSlice.reducer;
