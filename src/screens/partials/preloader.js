import { Text, HStack, Spinner, Box } from "native-base";
import React from "react";

import { colors, fonts } from "../../styles/style";

const Preloader = () => {
  return (
    <Box h="100%" justifyContent="center" alignItems="center" bg="white">
      <HStack space={2}>
        <Text fontFamily={fonts.BOLD} color={colors.primary} fontSize="sm">
          درحال بارگذاری
        </Text>
        <Spinner color={colors.primary} accessibilityLabel="Loading posts" />
      </HStack>
    </Box>
  );
};

export default Preloader;
