import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { Portal } from "@gorhom/portal";
import { Button, Divider, HStack, Text, VStack } from "native-base";
import React, {
  useCallback,
  useMemo,
  forwardRef,
  memo,
  useState,
  useRef,
  useImperativeHandle,
} from "react";
import { Linking, Platform, View } from "react-native";

import { checkIsTimeBetween } from "../../../components/helpers";
import { colors, fonts } from "../../../styles/style";
import MarkerIcon from "../../../svg/marker.svg";

const CenterDetailsBottomsheet = memo(
  forwardRef(({ navigation, snapPoint = "30" }, ref) => {
    useImperativeHandle(ref, () => {
      return {
        open: btOpen,
        close: btClose,
        setState,
      };
    });

    const btRef = useRef(null);
    const btOpen = useCallback((index = 0) => {
      btRef.current?.snapToIndex(index);
    }, []);
    const btClose = useCallback(() => {
      btRef.current?.close();
    }, []);

    const [state, setState] = useState({
      item: {},
    });

    const sortSnapPoints = useMemo(() => [snapPoint], []);
    const renderBackdrop = useCallback(
      (props) => (
        <BottomSheetBackdrop
          {...props}
          opacity={0.2}
          enableTouchThrough
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      ),
      [],
    );

    const openMap = () => {
      const scheme = Platform.select({
        ios: "maps://0,0?q=",
        android: "geo:0,0?q=",
      });
      const latLng = `${state.item.latitude},${state.item.longitude}`;
      const label = "Custom Label";
      const url = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`,
      });

      Linking.openURL(url);
    };

    const showProducts = () => {
      btClose();
      setTimeout(() => {
        navigation.navigate("products", {
          center_id: state.item.id,
          title: state.item.title,
          latitude: state.item.latitude,
          longitude: state.item.longitude,
        });
      }, 0);
    };

    const checkIsOpen = () => {
      if (state.item?.workingHours) {
        const workingHours = state.item.workingHours
          .replaceAll(" ", "")
          .split("-");
        const isOpen = checkIsTimeBetween(workingHours[0], workingHours[1]);
        if (isOpen) {
          return { text: "باز است", color: colors.primary };
        }
      }
      return { text: "بسته است", color: colors.red };
    };

    return (
      <View ref={ref}>
        <Portal>
          <BottomSheet
            backdropComponent={renderBackdrop}
            enableOverDrag
            enableContentPanningGesture
            enableHandlePanningGesture
            enablePanDownToClose
            //onClose={reset}
            ref={btRef}
            index={-1}
            snapPoints={sortSnapPoints}
          >
            <VStack flex={1} space={2} style={{ paddingHorizontal: 20 }}>
              <HStack space={2} flexDir="row-reverse">
                <Text fontFamily={fonts.BOLD} fontSize={18}>
                  {state.item.title}
                </Text>
              </HStack>
              <HStack space={2} flexDir="row-reverse">
                <Text fontFamily={fonts.BOLD} fontSize={12}>
                  ساعت کاری :{" "}
                </Text>
                <Text
                  fontFamily={fonts.BOLD}
                  fontSize={12}
                  color={checkIsOpen().color}
                >
                  {checkIsOpen().text}
                </Text>
                <Text fontFamily={fonts.BOLD} fontSize={12}>
                  {state.item.workingHours + "  :"}
                </Text>
              </HStack>
              <Divider thickness={0.5} />
              <HStack space={2} flexDir="row-reverse">
                <MarkerIcon
                  width={15}
                  height={54}
                  style={{ marginTop: -10 }}
                  fill={colors.marker}
                />
                <Text
                  style={{ paddingTop: 7 }}
                  flex={1}
                  fontFamily={fonts.MEDIUM}
                  fontSize={14}
                >
                  {state.item.address}
                </Text>
              </HStack>
            </VStack>
            <HStack
              style={{ paddingHorizontal: 20, paddingBottom: 10 }}
              space={2}
              flexDir="row-reverse"
            >
              <Button
                onPress={showProducts}
                style={{ borderRadius: 10 }}
                _text={{ fontFamily: fonts.BOLD, fontSize: 13 }}
                flex={8}
              >
                مشـاهـده محصـولات
              </Button>
              <Button
                onPress={openMap}
                style={{ borderRadius: 10 }}
                _text={{ fontFamily: fonts.BOLD, fontSize: 13 }}
                background="primary.400"
                flex={4}
              >
                مسـیـریـابی
              </Button>
            </HStack>
          </BottomSheet>
        </Portal>
      </View>
    );
  }),
);

export default CenterDetailsBottomsheet;
