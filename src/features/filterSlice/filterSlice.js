import { createSlice } from "@reduxjs/toolkit";

const intialValue = [
  {
    id: 1,
    name: "All Departaments",
    value: "all",
  },
  {
    id: 2,
    name: "Arts & Crafts",
    value: "arts",
  },
  {
    id: 3,
    name: "Automovite",
    value: "auto",
  },
  {
    id: 4,
    name: "Baby",
    value: "baby",
  },
  {
    id: 5,
    name: "Beauty & Personal Care",
    value: "beauty",
  },
  {
    id: 6,
    name: "Books",
    value: "books",
  },
  {
    id: 7,
    name: "Boy's fashion",
    value: "bfashion",
  },
  {
    id: 8,
    name: "Computers",
    value: "pcs",
  },
  {
    id: 9,
    name: "Deals",
    value: "deals",
  },
  {
    id: 10,
    name: "Digital Music",
    value: "music",
  },
  {
    id: 11,
    name: "Electronics",
    value: "electronics",
  },
  {
    id: 12,
    name: "Girl's fashion",
    value: "gfashion",
  },
  {
    id: 13,
    name: "Health & Household",
    value: "health",
  },
  {
    id: 14,
    name: "Home & Kitchen",
    value: "kitchen",
  },
  {
    id: 15,
    name: "Industrial & Scientific",
    value: "science",
  },
  {
    id: 16,
    name: "Kindle Store",
    value: "kindle",
  },
  {
    id: 17,
    name: "Luggage",
    value: "luggage",
  },
  {
    id: 18,
    name: "Men's fashion",
    value: "mfashion",
  },
  {
    id: 19,
    name: "Movies & TV",
    value: "movie",
  },
  {
    id: 20,
    name: "Music , CD's & Vinyl",
    value: "cd",
  },
  {
    id: 21,
    name: "Pet Supplies",
    value: "psupply",
  },
  {
    id: 22,
    name: "Prime Video",
    value: "pvideo",
  },
  {
    id: 23,
    name: "Software",
    value: "sftware",
  },
  {
    id: 24,
    name: "Sports & Outdoors",
    value: "sport",
  },
  {
    id: 25,
    name: "Tools & Home Improvement",
    value: "tools",
  },
  {
    id: 26,
    name: "Toys & Games",
    value: "toys",
  },
  {
    id: 27,
    name: "Video Games",
    value: "games",
  },
  {
    id: 28,
    name: "Women's fashion",
    value: "wfashion",
  },
];

const filterSlice = createSlice({
  name: "filter",
  initialState: intialValue,
  reducers: {},
});

export const getFilters = (state) => state.filter;
export default filterSlice.reducer;
