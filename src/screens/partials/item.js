import { MaterialIcons, Feather, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  Box,
  Image,
  Text,
  HStack,
  Pressable,
  VStack,
  Spinner,
  Progress,
} from "native-base";
import React, { useState } from "react";
import {
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  Platform,
} from "react-native";

import { inboxDestroyApi } from "../../../controller/InboxController";
import { appInfo } from "../../components/constant";
import {
  checkImage,
  is_null,
  number_format,
  storeStars,
  toJalali,
  url,
} from "../../components/helpers";
import style, { colors, fonts, heights } from "../../styles/style";
import ItemQty from "../product/partials/itemQty";

const { width } = Dimensions.get("window");
export const Item = React.memo(({ navigation, item }) => {
  const itemW = width / 2 - 30;
  return (
    <Pressable
      style={{ marginLeft: 12 }}
      onPress={() => {
        navigation.navigate("Product", { item });
      }}
      overflow="hidden"
      borderRadius={10}
      width={itemW}
      // height={width/2+50}
    >
      <LinearGradient colors={["#bbbbbb", "#f7f7f7", "#ffffff"]}>
        <VStack
          scaleX={-1}
          style={[Platform.OS == "ios" ? style.iosScaleX : {}]}
        >
          <VStack overflow="hidden">
            <Image
              key={item.id}
              alt="logo"
              width="100%"
              height={itemW}
              source={checkImage(item.image)}
            />
          </VStack>
          <Box pb={2}>
            <Text
              px={1}
              color="#585858"
              style={{ height: 50 }}
              numberOfLines={2}
              w="100%"
              textAlign="center"
              py="2"
              alignSelf="center"
              fontFamily={fonts.BOLD}
              fontSize="13"
            >
              {item.title}
            </Text>
            <HStack
              mt="1"
              alignItems="center"
              space="1"
              justifyContent="center"
            >
              <Text color="light.500" fontSize="10" fontFamily={fonts.BOLD}>
                تومان
              </Text>
              <Text fontSize="19" color="green.600" fontFamily={fonts.BOLD}>
                {number_format(
                  item.off_price > 0 ? item.off_price : item.price,
                )}
              </Text>
            </HStack>
            <Text
              textAlign="center"
              fontSize={9}
              w="100%"
              color="#585858"
              fontFamily="IranSans"
            >
              {item.store_name}
            </Text>
          </Box>
        </VStack>
      </LinearGradient>
    </Pressable>
  );
});

