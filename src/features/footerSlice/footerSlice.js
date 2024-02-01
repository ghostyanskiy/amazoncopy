import { createSlice } from "@reduxjs/toolkit";

const intialValue = {
  first: [
    {
      id: 1,
      name: "Amazon Music",
      text: "Stream millions of songs",
    },
    {
      id: 2,
      name: "Amazon Ads",
      text: "Reach customers wherever they spend their time",
    },
    {
      id: 3,
      name: "6pm",
      text: "Score deals on fashion brands",
    },
    {
      id: 4,
      name: "AbeBooks",
      text: "Books, arts & collectibles",
    },
    {
      id: 5,
      name: "ACX",
      text: "Audiobook Publishing Made Easy",
    },
    {
      id: 6,
      name: "Sell on Amazon",
      text: "Start a Selling Account",
    },
    {
      id: 7,
      name: "Amazon Business",
      text: "Everything For Your Business",
    },
  ],
  second: [
    {
      id: 8,
      name: "AmazonGlobal",
      text: "Shop Order Internationally",
    },
    {
      id: 9,
      name: "Home Services",
      text: "Experienced Pros Happiness Guarantee",
    },
    {
      id: 10,
      name: "Amazon Web Services",
      text: "Scalable Cloud Computing Services",
    },
    {
      id: 11,
      name: "Audible",
      text: "Listen to Books & Original Audio Performances",
    },
    {
      id: 12,
      name: "Box Office Mojo",
      text: "Find Movie Box Office Data",
    },
    {
      id: 13,
      name: "Goodreads",
      text: "Book Reviews & recommendations",
    },
    {
      id: 14,
      name: "IMDb",
      text: "Movies, TV & Celebrities",
    },
  ],
  third: [
    {
      id: 15,
      name: "IMDbPro",
      text: "Get Info Entertainment Professionals Need",
    },
    {
      id: 16,
      name: "Kindle Direct Publishing",
      text: "Indie Digital & Print Publishing Made Easy",
    },
    {
      id: 17,
      name: "Prime Video Direct",
      text: "Video Distribution Made Easy",
    },
    {
      id: 18,
      name: "Shopbop",
      text: "Designer Fashion Brands",
    },
    {
      id: 19,
      name: "Woot!",
      text: "Deals and Shenanigans",
    },
    {
      id: 20,
      name: "Zappos",
      text: "Shoes & Clothing",
    },
    {
      id: 21,
      name: "Ring",
      text: "Smart Home Security Systems",
    },
  ],
  fourth: [
    {
      id: 22,
      name: " ",
      text: " ",
    },
    {
      id: 23,
      name: "eero WiFi",
      text: "Stream 4K Video in Every Room",
    },
    {
      id: 24,
      name: "Blink",
      text: "Smart Security for Every Home",
    },
    {
      id: 25,
      name: "Neighbors App",
      text: "Real-Time Crime & Safety Alerts",
    },
    {
      id: 26,
      name: "Amazon Subscription ",
      text: "Experienced Pros Happiness Guarantee",
    },
    {
      id: 27,
      name: "Amazon Web Services",
      text: "Scalable Cloud Computing Services",
    },
    {
      id: 28,
      name: " ",
      text: " ",
    },
  ],
};

const footerSlice = createSlice({
  name: "footer",
  initialState: intialValue,
  reducers: {},
});

export const getFooter = (state) => state.footer;
export default footerSlice.reducer;
