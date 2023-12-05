import { MaterialIcons } from "@expo/vector-icons";
import { Spinner } from "native-base";
import React, { forwardRef, useState } from "react";
import { TouchableOpacity } from "react-native";

import style, { colors } from "../../../styles/style";

const CurrentLocation = forwardRef(({ getCurrentLocation }, ref) => {
  const [state, setState] = useState({
    fetching: false,
  });

  const getMyLocation = (zoom) => {
    setState((s) => ({ ...s, fetching: true }));
    setTimeout(() => {
      setState((s) => ({ ...s, fetching: false }));
    }, 10000);
    getCurrentLocation(zoom).then(() => {
      setState((s) => ({ ...s, fetching: false }));
    });
  };

  return (
    <TouchableOpacity
      onPress={() => {
        getMyLocation(14);
      }}
      style={{
        ...style.shadow,
        position: "absolute",
        bottom: 10,
        right: 10,
        width: 35,
        height: 35,
        borderRadius: 35,
        backgroundColor: "white",
        zIndex: 1000,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {state.fetching ? (
        <Spinner />
      ) : (
        <MaterialIcons name="my-location" size={24} color={colors.gray} />
      )}
    </TouchableOpacity>
  );
});

export default CurrentLocation;
