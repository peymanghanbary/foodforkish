import { Text, HStack, Spinner } from "native-base";
import React from "react";

import { colors, fonts } from "../../styles/style";

const Loading = ({ navigation, route }) => {
  return (
    <HStack py={5} space={2} justifyContent="center">
      <Text fontFamily={fonts.BOLD} color={colors.primary} fontSize="sm">
        درحال بارگذاری
      </Text>
      <Spinner color={colors.primary} accessibilityLabel="Loading posts" />
    </HStack>
  );
};

export default Loading;
