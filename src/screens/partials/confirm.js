import { isFunction } from "lodash";
import { AlertDialog, Button } from "native-base";
import React, { useImperativeHandle } from "react";

import { colors, fonts } from "../../styles/style";

const Confirm = React.forwardRef(
  (
    {
      title = "",
      description = "",
      cancelTitle = "خـیـر",
      confirmTitle = "بــلــه",
      onConfirm,
      showTopCloseButton = false,
    },
    ref,
  ) => {
    useImperativeHandle(ref, () => {
      return {
        setIsOpen,
      };
    });

    const [isOpen, setIsOpen] = React.useState(false);

    const onClose = () => setIsOpen(false);

    const cancelRef = React.useRef(null);

    const onYes = () => {
      if (isFunction(onConfirm)) {
        setIsOpen(false);
        onConfirm();
      }
    };
    return (
      <AlertDialog
        ref={ref}
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <AlertDialog.Content>
          {showTopCloseButton && <AlertDialog.CloseButton left={2} />}
          <AlertDialog.Header _text={{ paddingTop: 1 }}>
            {title}
          </AlertDialog.Header>
          <AlertDialog.Body>{description}</AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group
              flexDir="row-reverse"
              justifyContent="flex-end"
              flex={1}
              space={2}
            >
              <Button
                style={{ height: 40, width: 80 }}
                bg={colors.btnRed}
                _text={{ color: "white", fontFamily: fonts.BOLD }}
                colorScheme="danger"
                onPress={onClose}
                ref={cancelRef}
              >
                {cancelTitle}
              </Button>
              <Button
                style={{ height: 40, width: 100 }}
                _text={{ fontFamily: fonts.BOLD }}
                colorScheme="success"
                onPress={onYes}
              >
                {confirmTitle}
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    );
  },
);

export default Confirm;
