import MapboxGL from "@rnmapbox/maps";
import { Image, Text, VStack } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

import { calcImageHeight } from "../../../components/helpers";
import { colors, fonts } from "../../../styles/style";

const Markerview = ({ item, centerDetailsBt }) => {
  const onMarkerPress = () => {
    centerDetailsBt.current?.setState((s) => ({ ...s, item }));
    centerDetailsBt.current?.open();
  };

  const titleH = 20;
  const extraH = 5;
  const markerW = 55;
  const markerH = calcImageHeight(126, 147, markerW);
  const markerContainerH = (markerH + titleH) * 2 + extraH;

  return (
    <MapboxGL.MarkerView
      id="markerView"
      allowOverlap
      coordinate={[item.longitude, item.latitude]}
    >
      <VStack style={{ height: markerContainerH }}>
        <TouchableOpacity
          onPress={onMarkerPress}
          style={{
            backgroundColor: "transparent",
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              borderWidth: 1,
              zIndex: 1,
              fontSize: 10,
              fontFamily: fonts.MEDIUM,
              textAlign: "center",
              height: titleH,
              backgroundColor: colors.dark,
              color: colors.white,
              paddingHorizontal: 5,
              borderRadius: 8,
            }}
          >
            {item.title}
          </Text>
          {item.productsCount == 0 ? (
            <Image
              alt="marker"
              source={require("../../../images/markercenter-o1.png")}
              style={{ width: 55, height: markerH }}
            />
          ) : (
            <Image
              alt="marker"
              source={require("../../../images/markercenter1.png")}
              style={{ width: 55, height: markerH }}
            />
          )}
        </TouchableOpacity>
      </VStack>

      {/* <MapboxGL.Callout
    // containerStyle={{borderRadius:16}}
    contentStyle={{borderWidth:0,borderRadius:8}}
    // tipStyle={{borderWidth:0,borderRadius:50}}
    textStyle={{color:colors.dark,fontFamily:fonts.MEDIUM}}
    title={"پاساژ کوکاکولا"}
    containterStyle={{ flex: 1, background: '#fff' }}
    /> */}
    </MapboxGL.MarkerView>
  );
};

export default Markerview;
