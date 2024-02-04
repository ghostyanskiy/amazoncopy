import { configureStore } from "@reduxjs/toolkit";
import {
  accessoriesSlice,
  booksSlice,
  cartSlice,
  discountsSlice,
  fashionSlice,
  filterSlice,
  firstFooterSlice,
  footerSlice,
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
    footer: footerSlice,
    firstfooter: firstFooterSlice,
    cart: cartSlice,
  },
});

export default store;
