import React from "react";
import { Box, Stack, Collapse } from "@chakra-ui/react";
import Link from "next/link";

interface MenuLinkProps {
  children: React.ReactNode;
  to: string;
}

const MenuLink = (props: MenuLinkProps) => {
  const { children, to } = props;
  return (
    <Link href={to}>
      <Box
        cursor="pointer"
        color="#000"
        p={2}
        _hover={{
          color: "#1EAE65",
        }}
      >
        {children}
      </Box>
    </Link>
  );
};

interface LinkInterface {
  text: string;
  to: string;
}

interface MenuProps {
  open: boolean;
  links: LinkInterface[];
}

const Menu = (props: MenuProps) => {
  const { open } = props;

  return (
    <Collapse in={open}>
      <Stack
        transition="all 0.3s"
        opacity={open ? 1 : 0}
        py={2}
        px={3}
        bg="#fff"
        w="200px"
        borderRadius="8px"
        boxShadow="0 0 8px 0 rgba(0, 0, 0, .08)"
      >
        {props.links.map((link, index) => (
          <MenuLink key={index} to={link.to}>
            {link.text}
          </MenuLink>
        ))}
      </Stack>
    </Collapse>
  );
};

export default Menu;