export const Item2 = React.memo(({ navigation, item }) => {
  const boxH = heights.H / 5 - 15;
  const paddingVertical = 12;
  const paddingHorizontal = 10;
  const imgH = boxH - paddingVertical * 2;
  return (
    <Pressable
      style={{ paddingHorizontal: 15 }}
      shadow={2}
      onPress={() => {
        navigation.navigate("Product", { item });
      }}
    >
      <VStack
        justifyContent="space-between"
        style={{
          paddingHorizontal,
          paddingVertical,
          alignSelf: "center",
          marginBottom: 15,
          width: "100%",
          borderRadius: 20,
          height: heights.H / 4.3,
          backgroundColor: "white",
        }}
        dark={{ borderColor: "gray.600" }}
      >
        <HStack flexDirection="row-reverse">
          <Box
            style={{
              height: imgH,
              width: imgH,
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <Image
              source={checkImage(item.image)}
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
              alt={item.title}
            />
          </Box>
          <VStack pr={3} flex={1}>
            <Text
              style={{ paddingLeft: 38 }}
              numberOfLines={2}
              color="#585858"
              textAlign="right"
              fontFamily={fonts.BOLD}
              fontSize={14}
            >
              {item.title}
            </Text>
            <Text
              textAlign="right"
              flex={1}
              fontSize={11}
              color="#707070"
              fontFamily={fonts.MEDIUM}
            >
              توضیحات کوتاه مربوط به محصول
            </Text>

            <VStack>
              {item.off_price > 0 ? (
                <HStack space={2} flexDir="row-reverse" alignItems="center">
                  <Text
                    textAlign="right"
                    textDecorationLine="line-through"
                    textDecorationStyle="solid"
                    fontFamily={fonts.BOLD}
                    color="red.500"
                    fontSize={15}
                  >
                    {number_format(item.price)}
                  </Text>
                  <Text fontFamily={fonts.BOLD} color="gray.500" fontSize={11}>
                    تومان
                  </Text>
                </HStack>
              ) : null}

              <HStack space={2} flexDir="row-reverse" alignItems="center">
                <Text fontFamily={fonts.BOLD} color="gray.600" fontSize={16}>
                  {item.off_price > 0
                    ? number_format(item.off_price)
                    : number_format(item.price)}
                </Text>
                <Text fontFamily={fonts.BOLD} color="gray.500" fontSize={12}>
                  تومان
                </Text>
              </HStack>
            </VStack>

            {/* {item.off_price>0?(
                    <VStack style={{position:'absolute',left:0,bottom:0,borderRadius:10,overflow:'hidden',backgroundColor:'#2EC12E',width:38,height:38,justifyContent:'center',alignItems:'center'}}>
                      <Text textAlign={'center'} fontFamily={fonts.BOLD} color={'white'} fontSize={14} style={{height:16}}>%{Math.floor(percentageOf(item.price,item.off_price))}</Text>
                      <Text textAlign={'center'} fontFamily={fonts.BOLD} color={'white'} fontSize={8}>تخفیف</Text>
                    </VStack>
                  ):null} */}
          </VStack>
        </HStack>

        <HStack space={3} flexDir="row-reverse">
          <HStack
            space={1}
            justifyContent="space-between"
            flexDir="row-reverse"
            style={{ width: "100%", overflow: "hidden" }}
          >
            <ItemQty
              title="باقیمانده"
              value={`${item.inventory - item.sold} عدد`}
              color={colors.primary}
            />
            <Progress
              bg="coolGray.100"
              _filledTrack={{ bg: "#2EC12E", borderRadius: 8 }}
              fontFamily={fonts.BOLD}
              value={item.sold}
              max={item.inventory}
              style={{ height: 33, flex: 1, borderRadius: 8 }}
            >
              {item.sold}
            </Progress>
            <ItemQty
              title="موجودی"
              value={`${item.inventory} عدد`}
              color="coolGray.100"
            />
          </HStack>
          {/* <VStack flex={1} justifyContent={'center'}>
                <Progress bg="coolGray.100" size="xl" _filledTrack={{bg: '#2EC12E'}} fontFamily={fonts.BOLD} value={item.sold} max={item.inventory}/>
              </VStack> */}
        </HStack>
      </VStack>
    </Pressable>
  );
});

export const Item4 = React.memo(({ item, items, setItems, navigation }) => {
  const [removing, setRemoving] = useState(false);

  const destroy = (id) => {
    setRemoving(true);
    inboxDestroyApi(id).then(({ status, message }) => {
      setRemoving(false);
      if (status == 1) {
        setItems(items.filter((item) => item.id != id));
        ToastAndroid.show(message, ToastAndroid.SHORT);
      }
    });
  };

  return (
    <Box
      mb={2}
      bg={item.status == 1 ? "#fbfbfb" : "white"}
      rounded={10}
      pt={4}
      pb={3}
      px={3}
      overflow="hidden"
    >
      {item.status == 0 && (
        <Box
          position="absolute"
          right={-3}
          top={-3}
          rounded={10}
          w={3}
          h={3}
          bg="rose.500:alpha.80"
        />
      )}
      <VStack>
        <HStack justifyContent="space-between" flexDir="row-reverse">
          <Text
            textAlign="right"
            color="#585858"
            fontFamily={fonts.BOLD}
            numberOfLines={1}
            flex={1}
            fontSize={14}
          >
            {item.title}
          </Text>
          {removing ? (
            <Spinner color="#df031e" />
          ) : (
            <Pressable
              onPress={() => {
                destroy(item.id);
              }}
              left={0}
            >
              <Feather name="trash" size={17} color="#df031e" />
            </Pressable>
          )}
        </HStack>
        <Text
          textAlign="right"
          mt={2}
          mb={4}
          color="#8f8f8f"
          fontFamily={fonts.REGULARE}
          fontSize={12}
        >
          {toJalali(item.created_at, true)}
        </Text>
        <Text
          textAlign="right"
          mb={3}
          color="#7e7f81"
          fontFamily={fonts.REGULARE}
          fontSize={12}
        >
          {item.message}
        </Text>
        <HStack>
          {!is_null(item.product_id) && (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Product", {
                  item: { id: item.product_id },
                });
              }}
            >
              <Text
                textAlign="right"
                color={colors.primary}
                fontFamily={fonts.BOLD}
                fontSize={11}
              >
                برو به محصول
              </Text>
            </TouchableOpacity>
          )}
        </HStack>
      </VStack>
    </Box>
  );
});

