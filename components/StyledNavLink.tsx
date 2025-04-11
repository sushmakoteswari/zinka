import React from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const StyledLink = styled(Box)`
  display: inline-block;
  &:hover {
    color: #1eae65;
  }
  &.active {
    color: #1eae65;
    border-bottom: 2px solid #1eae65;
    font-weight: bold;
  }
`;

interface StyledNavLinkProps {
  children: React.ReactNode;
  to: string;
  partiallyActive?: boolean;
}

const StyledNavLink = (props: StyledNavLinkProps) => {
  const { children, to } = props;
  const router = useRouter();

  return (
    <Box cursor="pointer" px={6} position="relative">
      <StyledLink
        onClick={() => {
          const [url, hash] = to.split("#");

          if (router.pathname === url) {
            if (hash) {
              const hashElement = document.getElementById(hash);
              if (hashElement) {
                hashElement.scrollIntoView({
                  behavior: "smooth",
                });
              }
              return;
            }

            router.push(to).then(() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            );

            return;
          }

          router.push(to).then(() => window.scrollTo({ top: 0 }));
        }}
      >
        <Box as="span" display="inline-block" py={1}>
          {children}
        </Box>
      </StyledLink>
    </Box>
  );
};

export default StyledNavLink;
