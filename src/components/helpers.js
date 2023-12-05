import {
  MaterialIcons,
  FontAwesome,
  Ionicons,
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isFunction } from "lodash";
import { HStack, Text, VStack, Alert } from "native-base";
import React from "react";
import {
  ToastAndroid,
  Alert as RNAlert,
  Platform,
  Linking,
  Share,
} from "react-native";

import { default as cities } from "./citiesFull.json";
import dns from "../components/dns";
import { colors, fonts } from "../styles/style";

const moment = require("jalali-moment");

export const url = (path) => {
  if (is_null(path)) {
    return null;
  } else {
    return dns() + "/" + path;
  }
};

export const getUrl = (path) => {
  return dns() + "/";
};

export const removeDomainFromUrl = (url) => {
  let editedUrl=url;
  for(let i=0;i<5;i++){
    editedUrl=editedUrl.replace(getUrl(), "")
  }
  return editedUrl;
};

export const checkImage = (image) => {
  if (is_null(image)) {
    return require("../images/noimage.jpg");
  } else {
    return { uri: url(image.url) };
  }
};

export const toJalali = (date, full = false) => {
  let persianDate = moment(date).locale("fa");
  persianDate = full
    ? persianDate.format("DD MMMM YYYY ساعت HH:mm")
    : persianDate.format("DD MMMM YYYY"); // 1367/11/4
  return persianDate;
};

export const isDateToday = (date, full = false) => {
  return toJalali(new Date()) == toJalali(date);
};

export const addMillisecondToUrl = (path) => {
  const date = new Date();
  return (
    date.getMilliseconds() + "" + date.getSeconds() + "" + date.getMinutes()
  );
};

export const rnd = (path) => {
  return Math.floor(Math.random() * 10);
};

export const productCategoriesIcon = (exeption = false) => {
  let array = [
    { id: "0", as: Ionicons, name: "ios-reorder-three-outline" },
    { id: "1", as: FontAwesome, name: "laptop" },
    { id: "2", as: Entypo, name: "mobile" },
    { id: "3", as: MaterialCommunityIcons, name: "car-wrench" },
    { id: "4", as: Ionicons, name: "shirt-outline" },
    { id: "5", as: Ionicons, name: "game-controller-outline" },
    { id: "6", as: Ionicons, name: "fast-food-outline" },
    { id: "7", as: MaterialCommunityIcons, name: "heart-multiple-outline" },
    { id: "8", as: MaterialIcons, name: "kitchen" },
    {
      id: "9",
      as: MaterialCommunityIcons,
      name: "book-open-page-variant-outline",
    },
    { id: "10", as: MaterialIcons, name: "sports-volleyball" },
    { id: "11", as: FontAwesome5, name: "hands-wash" },
    // {'id':'12','as':FontAwesome5,'name':'home'},
  ];
  if (exeption) {
    array = array.filter((item) => item.id != 0);
  }
  return array;
};

export const productCategories = (value, exeption = false) => {
  let array = [
    { id: 0, title: "همه" },
    { id: 1, title: "کالای دیجیتال" },
    { id: 2, title: "موبایل" },
    { id: 3, title: "خودرو، ابزار و تجهیزات صنعتی" },
    { id: 4, title: "مد و پوشاک" },
    { id: 5, title: "اسباب بازی، کودک و نوزاد" },
    { id: 6, title: "کالاهای سوپرمارکتی" },
    { id: 7, title: "زیبایی و سلامت" },
    { id: 8, title: "خانه و آشپزخانه" },
    { id: 9, title: "کتاب، لوازم تحریر و هنر" },
    { id: 10, title: "ورزش و سفر" },
    { id: 11, title: "محصولات بومی و محلی" },
    // 'املاک (ویلا و کلبه و آپارتمان)',
  ];
  if (exeption) {
    array = array.filter((item) => item.id != 0);
  }
  //console.log('array',array);
  if (!is_null(value) || value == 0) {
    const found = array.find((item) => item.id == value);
    if (is_null(found)) {
      return "همه";
    }
    return found.title;
  }
  return array;
};

