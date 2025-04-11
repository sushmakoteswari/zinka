import React from "react";
import { Flex, Box, Heading, Text, Link } from "@chakra-ui/react";
import AnimatedTickmark from "../AnimatedTickmark";
import NextLink from "next/link";
import Layout from "../Layout";

interface ThankYouPageProps {
  header?: string;
}

const ThankYouPage = (props: ThankYouPageProps): JSX.Element => {
  return (
    <Layout>
      <Flex
        minHeight="50vh"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <AnimatedTickmark />
        <Box textAlign="center" mx="auto">
          <Box>
            <Heading size="xl" mb={2}>
              {props.header ?? "Thanks for your submission"}
            </Heading>
            <Text mb={1}>We will get in touch with you shortly</Text>
            <NextLink href="/">
              <Link
                color="#28AE60"
                _hover={{ textDecoration: "underline" }}
                fontWeight="bold"
              >
                Go To Home
              </Link>
            </NextLink>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default ThankYouPage;
