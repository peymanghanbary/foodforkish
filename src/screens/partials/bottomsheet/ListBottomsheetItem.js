import { Avatar, HStack, Text, VStack } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

import { is_null, url } from "../../../components/helpers";
import { fonts } from "../../../styles/style";

const ListBottomsheetItem = ({ item, handleItemPress, enabled = true }) => {
  const handleOnPress = () => {
    if (enabled) {
      handleItemPress(item);
    }
  };
  return (
    <TouchableOpacity
      onPress={() => {
        handleOnPress();
      }}
    >
      <VStack
        opacity={enabled ? 1 : 0.5}
        space={2}
        style={{ paddingVertical: 15 }}
        borderBottomColor="#eee"
        borderBottomWidth={1}
      >
        <HStack space={3} flexDir="row-reverse" alignItems="center">
          {!is_null(item.avatar) && (
            <Avatar
              source={{ uri: url(item.avatar) }}
              style={{ width: 50, height: 50 }}
            />
          )}
          <VStack flex={1}>
            <Text fontFamily={fonts.BOLD} fontSize={16} textAlign="right">
              {item.title}
            </Text>
            {!is_null(item.subtitle) && (
              <Text textAlign="right" fontSize={12}>
                {item.subtitle}
              </Text>
            )}
          </VStack>
        </HStack>
      </VStack>
    </TouchableOpacity>
  );
};

export default ListBottomsheetItem;