export const factorStatus = (value) => {
  switch (parseInt(value)) {
    case 1:
      return "در انتظار پرداخت";
    case 2:
      return "قابل استفاده";
    case 3:
      return "استفاده شده";
    case 4:
      return "لغو شده";
    case 13:
      return "منقضی شده";
    default:
      return "نامشخص";
  }
};

export const factorStatusColorScheme = (value) => {
  switch (parseInt(value)) {
    case 1:
      return "#ffedd5";
    case 2:
      return "#ffedd5";
    case 3:
      return "#cffafe";
    case 4:
      return "#d1fae5";
    case 5:
      return "#fef9c3";
    case 11:
      return "light";
    case 12:
      return "#e11d48";
    case 13:
      return "light";
    default:
      return "light";
  }
};

export const factorStatusColor = (value) => {
  switch (parseInt(value)) {
    case 1:
      return "#ea580c";
    case 2:
      return "warning.200";
    case 3:
      return "green.200";
    case 4:
      return "red.200";
    case 13:
      return "rose.200";
    default:
      return "light.200";
  }
};

export const paymentStatus = (value) => {
  switch (parseInt(value)) {
    case 0:
      return "پرداخت نشده";
    case 1:
      return "پرداخت موفق";
    default:
      return "نامشخص";
  }
};

export const publicStatus = (value) => {
  switch (value) {
    case "confirmed":
      return "موفق";
    case "pending":
      return "در حال انجام";
    case "rejected":
      return "انجام نشده";
    default:
      return "نامشخص";
  }
};

export const publicStatusColor = (value) => {
  switch (value) {
    case "confirmed":
      return "green.500";
    case "pending":
      return "warning.400";
    case "rejected":
      return "danger.500";
    default:
      return "light.200";
  }
};

export const paymentStatusColor = (value) => {
  switch (value) {
    case 0:
      return "warning.400";
    case 1:
      return "green.500";
    default:
      return "light.200";
  }
};

export const transactionStatus = (value) => {
  switch (value) {
    case 1:
      return "پرداخت ناموفق";
    case 2:
      return "پرداخت موفق";
    case 11:
      return "پرداخت ناموفق";
    case 13:
      return "منقضی شده";
    default:
      return "نامشخص";
  }
};

export const factorStatusArray = (value) => {
  return [
    // {'id':'1','title':'در انتظار پرداخت','iconModule':MaterialCommunityIcons,'iconName':'progress-clock'},
    {
      id: "2",
      title: "در حال پردازش",
      iconModule: MaterialCommunityIcons,
      iconName: "progress-clock",
    },
    {
      id: "3",
      title: "بررسی انبار",
      iconModule: AntDesign,
      iconName: "database",
    },
    {
      id: "4",
      title: "ارسال شد",
      iconModule: MaterialCommunityIcons,
      iconName: "truck-fast-outline",
    },
    {
      id: "5",
      title: "تحویل شد",
      iconModule: Feather,
      iconName: "check-square",
    },
    // {'id':'11','title':'پرداخت ناموفق','iconModule':FontAwesome5,'iconName':'times-circle'},
    {
      id: "12",
      title: "لغو فاکتور",
      iconModule: FontAwesome5,
      iconName: "times-circle",
    },
    // {'id':'13','title':'ابطال فاکتور','iconModule':FontAwesome5,'iconName':'times-circle'},
  ];
};

export const transactionStatusColor = (value) => {
  switch (value) {
    case 1:
      return "rose.400";
    case 2:
      return "success.400";
    case 11:
      return "rose.400";
    default:
      return "light.400";
  }
};

export const factorStatusPercentage = (value) => {
  switch (value) {
    case 1:
      return 12;
    case 2:
      return 25;
    case 3:
      return 50;
    case 4:
      return 75;
    case 5:
      return 100;
    case 11:
      return 100;
    case 12:
      return 100;
    case 13:
      return 100;
    default:
      return 90;
  }
};

export const citiesArray = () => {
  return cities;
};

export const avatar = () => {
  return "https://sedarholding.com/includes/asset/img/avatar.png";
};

