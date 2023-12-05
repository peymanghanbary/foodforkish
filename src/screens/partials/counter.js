import { Feather } from "@expo/vector-icons";
import { isFunction } from "lodash";
import { HStack, Text, VStack } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { is_null } from "../../components/helpers";
import { colors, fonts } from "../../styles/style";

const Counter = ({
  title = "",
  onChangeText,
  actionTitle = "",
  actionTitleOnPress,
  h = 40,
  unitTitle = "نفر",
  value = 1,
}) => {
  const handleActionTitlePress = () => {
    if (isFunction(actionTitleOnPress)) {
      actionTitleOnPress();
    }
  };

  const handleOnChange = (value) => {
    if (isFunction(onChangeText) && value >= 1) {
      onChangeText(value);
    }
  };

  return (
    <VStack space={1}>
      {!is_null(title) && (
        <HStack flexDir="row-reverse" justifyContent="space-between">
          <Text fontSize={13} textAlign="right" fontFamily={fonts.MEDIUM}>
            {title}
          </Text>
          {!is_null(actionTitle) && (
            <TouchableOpacity onPress={handleActionTitlePress}>
              <Text textAlign="right" color={colors.neutral3}>
                {actionTitle}
              </Text>
            </TouchableOpacity>
          )}
        </HStack>
      )}
      <HStack
        overflow="hidden"
        alignItems="center"
        style={{ height: h, borderRadius: 24 }}
      >
        <TouchableOpacity
          onPress={() => {
            handleOnChange(value - 1);
          }}
          style={{ ...style.button }}
        >
          <Feather name="minus" size={26} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#ddd",
            paddingHorizontal: 10,
            height: "100%",
            verticalAlign: "middle",
            backgroundColor: "white",
          }}
          textAlign="center"
          fontFamily={fonts.BOLD}
          flex={1}
        >
          {value} {unitTitle}
        </Text>
        <TouchableOpacity
          onPress={() => {
            handleOnChange(value + 1);
          }}
          style={{ ...style.button }}
        >
          <Feather name="plus" size={26} color="white" />
        </TouchableOpacity>
      </HStack>
    </VStack>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: "100%",
  },
});

export default Counter;
