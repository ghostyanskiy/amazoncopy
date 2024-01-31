import { createSlice } from "@reduxjs/toolkit";

const intialValue = [
  {
    id: 1,
    name: "Headsets",
    img: "./accessories/headsets.jpg",
  },
  {
    id: 2,
    name: "Keyboards",
    img: "./accessories/keyboards.jpg",
  },
  {
    id: 3,
    name: "Computer mice",
    img: "./accessories/mice.jpg",
  },
  {
    id: 4,
    name: "Chairs",
    img: "./accessories/chairs.jpg",
  },
];

const accessSlice = createSlice({
  name: "accessories",
  initialState: intialValue,
  reducers: {},
});

export const getAccss = (state) => state.accessories;
export default accessSlice.reducer;
