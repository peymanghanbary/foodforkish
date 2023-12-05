import { Modal } from "native-base";
import React, { forwardRef, useImperativeHandle, useState } from "react";

import { heights } from "../../styles/style";
import { Keyboard } from "react-native";

const FastModal = forwardRef(({ children, h = heights.H / 4 }, ref) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: openModal,
      close: closeModal,
    };
  });

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <Modal onClose={closeModal} avoidKeyboard isOpen={visible} size="xl">
      <Modal.Content borderRadius={25}>
        <Modal.Body _scrollview={{scrollEnabled:false,showsVerticalScrollIndicator:false}} style={{ height: h,borderRadius:25 }}>{children}</Modal.Body>
      </Modal.Content>
    </Modal>
  );
});

export default FastModal;
