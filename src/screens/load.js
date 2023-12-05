import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { PortalProvider } from "@gorhom/portal";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import {NativeBaseProvider,StatusBar,VStack} from "native-base";
import React from "react";
import { Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Tabs from "./tabs";
import theme from "../components/theme";
import { colors } from "../styles/style";

const Load = function () {

  const [fontsLoaded] = useFonts({
    IranSans: require("../fonts/IranSans.ttf"),
    IranSansBold: require("../fonts/IranSansBold.ttf"),
    irs: require("../fonts/irs.ttf"),
    irsb: require("../fonts/irsb.ttf"),
    irse: require("../fonts/irse.ttf"),
    irseb: require("../fonts/irseb.ttf"),
    irsl: require("../fonts/irsl.ttf"),
    irsm: require("../fonts/irsm.ttf"),
    irsu: require("../fonts/irsu.ttf"),
    irsbl: require("../fonts/irsbl.ttf"),
  });

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <PortalProvider>
              <VStack
                flex={1}
                bg="white"
                style={[
                  Platform.OS == "ios"
                    ? { paddingTop: 40, paddingBottom: 10 }
                    : {},
                ]}
              >
                {fontsLoaded ? (
                  <Tabs />
                ) : null}
              </VStack>
            </PortalProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Load;
