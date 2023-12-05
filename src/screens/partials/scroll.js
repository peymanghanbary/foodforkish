import { ScrollView } from "native-base";
import React, { forwardRef } from "react";

import { useKeyboardStatus } from "./useKeyboardStatus";
import { colors, paddings } from "../../styles/style";

const Scroll = forwardRef(
  (
    {
      children,
      pt = 0,
      pb = 50,
      px = paddings.screen,
      horizontal = false,
      bg = colors.white,
      style,
    },
    ref,
  ) => {
    const isKeyboardOpen = useKeyboardStatus();

    return (
      <ScrollView
        ref={ref}
        overScrollMode="never"
        horizontal={horizontal}
        bg={bg}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: isKeyboardOpen ? 250 : pb }}
        style={{ paddingHorizontal: px, paddingTop: pt,paddingBottom:pb, ...style }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    );
  },
);

export default Scroll;