export const factorStatusBgColor = (value) => {
  switch (value) {
    case 1:
      return "warning.50";
    case 2:
      return "warning.50";
    case 3:
      return "primary.50";
    case 4:
      return "green.50";
    case 5:
      return "tertiary.50";
    case 12:
      return "danger.50";
    default:
      return "light.50";
  }
};
export const factorProgressColor = (value) => {
  switch (value) {
    case 1:
      return "warning";
    case 2:
      return "warning";
    case 3:
      return "primary";
    case 4:
      return "green";
    case 5:
      return "tertiary";
    case 12:
      return "danger";
    default:
      return "light";
  }
};

export const productStatusColor = (value) => {
  switch (value) {
    case "pending":
      return "#f97316";
    case "rejected":
      return "#dc2626";
    case "expired":
      return "#dc2626";
    case "confirmed":
      return "#22c55e";
    default:
      return "white";
  }
};

export const productStatusText = (value) => {
  switch (value) {
    case "pending":
      return "در انتظار تایید";
    case "rejected":
      return "رد شده";
    case "expired":
      return "منقضی شده";
    case "confirmed":
      return "تایید شده";
    default:
      return "نامشخص";
  }
};

export const productStatus = (value) => {
  switch (value) {
    case "confirmed":
      return "تایید شده";
    case "expired":
      return "منقضی شده";
    case "rejected":
      return "رد شده";
    case "pending":
      return "در انتظار تایید";
    default:
      return "نامشخص";
  }
};

export const productType = (value) => {
  switch (value) {
    case "sefr":
      return "نو";
    case "dastedo":
      return "دست دوم";
    case "ejare":
      return "اجاره";
    case "forosh":
      return "فروش";
    default:
      return "نامشخص";
  }
};

export const banks = (value) => {
  return [
    { value: "1", label: "بانک آینده" },
    { value: "2", label: "بانک اقتصاد نوین" },
    { value: "3", label: "بانک انصار" },
    { value: "4", label: "بانک ایران زمین" },
    { value: "5", label: "بانک پارسیان" },
    { value: "6", label: "بانک پاسارگاد" },
    { value: "7", label: "بانک تات" },
    { value: "8", label: "بانک تجارت" },
    { value: "9", label: "بانک توسعه تعاون" },
    { value: "10", label: "بانک توسعه صادرات ایران" },
    { value: "11", label: "بانک حکمت ایرانیان" },
    { value: "12", label: "بانک خاورمیانه" },
    { value: "13", label: "بانک دی" },
    { value: "14", label: "بانک رفاه" },
    { value: "15", label: "بانک سامان" },
    { value: "16", label: "بانک سپه" },
    { value: "17", label: "بانک سرمایه" },
    { value: "18", label: "بانک سینا" },
    { value: "19", label: "بانک شهر" },
    { value: "20", label: "بانک صادرات ایران" },
    { value: "21", label: "بانک صنعت و معدن" },
    { value: "22", label: "بانک قرض الحسنه رسالت" },
    { value: "23", label: "بانک قوامین" },
    { value: "24", label: "بانک گردشگری" },
    { value: "25", label: "بانک مسکن" },
    { value: "26", label: "بانک ملت" },
    { value: "27", label: "بانک ملی ایران" },
    { value: "28", label: "بانک مهر ایران" },
    { value: "29", label: "بانک کارآفرین" },
    { value: "30", label: "بانک کشاورزی" },
    { value: "31", label: "پست بانک ایران" },
    { value: "32", label: "موسسه اعتباری توسعه" },
    { value: "33", label: "موسسه اعتباری ملل" },
    { value: "34", label: "موسسه اعتباری نور" },
    { value: "35", label: "موسسه مالی و اعتباری عسکریه" },
    { value: "36", label: "موسسه مالی و اعتباری کوثر" },
  ];
};

export const paymentMethod = (value) => {
  switch (value) {
    case "COC":
      return "کارت به کارت";
    case "PARSIAN":
      return "درگاه بانک پارسیان";
    case "MELLAT":
      return "درگاه بانک ملت";
    case "PASSARGAD":
      return "درگاه بانک پاسارگاد";
    case "GATEWAY":
      return "پرداخت آنلاین";
    default:
      return "نامشخص";
  }
};

