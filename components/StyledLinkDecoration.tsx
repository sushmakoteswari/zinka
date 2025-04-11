import React from "react";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
  display: inline-block;
  &:hover {
    color: #1eae65;
  }
  &.active {
    color: #1eae65;
    border-bottom: 2px solid #2c4bff;
    font-weight: bold;
  }
`;

interface StyledLinkDecorationProps {
  children: React.ReactNode;
}

const StyledLinkDecoration = (props: StyledLinkDecorationProps) => {
  const { children } = props;
  return (
    <Box cursor="pointer" px={4} position="relative">
      <StyledBox>
        <Box as="span" display="inline-block" py={1}>
          {children}
        </Box>
      </StyledBox>
    </Box>
  );
};

export default StyledLinkDecoration;
