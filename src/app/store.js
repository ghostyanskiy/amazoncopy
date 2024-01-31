import { configureStore } from "@reduxjs/toolkit";
import {
  accessoriesSlice,
  booksSlice,
  discountsSlice,
  fashionSlice,
  filterSlice,
  forHomeSlice,
  homecareSlice,
  pcSlice,
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
    pc: pcSlice,
    discount: discountsSlice,
  },
});

export default store;
