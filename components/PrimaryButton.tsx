import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { ForwardedRef } from "react";

const StyledButton = styled(Button)`
  & {
    position: relative;
    overflow: hidden;
    transform: perspective(800px) translate3d(0, 0, 0);
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &:active {
    background: #1eae65;
  }
  &:hover {
    transform: perspective(800px) translate3d(0, 0, 43px);
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }
  &:hover:after {
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }
`;

const PrimaryButton = React.forwardRef(
  (props: any, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <StyledButton
        ref={ref}
        _hover={{}}
        bg="#1EAE65"
        boxShadow="0 3px 6px #00000029"
        color="white"
        fontWeight="600"
        {...props}
      >
        {props.children}
      </StyledButton>
    );
  }
);

export default PrimaryButton;
