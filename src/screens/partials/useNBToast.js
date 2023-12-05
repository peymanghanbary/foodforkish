import { useToast } from "native-base";
import React from "react";

import { ToastAlert } from "../../components/helpers";

const useNBToast = () => {
  const NBToast = useToast();

  const show = ({
    title = "موفق",
    description = "",
    status = "success",
    variant = "top-accent",
    duration = 4000,
  }) => {
    NBToast.show({
      duration,
      render: ({ id }) => {
        return (
          <ToastAlert
            id={id}
            status={status}
            title={title}
            description={description}
            variant={variant}
            w="95%"
          />
        );
      },
    });
  };

  return {
    show,
  };
};

export default useNBToast;
