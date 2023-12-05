import { AntDesign } from "@expo/vector-icons";
import { HStack, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

import style, { colors, fonts } from "../../../styles/style";

const SimpleHeader = ({ navigation, title = "" }) => {
  return (
    <HStack
      flexDir="row-reverse"
      style={{ height: 65, marginBottom: 15, paddingHorizontal: 20 }}
      alignItems="center"
    >
      <Text
        textAlign="center"
        flex={1}
        fontSize={18}
        fontFamily={fonts.BOLD}
        style={{ marginRight: 40 }}
      >
        {title}
      </Text>
      <HStack flexDir="row-reverse" space={2}>
        <TouchableOpacity
          style={{ ...style.circleIcon }}
          justifyContent="center"
          alignItems="center"
          onPress={() => {
            navigation.goBack(null);
          }}
        >
          <AntDesign name="arrowleft" size={24} color={colors.dark} />
        </TouchableOpacity>
      </HStack>
    </HStack>
  );
};

export default SimpleHeader;
