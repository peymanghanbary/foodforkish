import { MaterialCommunityIcons } from "@expo/vector-icons";
import { isFunction } from "lodash";
import { Box, HStack, Input, Pressable, Text, VStack } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

import { is_null } from "../../components/helpers";
import { colors, fonts } from "../../styles/style";

const Inputy = ({
  title = "",
  placeholder = "",
  onChangeText,
  actionTitle = "",
  actionTitleOnPress,
  actionElement = null,
  variant = "unstyled",
  fixedPlaceHolder = null,
  rightElement = null,
  leftElement = null,
  pt = 13,
  pb = 13,
  h = 45,
  shadow = 2,
  fontSize = 15,
  w = "auto",
  bg = "transparent",
  px = 15,
  onSubmitEditing,
  multiline = true,
  onInputPress = null,
  value = "",
  flex = 0,
  rounded = 24,
  subtitle = "",
  required = false,
  autoFocus=false,
  ...props
}) => {
  const handleActionTitlePress = () => {
    if (isFunction(actionTitleOnPress)) {
      actionTitleOnPress();
    }
  };
  const handleOnSubmitEditing = () => {
    if (isFunction(onSubmitEditing)) {
      onSubmitEditing();
    }
  };

  const handleRightElement = () => {
    if (!is_null(actionElement)) {
      return actionElement;
    }
    if (!is_null(rightElement)) {
      return rightElement;
    }
    if (required && is_null(value)) {
      const reqSize = 35;
      return (
        <Box
          style={{
            width: reqSize,
            height: reqSize,
            borderRadius: reqSize,
            backgroundColor: colors.rose500,
            position: "absolute",
            right: -reqSize / 1.1,
            opacity: 0.7,
          }}
        />
      );
    }
    return null;
  };

  const handleLeftElement = () => {
    if (!is_null(leftElement)) {
      return leftElement;
    }
    if (!is_null(fixedPlaceHolder)) {
      return (
        <Text
          style={{
            fontFamily: fonts.MEDIUM,
            fontSize: 13,
            paddingLeft: 12,
            paddingRight: 10,
          }}
        >
          {fixedPlaceHolder}
        </Text>
      );
    }
    return null;
  };

  const handleOnChange = (value) => {
    if (isFunction(onChangeText)) {
      onChangeText(value);
    }
  };

  const handleInputPress = () => {
    if (isFunction(onInputPress)) {
      onInputPress();
    }
  };

  const editableHandle = () => {
    if (isFunction(onInputPress)) {
      return false;
    }
    if (props.isDisabled) {
      return false;
    }
    return true;
  };

  return (
    <VStack flex={flex} space={1} width={w}>
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
      <VStack width="100%">
        {isFunction(onInputPress) && (
          <Pressable
            onPress={handleInputPress}
            position="absolute"
            left={0}
            top={0}
            w="100%"
            h="100%"
            zIndex={1}
          />
        )}
        <Input
          _focus={{ backgroundColor: "white" }}
          shadow={shadow}
          value={is_null(value) ? "" : value.toString()}
          editable={editableHandle()}
          multiline={multiline}
          textAlignVertical="top"
          variant={variant}
          leftElement={handleLeftElement()}
          placeholder={placeholder}
          textAlign="right"
          bg={bg}
          autoFocus={autoFocus}
          onChangeText={handleOnChange}
          onSubmitEditing={handleOnSubmitEditing}
          rightElement={handleRightElement()}
          fontSize={fontSize}
          fontFamily={fonts.MEDIUM}
          borderRadius={rounded}
          _disabled={{ opacity: props.isDisabled ? 0.8 : 1 }}
          style={{
            height: h,
            paddingTop: pt,
            paddingLeft: px,
            paddingRight: px,
            paddingBottom: 10,
            width: "100%",
          }}
          {...props}
        />
        {!is_null(subtitle) && (
          <HStack
            space={1}
            style={{ marginLeft: 15, marginTop: 5 }}
            flexDir="row-reverse"
          >
            <MaterialCommunityIcons
              name="arrow-left-bottom"
              size={15}
              color="black"
            />
            <Text
              flex={1}
              style={{ marginTop: 3, paddingLeft: 5 }}
              fontSize={pb}
              fontFamily={fonts.MEDIUM}
              color="primary.500"
            >
              {subtitle}
            </Text>
          </HStack>
        )}
      </VStack>
    </VStack>
  );
};

export default Inputy;
