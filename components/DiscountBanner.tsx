import {
  Box,
  Flex,
  Link,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { CloseSquare } from "@emotion-icons/evaicons-solid";

const DiscountBanner = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      bg="#007DE5"
      color="white"
      px={4}
      transition="height 0.4s"
      height={isOpen ? ["90px", null, "30px"] : "0"}
      overflow="hidden"
      fontSize="sm"
    >
      <CloseSquare size="1.8rem" onClick={onClose} />
      <Wrap
        order={[-1, null, null, 0]}
        flex="1"
        maxW="1000px"
        justify="space-between"
        align="center"
        spacing={1}
      >
        <WrapItem fontSize="md" fontWeight="500">
          2021 Special Discount ! Enroll now and get 20% off on all our courses
        </WrapItem>
        <WrapItem fontWeight="300">
          <Box>
            <NextLink href="/contact/university">
              <Link>Sign up as University</Link>
            </NextLink>{" "}
            <NextLink href="/contact/student">
              <Link>Sign up as student</Link>
            </NextLink>
          </Box>
        </WrapItem>
      </Wrap>
    </Flex>
  );
};

export default DiscountBanner;
