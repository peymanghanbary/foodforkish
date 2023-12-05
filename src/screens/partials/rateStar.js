import { AntDesign } from "@expo/vector-icons";
import { HStack } from "native-base";
import React, { forwardRef, useState } from "react";
import { TouchableOpacity } from "react-native";

import { getRateColor, getRateName } from "../../components/helpers";

const RateStar = forwardRef(({ num = 5, onChange }, ref) => {
  const [rate, setRate] = useState(0);

  const setRateHandle = (value) => {
    setRate(value);
    if (typeof onChange == "function") {
      onChange(value);
    }
  };

  return (
    <HStack space={1.5}>
      <TouchableOpacity
        onPress={() => {
          setRateHandle(1);
        }}
      >
        <AntDesign
          name={getRateName(1, rate)}
          color={getRateColor(1, rate)}
          size={28}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setRateHandle(2);
        }}
      >
        <AntDesign
          name={getRateName(2, rate)}
          color={getRateColor(2, rate)}
          size={28}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setRateHandle(3);
        }}
      >
        <AntDesign
          name={getRateName(3, rate)}
          color={getRateColor(3, rate)}
          size={28}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setRateHandle(4);
        }}
      >
        <AntDesign
          name={getRateName(4, rate)}
          color={getRateColor(4, rate)}
          size={28}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setRateHandle(5);
        }}
      >
        <AntDesign
          name={getRateName(5, rate)}
          color={getRateColor(5, rate)}
          size={28}
        />
      </TouchableOpacity>
    </HStack>
  );
});

export default RateStar;
