import { theme } from "@chakra-ui/react";

export default {
  ...theme,
  fonts: {
    body: "Poppins",
    heading: "Open Sans",
  },
  colors: {
    ...theme.colors,
    secondaryText: "#707070",
  },
  sizes: {
    ...theme.sizes,
    mw: "1300px",
  },
};
