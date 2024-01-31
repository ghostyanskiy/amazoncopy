import { configureStore } from "@reduxjs/toolkit";
import accessoriesSlice from "../features/accessoriesSlice/accessoriesSlice";
import homecareSlice from "../features/homecareSlice/homecareSlice";
import fashionSlice from "../features/fashionSlice/fashionSlice";
import wearingSlice from "../features/wearingSlice/wearingSlice";

const store = configureStore({
  reducer: {
    accessories: accessoriesSlice,
    homecare: homecareSlice,
    fashion: fashionSlice,
    wearing: wearingSlice,
  },
});

export default store;
