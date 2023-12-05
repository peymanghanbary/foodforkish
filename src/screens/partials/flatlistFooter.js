import { Text, HStack, Spinner } from "native-base";
import React from "react";

import { colors } from "../../styles/style";

const FlatlistFooter = ({ handleFooterOpacity }) => {
  return (
    <HStack
      opacity={handleFooterOpacity}
      pt={2}
      pb={10}
      space={2}
      justifyContent="center"
    >
      <Text fontFamily="IranSansBold" color={colors.primary} fontSize="sm">
        درحال بارگذاری
      </Text>
      <Spinner color={colors.primary} accessibilityLabel="Loading posts" />
    </HStack>
  );
};

export default FlatlistFooter;
