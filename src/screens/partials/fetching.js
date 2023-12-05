import { Box } from "native-base";
import React from "react";
import { Animated, Dimensions } from "react-native";

import { colors } from "../../styles/style";

const { width } = Dimensions.get("window");
const Fetching = ({ thickness = 1 }) => {
  const animatedValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }),
  ).start();

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width * 2, width],
  });

  return (
    <Box zIndex={10000} position="absolute" left={0} top={0} w={width}>
      <Animated.View style={{ transform: [{ translateX }] }}>
        <Box opacity={0.5} w={width / 2} h={thickness} bg={colors.primary} />
      </Animated.View>
    </Box>
  );
};

export default Fetching;
