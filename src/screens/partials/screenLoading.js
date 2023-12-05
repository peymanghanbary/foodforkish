import { Image, Text, VStack } from "native-base";
import React from "react";

import { calcImageHeight } from "../../components/helpers";
import { fonts } from "../../styles/style";

const ScreenLoading = function ScreenLoading() {
  return (
    <VStack
      space={4}
      flex={1}
      bg="white"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        alt="preloader"
        style={{
          width: 70,
          height: calcImageHeight(256, 199, 70),
          marginTop: -60,
        }}
        source={require("../../images/preloaders/torus-preloader.gif")}
      />
      <Text fontSize={13} fontFamily={fonts.BOLD}>
        در حال بارگذاری ...
      </Text>
      {/* <Lottie style={{width:width/2}} autoPlay={true} source={require('../../lottie/loading1.json')} /> */}
    </VStack>
  );
};

export default ScreenLoading;
