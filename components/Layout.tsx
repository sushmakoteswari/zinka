import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import { Global, css } from "@emotion/react";
import { Box, Center } from "@chakra-ui/react";
import Footer from "./PageFooter";
import MobileNav from "../components/MobileNav";
import { useRouter } from "next/router";
import { CaretUpFill } from "@emotion-icons/bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface OwnProps {
  children: React.ReactNode;
}

type LayoutProps = OwnProps;

const Layout = (props: LayoutProps) => {
  const [shrinkHeight, setShrinkHeight] = useState(false);

  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onScroll = (e: Event) => {
      if (
        router.pathname.startsWith("/IndustryReadyProgram") ||
        router.pathname.startsWith("/course")
      )
        return;

      if (
        document.body.scrollTop > 90 ||
        document.documentElement.scrollTop > 90
      ) {
        setShrinkHeight(true);
      } else {
        setShrinkHeight(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [router.pathname]); // Added `router.pathname` as a dependency

  return (
    <Box maxW="1800px" mx="auto">
      {/* <DiscountBanner /> */}
      <Box position="relative" zIndex="10">
        <Box display={["block", null, "none"]}>
          <MobileNav shrinkHeight={shrinkHeight} />
        </Box>
        <Box display={["none", null, "block"]}>
          <Navbar shrinkHeight={shrinkHeight} />
        </Box>
      </Box>
      {props.children}

      <Box
        position="fixed"
        bottom="50px"
        right={["10px", null, "20px"]}
        zIndex={10}
        display={
          router.pathname.startsWith("/course") ||
          router.pathname.startsWith("/IndustryReadyProgram") ||
          shrinkHeight
            ? "block"
            : "none"
        }
        w="3rem"
        h="3rem"
        cursor="pointer"
        borderRadius="50%"
        onClick={() => scrollToTop()}
        bg="#1EAE65"
        boxShadow="0 4px 4px rgba(0, 0, 0, 0.25)"
      >
        <Center w="100%" h="100%">
          <CaretUpFill size={"1.5rem"} color="white" />
        </Center>
      </Box>

      <Footer />

      <Global
        styles={css`
          .slick-prev {
            left: -7%;
          }
          .slick-next {
            right: -7%;
          }

          li.slick-active .mentorSliderDot {
            background: #7ab088;
          }
          .slick-prev:before {
            display: none;
          }
          .slick-next:before {
            display: none;
          }
        `}
      />
    </Box>
  );
};

export default Layout;
