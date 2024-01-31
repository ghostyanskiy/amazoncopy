import { configureStore } from "@reduxjs/toolkit";
import {
  accessoriesSlice,
  booksSlice,
  fashionSlice,
  filterSlice,
  forHomeSlice,
  homecareSlice,
  perfumeSlice,
  wearingSlice,
} from "../features";

const store = configureStore({
  reducer: {
    accessories: accessoriesSlice,
    homecare: homecareSlice,
    fashion: fashionSlice,
    wearing: wearingSlice,
    filter: filterSlice,
    perfume: perfumeSlice,
    books: booksSlice,
    home: forHomeSlice,
  },
});

export default store;
