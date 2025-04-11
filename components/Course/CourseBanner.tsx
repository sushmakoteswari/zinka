import { Box, Heading, Text, SimpleGrid, Flex, HStack } from "@chakra-ui/react";
import PrimaryButton from "../PrimaryButton";
import { ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";

import Link from "next/link";
import { StarFill } from "@emotion-icons/bootstrap";

interface CourseBannerProps {
  heading: string;
  description: string;
  price: string;
  children: React.ReactNode;
  enrollCount: number;
}
const CourseBanner = (props: CourseBannerProps) => {
  const { heading, description, price, children } = props;
  return (
    <SimpleGrid
      color="#fff"
      bg="#13294B"
      templateColumns={["1fr", null, "2fr 1fr"]}
      maxH={["auto", null, "430px"]}
    >
      <Box maxW="900px" p={[6, null, 10]}>
        <Heading fontSize={["2xl", null, "4xl"]} fontWeight="bold">
          {heading}
        </Heading>
        <Text mt={3}>{price}</Text>
        <Text
          mt={[2, null, 5]}
          fontSize={["sm", null, "lg"]}
          fontWeight="300"
          lineHeight={[1.5, null, 1.8]}
        >
          {description}
        </Text>
        <HStack align="center" spacing={1} my={[2, null, 5]}>
          <StarFill size="1rem" color="#ffd023" />
          <StarFill size="1rem" color="#ffd023" />
          <StarFill size="1rem" color="#ffd023" />
          <StarFill size="1rem" color="#ffd023" />
          <StarFill size="1rem" color="#ffd023" />

          <Text fontSize="sm" fontWeight="300" pl={4}>
            (Fast Filling & {props.enrollCount}Enrolled)
          </Text>
        </HStack>
        <Link href="/contact/enroll">
          <PrimaryButton
            letterSpacing="1px"
            px={[4, null, 10]}
            py={[3, null, 6]}
            fontSize={["xs", null, "md"]}
            textTransform="uppercase"
            fontWeight="normal"
            mt={[1, null, 6]}
            h="2.2rem"
          >
            <Flex alignItems="center">
              <Text>Enroll Now</Text>

              <ChevronRightIcon ml={"10px"} fontSize="1.5rem" />
            </Flex>
          </PrimaryButton>
        </Link>
      </Box>
      <Box display={["none", null, "block"]}>{children}</Box>
    </SimpleGrid>
  );
};

export default CourseBanner;