export const deliveryTypeTitle = (value) => {
  switch (value) {
    case "F2F":
      return "تحویل حضوری";
    case "POST":
      return "شرکت ملی پست";
    case "PEYK":
      return "پیک موتوری";
    default:
      return "نامشخص";
  }
};

export const storeStars = (rate) => {
  const array = [];
  for (let i = 1; i <= rate; i++) {
    array.push(i);
  }
  return array;
};

export const number_format = (number, decimals, decPoint, thousandsSep) => {
  number = (number + "").replace(/[^0-9+\-Ee.]/g, "");
  const n = !isFinite(+number) ? 0 : +number;
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  const sep = typeof thousandsSep === "undefined" ? "," : thousandsSep;
  const dec = typeof decPoint === "undefined" ? "." : decPoint;
  let s = "";

  const toFixedFix = function (n, prec) {
    if (("" + n).indexOf("e") === -1) {
      return +(Math.round(n + "e+" + prec) + "e-" + prec);
    } else {
      const arr = ("" + n).split("e");
      let sig = "";
      if (+arr[1] + prec > 0) {
        sig = "+";
      }
      return (+(
        Math.round(+arr[0] + "e" + sig + (+arr[1] + prec)) +
        "e-" +
        prec
      )).toFixed(prec);
    }
  };

  // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec).toString() : "" + Math.round(n)).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }

  return s.join(dec);
};

export const number_unformat = (number) => {
  return number.toString().replace(/\D/g, "");
};

export const avatarFirstLetters = (name) => {
  if (typeof name == "undefined") {
    return name;
  }
  const nameArray = name.split(" ");
  let firstLetters = "";
  nameArray.forEach((name, index) => {
    if (index <= 1) {
      firstLetters += name.charAt(0) + " ";
    }
  });
  return firstLetters.trimEnd();
};

export const is_null = (variable) => {
  if (
    variable == null ||
    variable == "" ||
    variable == undefined ||
    variable == "null" ||
    variable == "NaN" ||
    variable == "undefined" ||
    variable.length == 0 ||
    typeof variable == "undefined"
  ) {
    return true;
  } else {
    return false;
  }
};

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    //   console.log('saved user data');
  } catch (e) {
    //console.log('error storing data',e);
    // saving error
  }
};

export const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (is_null(data)) {
      return null;
    }
    return JSON.parse(data);
  } catch (e) {}
};

export const diffDays = (dates) => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = Date.parse(dates[0]);
  const secondDate = Date.parse(dates[1]);

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

  return diffDays;
};

export const minutesToTime = (min) => {
  return {
    minutes: min,
    day: Math.floor(min / 24 / 60),
    hour: Math.floor((min / 60) % 24),
    min: Math.floor(min % 60),
  };
};

export const secondsToTime = (secs) => {
  const sec_num = parseInt(secs); // don't forget the second param
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - hours * 3600) / 60);
  let seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds;
};

export const toast = (message, duration = null) => {
  switch (duration) {
    case true:
      duration = ToastAndroid.LONG;
      break;
    case "null":
      duration = ToastAndroid.LONG;
      break;
    case "LONG":
    case "long":
      duration = ToastAndroid.LONG;
      break;
    case "SHORT":
    case "short":
      duration = ToastAndroid.SHORT;
      break;
    default:
      duration = ToastAndroid.SHORT;
      break;
  }

  ToastAndroid.show(message, duration);
};

export const titleColor = (variant, status) => {
  switch (variant) {
    case "solid":
      return "lightText";
    case "outline":
      return "lightText";
    case "subtle":
      switch (status) {
        case "danger":
          return "#970c0c";
        default:
          return "darkText";
      }
    default:
      return "darkText";
  }
};
export const descColor = (variant, status) => {
  switch (variant) {
    case "solid":
      return "lightText";
    case "outline":
      return "lightText";
    case "subtle":
      switch (status) {
        case "danger":
          return "darkText";
        default:
          return "darkText";
      }
    default:
      return "darkText";
  }
};

