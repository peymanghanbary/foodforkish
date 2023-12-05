import { SimpleLineIcons } from "@expo/vector-icons";
import { Box, HStack, VStack } from "native-base";
import React, { forwardRef, useState, useImperativeHandle } from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import { getBasketCount } from "../../../components/helpers";
import { fonts } from "../../../styles/style";
import Inputy from "../../partials/inputy";

const MapSearchBox = forwardRef(
  ({ navigation, openCenters, openCities, openStores }, ref) => {
    useImperativeHandle(ref, () => {
      return {
        state,
        setState,
      };
    });

    const { basket } = useSelector((state) => state.basketReducer);

    const [state, setState] = useState({
      cityTitle: "تهران",
    });

    return (
      <VStack bg="white" ref={ref} style={{ paddingVertical: 12 }} width="100%">
        <HStack
          space={2}
          style={{ paddingHorizontal: 10 }}
          width="100%"
          flexDir="row-reverse"
        >
          {/* <Inputy fontSize={13} multiline={false} value={state.cityTitle} onInputPress={openCities} leftElement={<Ionicons style={{marginLeft:5}} name="md-location-outline" size={24} color="black" />} rounded={10} flex={0.25} bg="white" placeholder="شهر"/> */}
          {/* <Pressable flex={0.3} onPress={openCities}>
                <HStack flexDir={'row-reverse'} space={2} style={{height:45,backgroundColor:'white',borderRadius:10,justifyContent:'space-between',alignItems:'center',paddingLeft:8,paddingRight:4}} shadow={2}>
                  <Text flex={1} ellipsizeMode="tail" numberOfLines={1}>{is_null(state.cityTitle)?"شهر":state.cityTitle}</Text>
                  <Ionicons name="md-location-outline" size={22} color="black" />
                </HStack>
              </Pressable> */}
          <Inputy
            h={38}
            pt={9}
            onInputPress={openCenters}
            rounded={10}
            flex={1}
            bg="white"
            placeholder="نام مرکز خرید"
          />
          <Inputy
            h={38}
            pt={9}
            onInputPress={openStores}
            rounded={10}
            flex={1}
            bg="white"
            placeholder="نام فروشگاه"
          />
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 38,
            }}
            onPress={() => {
              navigation.navigate("Basket");
            }}
          >
            {getBasketCount(basket) > 0 && (
              <Box
                zIndex={100}
                position="absolute"
                top={0}
                left={-1}
                borderWidth={1}
                borderColor="white"
                bg="rose.500"
                style={{ width: 17, height: 17 }}
                _text={{
                  color: "white",
                  fontSize: 9,
                  marginTop: 0.5,
                  fontFamily: fonts.BOLD,
                }}
                rounded="full"
                justifyContent="center"
                alignItems="center"
              >
                {getBasketCount(basket)}
              </Box>
            )}
            <SimpleLineIcons name="handbag" size={22} color="#000" />
          </TouchableOpacity>
        </HStack>
      </VStack>
    );
  },
);

export default MapSearchBox;
