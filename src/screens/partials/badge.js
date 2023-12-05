import { isNumber } from "lodash";
import { Box } from "native-base";
import React from "react";

import { fonts } from "../../styles/style";

export const Badge = ({
  number = 0,
  top = "unset",
  right = "unset",
  left = "unset",
  bottom = "unset",
  height = 17,
  width = 17,
  position = "absolute",
}) => {
  const handleLeft = () => {
    if (left != "unset" && left > 0) {
      return { left };
    }
  };
  const handleRight = () => {
    if (right != "unset" && isNumber(right) > 0) {
      return { right };
    }
  };
  const handleTop = () => {
    if (top != "unset" && top > 0) {
      return { top };
    }
  };
  const handleBottom = () => {
    if (bottom != "unset" && bottom > 0) {
      return { bottom };
    }
  };
  return (
    <Box
      style={{
        height,
        width,
        ...handleLeft(),
        ...handleRight(),
        ...handleTop(),
        ...handleBottom(),
      }}
      bg="red.500"
      justifyContent="center"
      alignItems="center"
      position={position}
      _text={{
        color: "white",
        fontSize: 10,
        fontFamily: fonts.BOLD,
        paddingTop: 0.5,
      }}
      rounded="full"
    >
      {number}
    </Box>
  );
};

export default Badge;