export const ToastAlert = ({
  id,
  title,
  variant = "solid",
  description,
  status = "success",
  w = "100%",
  borderRadius = 24,
  button = null,
}) => {
  return (
    <Alert
      borderRadius={borderRadius}
      maxWidth={w}
      alignSelf="center"
      flexDirection="row"
      status={status}
      variant={variant}
    >
      <VStack space={1} flexShrink={1} w="100%">
        <HStack space={2} flexDir="row-reverse">
          {!is_null(title) && <Alert.Icon style={{ marginTop: 4 }} />}
          <VStack space={2} flex={1}>
            {!is_null(title) && (
              <HStack
                flexDir="row-reverse"
                justifyContent="space-between"
                space={2}
                flexShrink={1}
                alignItems="center"
              >
                <Text
                  fontFamily={fonts.BOLD}
                  mt={1}
                  textAlign="right"
                  fontSize="13"
                  fontWeight="medium"
                  flexShrink={1}
                  color={titleColor(variant, status)}
                >
                  {title}
                </Text>
                {button}
              </HStack>
            )}
            <Text
              fontSize={12}
              textAlign="right"
              color={descColor(variant, status)}
            >
              {description}
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Alert>
  );
};

export const sortArray = (value = null) => {
  const arr = [
    { id: "cheapest", title: "ارزانـتــریــن" },
    { id: "costliest", title: "گـرانـتـریــن" },
    { id: "newest", title: "جـدیـدتـریـن" },
    { id: "oldest", title: "قـدیمی تـرین" },
  ];

  if (!is_null(value)) {
    const res = arr.find((obj) => obj.id == value);
    if (is_null(res)) {
      return "همه";
    }
    return res.title;
  }

  return arr;
};

export const array = (length) => {
  return Array.from({ length }, (v, i) => i);
};

export const starSize = (length, index, size) => {
  if (length == 5) {
    if (index == 0 || index == 4) {
      return size - 4;
    }
    if (index == 1 || index == 3) {
      return size - 2;
    }
    if (index == 3) {
      return size;
    }
  }

  if (length == 4) {
    if (index == 0 || index == 3) {
      return size - 3;
    }
    if (index == 1 || index == 2) {
      return size - 1;
    }
  }

  if (length == 3) {
    if (index == 0 || index == 2) {
      return size - 3;
    }
    if (index == 1) {
      return size;
    }
  }

  if (length == 2) {
    return size - 1;
  }

  return size;
};

export const percentageOf = (A, B) => {
  return ((A - B) / B) * 100;
};

export const getRateName = (value, rate) => {
  return rate >= value && rate > 0 ? "star" : "staro";
};

export const getRateColor = (value, rate) => {
  return rate >= value && rate > 0 ? colors.primary : "#373636";
};

export const calcImageHeight = (imageW, imageH, width) => {
  return imageH * (width / imageW);
};

export const hasStore = (user) => {
  return user.isStore == 1;
};

export const HandlePrice = (price) => {
  return (
    <HStack space={1} flexDirection="row-reverse">
      <Text fontFamily={fonts.BOLD} fontSize={14} color="dark.200">
        {price > 0 ? number_format(price) : "رایگان"}
      </Text>
      {price > 0 && (
        <Text fontSize={13} color="dark.200">
          تومان
        </Text>
      )}
    </HStack>
  );
};

export const calcTotal = (factors) => {
  let total = 0;

  factors.map((factor) => {
    total += parseInt(factor.total);
  });

  return total;
};

export const calcDeliveryPrice = (factors) => {
  let deliveryPrice = 0;

  factors.map((factor) => {
    deliveryPrice += parseInt(factor.deliveryPrice);
  });

  return deliveryPrice;
};
export const calcPayable = (factors) => {
  let total = 0;

  factors.map((factor) => {
    total += parseInt(factor.payable);
  });

  return total;
};

export const handleStatusTitle = (item) => {
  if (item.length > 1) {
    return "چند فاکتور";
  } else {
    return factorStatus(item[0].status);
  }
};

