export const initDetails = {
  perPage: 10,
  total: 0,
  lastPage: 1,
  hasPages: false,
  hasMorePages: false,
  currentPage: 1,
  count: 0,
};

export const profileCountInit = {
  sellsCount: 0,
  buysCount: 0,
};

export const postInitState = {
  item: {},
  area: "",
  roomNum: "",
  inventory: 1,
  isSending: false,
  loaded: false,
  isUploading: false,
  image0: "",
  image1: "",
  image2: "",
  image3: "",
  image4: "",
  image5: "",
  image6: "",
  image7: "",
  image8: "",
  image9: "",
  image10: "",
  progress: 0,
  title: "",
  description: "",
  category: 1,
  type: "sefr",
  model1: "",
  model2: "",
  model3: "",
  model4: "",
  model5: "",
  model6: "",
  model7: "",
  model8: "",
  model9: "",
  model10: "",
  inv1: "",
  inv2: "",
  inv3: "",
  inv4: "",
  inv5: "",
  inv6: "",
  inv7: "",
  inv8: "",
  inv9: "",
  inv10: "",
  commission: 0,
  companyPortion: 0,
  userPortion: 0,
  modelSwitch: false,
  posted: false,
};

export const postImagesInitState = {
  isSending: false,
  loaded: false,
  isUploading: false,
  image0: "",
  image1: "",
  image2: "",
  image3: "",
  image4: "",
  image5: "",
  image6: "",
  image7: "",
  image8: "",
  image9: "",
  image10: "",
  progress: 0,
  posted: false,
};

export const imageBoxInit = {
  isUploaded: false,
  isUploading: false,
  isErrorUploading: false,
  progress: 0,
  image: "",
  imageUrl: "",
};

export const userDataInit = {
  address: "",
  api_token: "",
  bankName: null,
  center_id: null,
  city_id: 0,
  city_name: "",
  created_at: "",
  email: null,
  email_verified_at: null,
  expo_token: null,
  iban: null,
  id: 0,
  isStore: 0,
  lat: null,
  lng: null,
  mobile: "",
  name: "",
  postalCode: "",
  profileImage: "",
  storeAddress: "",
  storeBio: "",
  storeDeliveryPostPrice: "",
  storeDeliveryPrice: "",
  storeFreeDelivery: "",
  storeImage: "",
  storeName: "",
  storeRate: 0,
  updated_at: "",
  verified: 0,
  wallet: 0,
  status: 1,
  loggedIn: false,
};

// export const profileImage = () => {
//   return require("../images/profile.jpg");
// };

export const villaSpaces = [
  { id: 1, title: "دربست" },
  { id: 2, title: "نیمه دربست" },
  { id: 3, title: "اتاق خصوصی" },
  { id: 4, title: "اتاق مشترک" },
];

export const villaTypes = [
  { id: 1, title: "ویلایی" },
  { id: 2, title: "آپارتمان" },
  { id: 3, title: "سوئیت" },
  { id: 4, title: "خانه روستایی" },
  { id: 5, title: "کلبه" },
  { id: 6, title: "اقامتگاه بومگردی" },
  { id: 7, title: "هتل آپارتمان" },
  { id: 8, title: "مهمان خانه" },
  { id: 9, title: "چادر / خیمه" },
  { id: 10, title: "پانسیون" },
  { id: 11, title: "هاستل" },
  { id: 12, title: "کاروانسرا" },
  { id: 13, title: "بوتیک هتل" },
  { id: 14, title: "قایق" },
];

export const villaDistricts = [
  { id: 1, title: "ساحلی" },
  { id: 2, title: "جنگلی" },
  { id: 3, title: "ییلاقی" },
  { id: 4, title: "بیابانی" },
  { id: 5, title: "شهری" },
  { id: 6, title: "حومه شهر" },
  { id: 7, title: "روستایی" },
];

export const villaDeliveryTimes = [
  { id: 1, title: "نا محدود" },
  { id: 2, title: "12 ظهر" },
  { id: 3, title: "1 ظهر" },
  { id: 4, title: "2 ظهر" },
  { id: 5, title: "3 عصر" },
  { id: 6, title: "4 عصر" },
  { id: 7, title: "5 عصر" },
  { id: 8, title: "6 عصر" },
  { id: 9, title: "7 شب" },
  { id: 10, title: "8 شب" },
  { id: 11, title: "9 شب" },
  { id: 12, title: "10 شب" },
  { id: 13, title: "11 شب" },
  { id: 14, title: "12 شب" },
  { id: 15, title: "1 شب" },
  { id: 16, title: "2 شب" },
  { id: 17, title: "3 شب" },
  { id: 18, title: "4 صبح" },
  { id: 19, title: "5 صبح" },
  { id: 20, title: "6 صبح" },
  { id: 21, title: "7 صبح" },
  { id: 22, title: "8 صبح" },
  { id: 23, title: "9 صبح" },
  { id: 24, title: "10 صبح" },
  { id: 25, title: "11 صبح" },
];

export const appInfo = {
  persianTitle: "تورس",
};

export const mapboxToken =
  "sk.eyJ1IjoicGV5bWFuZ2hhbmJhcnkiLCJhIjoiY2xuZWh1Zjd5MGY0MzJscXhkNHppYmQzZyJ9.5KmXXgUYFvSITa9pMaq5oQ";

export const incompleteProfileDescription = `مشخصات محل کار و مرکز خرید و شماره پلاک خود را ثبت نمایید`;
