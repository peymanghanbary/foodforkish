import { isFunction } from "lodash";
import { Text, VStack } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

import { fonts } from "../../../styles/style";

export const PostActionBottonItem = React.memo(
  ({ title = "", onPress, icon = null,disabled=false }) => {
    const onPressHandle = () => {
      if (isFunction) {
        onPress();
      }
    };

    return (
      <TouchableOpacity onPress={onPressHandle} style={{ height: 50, flex: 1 }}>
        <VStack
          opacity={disabled?0.5:1}
          space={1}
          flex={1}
          style={{ height: 50 }}
          bg="#EFEFEF"
          justifyContent="center"
          alignItems="center"
          borderRadius={10}
          borderWidth={1}
          borderColor="#919191"
        >
          {icon}
          <Text fontFamily={fonts.MEDIUM} fontSize={9}>
            {title}
          </Text>
        </VStack>
      </TouchableOpacity>
    );
  },
);

export default PostActionBottonItem;
