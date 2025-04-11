import React from "react";
import ThankYouPage from "../../components/ThankYou/ThankYouPage";
import SEO from "../../components/SEO";
import { Box } from "@chakra-ui/react";
const University = () => {
  return (
    <Box>
      <SEO title="Thank You" />
      <ThankYouPage header="Thanks for Contacting Us." />
    </Box>
  );
};

export default University;