export const Item6 = React.memo(({ navigation, item }) => {
  return (
    <Box
      bg="#fff"
      key={item.id}
      px={2}
      py={2}
      flexBasis="49.9%"
      height={width / 1.5}
    >
      <Pressable
        shadow={1}
        onPress={() => {
          navigation.navigate("HomeNavigator", {
            screen: "Profile",
            params: { item },
          });
        }}
        borderRadius={15}
        mb={3}
        overflow="hidden"
        key={item.id}
        bgColor="white"
        w="100%"
        h="100%"
      >
        <VStack flex="1">
          <Box flex={0.6}>
            {item.storeImage != "" && item.storeImage != null ? (
              <Image
                key={item.id}
                alt="logo"
                width="100%"
                height="100%"
                resizeMode="cover"
                source={{ uri: url(item.storeImage) }}
              />
            ) : (
              <VStack
                justifyContent="center"
                alignItems="center"
                mt="5%"
                rounded={15}
                alignSelf="center"
                width="90%"
                height="90%"
                bg="coolGray.100"
              >
                <MaterialIcons name="storefront" size={35} color="gray" />
              </VStack>
            )}
          </Box>
          <Box flex={0.4}>
            <Text
              h={16}
              alignSelf="center"
              p="2"
              fontFamily={fonts.BOLD}
              fontSize="15"
            >
              {item.storeName}
            </Text>
            <HStack space="1" justifyContent="center">
              {storeStars(item.storeRate).map((item, index) => (
                <FontAwesome
                  key={index}
                  name="star"
                  size={18}
                  color={colors.star}
                />
              ))}
            </HStack>
          </Box>
        </VStack>
      </Pressable>
    </Box>
  );
});

export const Item8 = React.memo(({ navigation, item }) => {
  const itemW = width / 2.8;
  return (
    <Pressable
      style={{ marginLeft: 12 }}
      onPress={() => {
        navigation.navigate("Product", { item });
      }}
      overflow="hidden"
      borderRadius="8"
      bgColor="white"
      width={itemW}
      // height={width/2+50}
    >
      <VStack scaleX={-1} style={[Platform.OS == "ios" ? style.iosScaleX : {}]}>
        <Text
          style={{ paddingTop: 4, paddingBottom: 2, paddingHorizontal: 10 }}
          textAlign="right"
          color={colors.primary}
          fontSize={9}
          numberOfLines={1}
          fontFamily={fonts.BOLD}
        >
          شگفت انگیز {appInfo.persianTitle}
        </Text>
        <Image
          key={item.id}
          alt="logo"
          width="100%"
          height={itemW}
          source={checkImage(item.image)}
        />
        <Box pb={2}>
          <Text
            px={1}
            color="#585858"
            style={{ height: 45 }}
            numberOfLines={2}
            w="100%"
            textAlign="center"
            pt={2}
            alignSelf="center"
            fontFamily={fonts.BOLD}
            fontSize="12"
          >
            {item.title}
          </Text>
          <HStack alignItems="center" space="1" justifyContent="center">
            <Text color="light.500" fontSize="9" fontFamily={fonts.BOLD}>
              تومان
            </Text>
            <Text fontSize="16" color="green.600" fontFamily={fonts.BOLD}>
              {number_format(item.off_price > 0 ? item.off_price : item.price)}
            </Text>
          </HStack>
          <Text
            numberOfLines={1}
            textAlign="center"
            fontSize={9}
            w="100%"
            color="#585858"
            fontFamily="IranSans"
          >
            {item.store_name}
          </Text>
        </Box>
      </VStack>
    </Pressable>
  );
});

export const Item9 = React.memo(({ searchText, onHistoryItemClicked }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onHistoryItemClicked(searchText);
      }}
    >
      <HStack
        scaleX={-1}
        pr={3}
        pl={4}
        justifyContent="center"
        alignItems="center"
        space={2}
        flexDir="row-reverse"
        borderWidth={1}
        borderColor="#eee"
        style={[{ height: 35 }, Platform.OS == "ios" ? style.iosScaleX : {}]}
        borderRadius="full"
      >
        <Text
          numberOfLines={2}
          flex={1}
          fontSize={13}
          fontFamily={fonts.REGULARE}
          color={colors.titr}
        >
          {searchText}
        </Text>
        <Feather color="#ababab" size={18} name="chevron-left" />
      </HStack>
    </TouchableOpacity>
  );
});

export default Item;
