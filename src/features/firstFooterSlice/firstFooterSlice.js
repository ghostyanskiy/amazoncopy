import { createSlice } from "@reduxjs/toolkit";

const intialValue = {
  first: [
    {
      id: 1,
      text: "Careers",
    },
    {
      id: 2,
      text: "Blog",
    },
    {
      id: 3,
      text: "About Amazon",
    },
    {
      id: 4,
      text: "Investor Relations",
    },
    {
      id: 5,
      text: "Amazon Devices",
    },
    {
      id: 6,
      text: "Amazon Science",
    },
  ],
  second: [
    {
      id: 7,
      text: "Sell products on Amazon",
    },
    {
      id: 8,
      text: "Sell on Amazon Business",
    },
    {
      id: 9,
      text: "Sell apps on Amazon",
    },
    {
      id: 10,
      text: "Become an Affiliate",
    },
    {
      id: 11,
      text: "Advertise Your Products",
    },
    {
      id: 12,
      text: "Self-Publish with Us",
    },
    {
      id: 13,
      text: "Host an Amazon Hub",
    },
    {
      id: 14,
      text: "> See More Make Money with Us",
    },
  ],
  third: [
    {
      id: 15,
      text: "Amazon Business Card",
    },
    {
      id: 16,
      text: "Shop with Points",
    },
    {
      id: 17,
      text: "Reload Your Balance",
    },
    {
      id: 18,
      text: "Amazon Currency Converter",
    },
  ],
  fourth: [
    {
      id: 19,
      text: "Amazon and COVID-19",
    },
    {
      id: 20,
      text: "Your Account",
    },
    {
      id: 21,
      text: "Your Orders",
    },
    {
      id: 21,
      text: "Shipping Rates & Policies",
    },
    {
      id: 22,
      text: "Returns & Replacements",
    },
    {
      id: 23,
      text: "Manage Your Content and Devices",
    },
    {
      id: 24,
      text: "Amazon Assistant",
    },
    {
      id: 25,
      text: "Help",
    },
  ],
};

const firstFooterSlice = createSlice({
  name: "firstfooter",
  initialState: intialValue,
  reducers: {},
});

export const getFirstFooter = (state) => state.firstfooter;
export default firstFooterSlice.reducer;
