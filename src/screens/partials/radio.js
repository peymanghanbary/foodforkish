import { isFunction } from "lodash";
import { HStack, Text, VStack, Radio as RadioButton } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

import { is_null } from "../../components/helpers";
import { colors, fonts } from "../../styles/style";

const Radio = ({
  title = "",
  onChange,
  actionTitle = "",
  actionTitleOnPress,
  data = [],
  value,
  minHeight = 30,
}) => {
  const handleActionTitlePress = () => {
    if (isFunction(actionTitleOnPress)) {
      actionTitleOnPress();
    }
  };

  const handleOnChange = (selectedValue) => {
    if (isFunction(onChange) && value != selectedValue) onChange(selectedValue);
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

      <RadioButton.Group
        aria-label="radio item group"
        width="100%"
        name="myRadioGroup"
        accessibilityLabel="favorite number"
        value={value}
        colorScheme="emerald"
        onChange={(value) => {
          handleOnChange(value);
        }}
      >
        <VStack space={3}>
          {data.map((item) => {
            return (
              <HStack
                key={item.id}
                style={{ width: "100%", borderRadius: 8, overflow: "hidden" }}
                space={2}
              >
                <TouchableOpacity
                  onPress={() => {
                    handleOnChange(item.id);
                  }}
                  style={{ flex: 1 }}
                >
                  <VStack space={1} flex={1} style={{ paddingTop: 3 }}>
                    {item.title && (
                      <Text fontFamily={fonts.BOLD}>{item.title}</Text>
                    )}
                    {item.description && (
                      <Text fontSize={13}>{item.description}</Text>
                    )}
                  </VStack>
                </TouchableOpacity>
                <RadioButton
                  aria-label="radio item"
                  accessibilityLabel="radio item"
                  value={item.id}
                  my={1}
                />
              </HStack>
            );
          })}
        </VStack>
      </RadioButton.Group>
    </VStack>
  );
};

export default Radio;
