import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import StyledNavLink from "./StyledNavLink";
import { MenuData, MenuItem } from "../data/menu";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Menu from "./Menu";
import StyledLinkDecoration from "./StyledLinkDecoration";
import { useFloatingTop, useSubmenu } from "../hooks";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";

interface HeaderProps {
  shrinkHeight: boolean;
}

const Header = (props: HeaderProps) => {
  const { currentOpenSubMenuIndex, openSubMenu, closeSubMenu } = useSubmenu();

  const renderMenuItem = (item: MenuItem, index: number) => {
    if (item.hasSubMenu === false) {
      return (
        <StyledNavLink
          key={index}
          to={item.href}
          partiallyActive={item.partiallyActive === true}
        >
          {item.title}
        </StyledNavLink>
      );
    }

    return (
      <Flex
        onMouseEnter={() => openSubMenu(index)}
        onMouseLeave={() => closeSubMenu()}
        key={index}
        position="relative"
      >
        <StyledLinkDecoration>
          {item.title}
          <ChevronDownIcon boxSize="1.5rem" color="#1EAE65" />
        </StyledLinkDecoration>

        <Box position="absolute" top="98%" minW="250px" left="0%" zIndex={5}>
          <Menu
            open={currentOpenSubMenuIndex === index}
            links={item.subMenuItems.map((item) => ({
              to: item.href,
              text: item.title,
            }))}
          />
        </Box>
      </Flex>
    );
  };

  return (
    <Box
      position={props.shrinkHeight ? "fixed" : "static"}
      sx={{
        transition: "top 0.3s",
        boxShadow: "0 6px 10px rgba(0,0,0,.08)",
        zIndex: 10,
        background: "rgba(255,255,255, 1)",
        backdropFilter: "blur(8px)",
      }}
      top={0}
      w="full"
      zIndex={100}
    >
      <Flex
        py={3}
        px={4}
        mx="auto"
        align="center"
        justify="space-between"
        maxW="1600px"
      >
        <Box flex="1 1 5%" cursor="pointer">
          <Link href="/">
            <img src={"/images/zinka.png"} alt="Zinka Logo" />
          </Link>
        </Box>
        {MenuData.map(renderMenuItem)}
        <Link href="/contact/enroll">
          <PrimaryButton px={6}>
            Enroll now &nbsp;&nbsp;
            <ChevronRightIcon boxSize={6} />
          </PrimaryButton>
        </Link>
      </Flex>
    </Box>
  );
};
export default Header;
