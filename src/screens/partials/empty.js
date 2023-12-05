import { Foundation } from "@expo/vector-icons";
import { Text, VStack } from "native-base";
import React from "react";

import { colors, fonts } from "../../styles/style";

const Empty = () => {
  return (
    <VStack justifyContent="center" alignItems="center" flex={1}>
      <Foundation name="database" size={50} color={colors.dark} />
      <Text mt={3} fontSize={14} color={colors.dark} fontFamily={fonts.BOLD}>
        داده ای یافت نشد
      </Text>
    </VStack>
  );
};

export default Empty;