export const handleStatusColor = (item) => {
  if (item.length > 1) {
    return "primary.600";
  } else {
    return factorStatusColor(item[0].status);
  }
};

export const setNewTimeStamp = (data) => {
  data.passedDay = 0;
  data.passedMinute = 0;
  data.passedSecond = 0;
  return data;
};

export const getCreatedAt = (passedDay, passedMinute, passedSecond) => {
  if (passedSecond == 0) {
    return "لحظاتی پیش";
  }

  if (passedSecond < 60) {
    return `${passedSecond} ثانیه پیش`;
  }

  if (passedMinute < 60) {
    return `${passedMinute} دقیقه پیش`;
  }

  if (passedDay == 0) {
    return `${number_format(passedMinute / 60)} ساعت پیش`;
  }

  if (passedDay > 0 && passedDay < 7) {
    return `${number_format(passedDay)} روز پیش`;
  }

  if (passedDay > 6 && passedDay < 365) {
    return `${number_format(passedDay / 7)} هفته پیش`;
  }

  if (passedDay >= 365) {
    return `${number_format(passedDay / 365)} سال پیش`;
  }
};

export const Confirm = (closure, onCancel) => {
  RNAlert.alert("", "از حذف این نظر اطمینان دارید؟", [
    {
      text: "لغو",
      onPress: () => {
        if (isFunction(closure)) {
          onCancel();
        }
      },
      style: "cancel",
    },
    {
      text: "بله، اطمینان دارم",
      onPress: () => {
        if (isFunction(closure)) {
          closure();
        }
      },
    },
  ]);
};

export const ProfileImage = (image) => {
  return image ? { uri: url(image) } : require("../images/icon.png");
};

export const ProfileCountHandle = (profileCount) => {
  return parseInt(profileCount.sellsCount) + parseInt(profileCount.buysCount);
};

export const ErrorsToString = (errors) => {
  let errs = "";
  {
    Object.keys(errors).map(
      (message, index) => (errs += `- ${errors[message][0]} \n`),
    );
  }
  return errs;
};

export const UpdateBasket = ({
  NewBasket,
  id,
  product_id,
  title,
  inv = 0,
  qty,
  image,
  price,
  off_price,
  store_name,
  store_id,
}) => {
  if (NewBasket.find((row) => row.id == id)) {
    if (qty <= 0) {
      NewBasket = NewBasket.filter((row) => {
        return row.id != id;
      });
    } else {
      NewBasket.map((row) => {
        if (row.product_id == product_id) {
          row.qty = qty;
        }
      });
    }
  } else {
    NewBasket.push({
      id: Date.now(),
      product_id,
      title,
      inv,
      qty,
      image,
      price,
      off_price,
      store_id,
      store_name,
    });
  }

  storeData("baskets", NewBasket);

  return NewBasket;
};

export const getBasketCount = (basket) => {
  let basketCount = 0;
  !is_null(basket) &&
    basket.map((item) => {
      basketCount += item.qty;
    });
  return basketCount;
};

export const getUniqueId = (sender_id, receiver_id) => {
  return sender_id < receiver_id
    ? sender_id + "" + receiver_id
    : receiver_id + "" + sender_id;
};

export const checkIfItemExists = (basket, product_id) => {
  return !is_null(basket.find((row) => row.product_id == product_id));
};

export const getItemInBasket = (basket, product_id) => {
  return basket.find((row) => row.product_id == product_id);
};

export const SaveSearchHistory = (searchHistoryItems, searchText) => {
  let newSearchHistoryItems = searchHistoryItems;
  newSearchHistoryItems = newSearchHistoryItems.filter(
    (text) => text != searchText,
  );
  newSearchHistoryItems.push(searchText);
  storeData("searchHistoryItems", newSearchHistoryItems);
  return newSearchHistoryItems;
};

export const getProfileImage = (profileImage = "") => {
  if (is_null(profileImage)) {
    return require("../images/icon.png");
  }
  return { uri: url(profileImage) };
};

export const isMe = (id1, id2) => {
  return parseInt(id1) == parseInt(id2);
};

