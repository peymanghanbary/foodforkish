import { VStack } from "native-base";
import React from "react";

import { colors } from "../../styles/style";

const Screen = ({ children, pb = 0, pt = 0, px = 0, bg = colors.white }) => {
  return (
    <VStack
      flex={1}
      bg={bg}
      style={{ paddingHorizontal: px, paddingTop: pt, paddingBottom: pb }}
    >
      {children}
    </VStack>
  );
};

export default Screen;
