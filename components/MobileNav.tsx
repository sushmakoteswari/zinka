import { Box, Flex, Image, useDisclosure } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";
import MobileDrw from "./MobileMenu";
import PrimaryButton from "./PrimaryButton";
import Link from "next/link";
import { MenuAltLeft } from "@emotion-icons/boxicons-regular";

interface HeaderProps {
  shrinkHeight: boolean;
}

const MobileNavbar = (props: HeaderProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box
      display="flex"
      bg="rgba(255,255,255, 1)"
      sx={{
        backdropFilter: "blur(8px)",
      }}
      alignItems="center"
      justifyContent="space-between"
      boxShadow="0px 3px 6px #00000029"
      pos={props.shrinkHeight ? "fixed" : "static"}
      top="0"
      w="full"
    >
      <Flex alignItems="center">
        <Box cursor="pointer" onClick={onOpen}>
          <MenuAltLeft size="2rem" color="#1EAE65" />
        </Box>
        <MobileDrw open={isOpen} onClose={onClose} />
        <Box maxW="150px" py={2}>
          <Link href="/">
            <Image src={"/images/zinka.png"} alt="Zinka Logo" />
          </Link>
        </Box>
      </Flex>
      <Link href="/contact/enroll">
        <PrimaryButton h="1.7rem" px={3} mr={1} fontSize="xs">
          Enroll now &nbsp;&nbsp;
          <ChevronRightIcon boxSize={4} />
        </PrimaryButton>
      </Link>
    </Box>
  );
};

export default MobileNavbar;