export const secondsToDay = (seconds) => {
  return Math.floor(seconds / (3600 * 24));
};

export const minutesToSecond = (minutes) => {
  return minutes * 60;
};

export const hoursToSecond = (hours) => {
  return hours * 60 * 60;
};

export const millisToMinutes = (millis) => {
  const minutes = Math.floor(millis / 60000);
  return minutes;
};

export const millisToSeconds = (millis) => {
  const seconds = (millis / 1000).toFixed(0);
  return seconds;
};

export const handleFooterOpacity = (isLastPage, isPaginating, isLoading) => {
  if (!isLastPage) {
    return 1;
  }

  if (isPaginating) {
    return 1;
  }

  if (isLoading) {
    return 1;
  }

  return 0;
};

export const randomInteger = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

export const randomHexColor = () => {
  const [r, g, b] = randomRgbColor();

  const hr = r.toString(16).padStart(2, "0");
  const hg = g.toString(16).padStart(2, "0");
  const hb = b.toString(16).padStart(2, "0");

  return "#" + hr + hg + hb;
};

export const randomRgbColor = () => {
  const r = randomInteger(255);
  const g = randomInteger(255);
  const b = randomInteger(255);
  return [r, g, b];
};

export const onShare = async ({ title, message, url }) => {
  try {
    const result = await Share.share({ title, message, url });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

export const openMap = ({ latitude = 0, longitude = 0, centerTitle = "" }) => {
  const scheme = Platform.select({
    ios: "maps://0,0?q=",
    android: "geo:0,0?q=",
  });
  const latLng = `${latitude},${longitude}`;
  const label = centerTitle;
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  Linking.openURL(url);
};

export const currentDate2Seconds = () => {
  return parseInt(Math.floor(Date.now() / 1000));
};

export const remainingSeconds = (sec) => {
  const remaining = sec - currentDate2Seconds();
  return remaining;
};

export const validate_image_uri = (uri) => {
  if (is_null(uri)) {
    return require("../images/icon.png");
  } else {
    return { uri };
  }
};

export const inboxSortArray = () => {
  return [
    { id: "id%7Cdesc", title: "جـدیـدتـریـن" },
    { id: "id%7Casc", title: "قـدیمی تـرین" },
  ];
};

export const inboxTypeArray = () => {
  return [
    { id: "", title: "همه" },
    { id: "admin", title: "ادمین" },
    { id: "seller", title: "فروشنده" },
    { id: "user", title: "کاربر" },
  ];
};

export const sortArrayTitle = (value) => {
  const sortArrayObject = sortArray().find((item) => item.id == value);
  return sortArrayObject.title;
};

export const getCategoriesSeparately = (
  categories,
  category_id,
  sub_category_id,
) => {
  let subCategoriesArray = [];
  let subCategoriesArray2 = [];
  categories.map((category) => {
    if (category.id == category_id) {
      subCategoriesArray = category.children;
      category.children.map((subCategory) => {
        if (subCategory.id == sub_category_id) {
          subCategoriesArray2 = subCategory.children;
        }
      });
    }
  });
  return {
    subCategoriesArray,
    subCategoriesArray2,
  };
};

export const paginate = (items, page = 1, perPage = 3) => {
  page = page * perPage - 1;
  return items.filter((item, key) => {
    if (key <= page) {
      return item;
    }
  });
};

export const digitToArray = (digit) => {
  const digitArray = [];
  for (let i = 1; i <= digit; i++) {
    digitArray.push(i);
  }
  return digitArray;
};

export const sortBy = (items, type) => {
  switch (type) {
    case "Asc":
      return items.sort((a, b) => (a.amount > b.amount ? 1 : -1));
    case "Desc":
      return items.sort((a, b) => (a.amount < b.amount ? 1 : -1));
  }
};

export const odd = (number) => {
  if (number % 2 != 0) {
    return true;
  }
  return false;
};

export const even = (number) => {
  if (number % 2 == 0) {
    return true;
  }
  return false;
};

export const getItemImage = (image) => {
  if (!is_null(image)) {
    return image.url["tiny_2x"];
  }
};

export const calcHeight = (originalHeight, originalWidth, newWidth) => {
  return (originalHeight / originalWidth) * newWidth;
};

export const StoreData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};

export const GetData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (is_null(data)) {
      return null;
    }
    return JSON.parse(data);
  } catch (e) {
    console.log(e);
  }
};

