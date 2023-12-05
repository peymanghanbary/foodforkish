import { Text, HStack, VStack, Image } from "native-base";
import React from "react";

import { calcImageHeight } from "../../components/helpers";
import { colors, fonts, widths } from "../../styles/style";

const LogoHeader = () => {
  return (
    <HStack
      flexDir="row-reverse"
      space={3}
      alignItems="center"
      style={{ marginTop: 0 }}
    >
      <Image
        alt="logo"
        source={require("../../images/logo1.png")}
        style={{
          width: widths.W / 5,
          height: calcImageHeight(192, 192, widths.W / 5),
        }}
      />
      <VStack>
        <Text
          textAlign="right"
          fontSize={18}
          fontFamily={fonts.BOLD}
          color={colors.dark}
        >
          Torus - تورس
        </Text>
        <Text
          textAlign="right"
          fontSize={18}
          fontFamily={fonts.BOLD}
          color={colors.dark}
        >
          در جستجوی تعادل
        </Text>
      </VStack>
    </HStack>
  );
};

export default LogoHeader;
