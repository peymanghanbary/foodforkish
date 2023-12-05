import React, { useState, useRef } from "react";
import { Keyboard } from "react-native";

export function useKeyboardStatus() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const keyboardShowListener = useRef(null);
  const keyboardHideListener = useRef(null);

  React.useEffect(() => {
    keyboardShowListener.current = Keyboard.addListener("keyboardDidShow", () =>
      setIsKeyboardOpen(true),
    );
    keyboardHideListener.current = Keyboard.addListener("keyboardDidHide", () =>
      setIsKeyboardOpen(false),
    );

    return () => {
      keyboardShowListener.current.remove();
      keyboardHideListener.current.remove();
    };
  });

  return isKeyboardOpen;
}