export const productSortArray = () => {
  return [
    {
      id: 1,
      title: "ارزانترین",
      value: 1,
    },
    {
      id: 2,
      title: "بیشترین تخفیف",
      value: 2,
    },
    {
      id: 3,
      title: "جدیدترین",
      value: 3,
    },
    {
      id: 4,
      title: "احراز هویت شده",
      value: 4,
    },
  ];
};

export const getBrandsAndCategories = (
  data,
  newFiltersData,
  selectedCategoryId,
  selectedSubCategoryId,
) => {
  const brandIdsObjects = data.brand_category.filter((item) => {
    return item.category_id == selectedSubCategoryId;
  });

  const brandIds = brandIdsObjects.map(({ brand_id }) => brand_id);
  const brands = data.brands.filter((item) => brandIds.includes(item.id));
  newFiltersData.brands = brands;

  const subcategories = data.subcategories.filter(
    (item) => item.parent_id == selectedCategoryId,
  );
  newFiltersData.subcategories = subcategories;

  return newFiltersData;
};

export const ReachedEnd = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}) => {
  const paddingToBottom = 0;
  return (
    layoutMeasurement.height + contentOffset.y + 1 >=
    contentSize.height - paddingToBottom
  );
};

export const instagramUserName = (name = "") => {
  if (is_null(name)) {
    return "";
  }
  if (
    name.includes("instagram.com") ||
    name.includes("https://instagram.com/") ||
    name.includes("http://instagram.com/") ||
    name.includes("https://www.instagram.com/")
  ) {
    let str = name.replace("https://www.instagram.com/", "");
    str = str.replace("https://instagram.com/", "");
    str = str.replace("http://instagram.com/", "");
    str = str.replace("instagram.com", "");
    str = str.replace("/", "");
    return str;
  }
  return name.replace("@", "");
};

export const telegramUserName = (name = "") => {
  if (is_null(name)) {
    return "";
  }
  let str = name.replace("https://www.telegram.me/", "");
  str = str.replace("https://www.t.me/", "");
  str = str.replace("https://t.me/", "");
  str = str.replace("https://telegram.me/", "");
  str = str.replace("http://telegram.me/", "");
  str = str.replace("telegram.me", "");
  str = str.replace("/", "");
  return str;
};

export const removeTags = (string) => {
  const regex = /(<([^>]+)>)/gi;
  return string.replace(regex, "");
};

export const productLink = (id) => {
  return `${dns()}/p_${id}.aspx`;
};

export const ProductScreenParams = (item) => {
  return {
    product: { name: item.name },
    product_id: item.id,
    images: [{ url: item.image }],
  };
};

export const ProductScreenParams1 = (item) => {
  return {
    product: { name: item.name },
    product_id: item.id,
    images: [{ url: getItemImage(item.image) }],
  };
};

export const checkIsTimeBetween = (startTime = "08:00", endTime = "23:30") => {
  const currentDate = new Date();

  const startDate = new Date(currentDate.getTime());
  startDate.setHours(startTime.split(":")[0]);
  startDate.setMinutes(startTime.split(":")[1]);
  //startDate.setSeconds(startTime.split(":")[2]);

  const endDate = new Date(currentDate.getTime());
  endDate.setHours(endTime.split(":")[0]);
  //endDate.setMinutes(endTime.split(":")[1]);
  //endDate.setSeconds(endTime.split(":")[2]);

  return startDate <= currentDate && endDate >= currentDate;
};

export const getStoresCount = (
  loaded = false,
  offline_prices,
  online_prices,
) => {
  if (!loaded) {
    return 0;
  }
  const offlineprices = offline_prices.length;
  const onlineprices = online_prices.length;
  return {
    total: offlineprices + onlineprices,
    online_prices: onlineprices,
    offline_prices: offlineprices,
  };
};
