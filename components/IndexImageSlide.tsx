import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Box, Text, VStack, Center } from "@chakra-ui/react";
import PrimaryButton from "./PrimaryButton";
import styled from "@emotion/styled";
import { ChevronLeft, ChevronRight } from "@emotion-icons/bootstrap";
import React from "react";
import type { Settings } from "react-slick";

// Dynamically import Slider with no SSR
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
}) as any;

// Custom arrow components
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <Box
      w="3.5rem"
      h="3.5rem"
      right="0"
      position="absolute"
      top="50%"
      transform="translateY(-50%)"
      zIndex={1}
      cursor="pointer"
      onClick={onClick}
    >
      <Center w="100%" h="100%">
        <ChevronRight size={24} />
      </Center>
    </Box>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <Box
      w="3.5rem"
      h="3.5rem"
      left="0"
      position="absolute"
      top="50%"
      transform="translateY(-50%)"
      zIndex={1}
      cursor="pointer"
      onClick={onClick}
    >
      <Center w="100%" h="100%">
        <ChevronLeft size={24} />
      </Center>
    </Box>
  );
};

// Styled Box for custom slick styles
const StyledBox = styled(Box)`
  .slick-dots li.slick-active {
    background: rgb(30, 174, 101);
  }
  .slick-dots button {
    opacity: 0.01;
  }
  .slick-dots li {
    display: block;
    float: left;
    border-radius: 50px;
    height: 6px;
    width: 60px;
  }
  .slick-dots {
    margin: auto;
    height: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 280px;
    background: #eee;
    border-radius: 50px;
  }
  .slick-dots li button:before {
    width: 75px;
  }
`;

// Smooth scrolling function with type declaration
const scrollToSection = (hash: string) => {
  const hashElement = document.getElementById(hash);
  if (hashElement) {
    hashElement.scrollIntoView({
      behavior: "smooth",
    });
  }
};

// Slide component interface
interface SlideProps {
  image: any;
  mobileImage?: any;
  header: string;
  body: React.ReactNode;
  button?: React.ReactNode;
}

// Slider props interface
interface IndexSliderProps {
  asNavFor: any;
  sliderFunction: (slider: any) => void;
}

// Slide component
const Slide = (props: SlideProps) => {
  return (
    <Box
      bgImage={
        props.mobileImage
          ? [`url(${props.mobileImage})`, null, null, `url(${props.image})`]
          : `url(${props.image})`
      }
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      h={["330px", null, "450px"]}
      backgroundPosition="inherit"
    >
      <Box
        color="#FFFFFF"
        p={6}
        py={[8, null, 14]}
        h="100%"
        bg="rgba(0,0,0,.6)"
        pl={[6, null, 20]}
      >
        <VStack align="flex-start" spacing={[3, null, 5]} maxW={"750px"}>
          <Text
            fontWeight="600"
            fontSize={["xl", null, "4xl"]}
            letterSpacing={1}
          >

            {props.header}
          </Text>
          <Text
            fontSize={["xs", null, "lg"]}
            fontWeight="300"
            letterSpacing={1}
          >
            {props.body}
          </Text>

          <Box>{props.button}</Box>
        </VStack>
      </Box>
    </Box>
  );
};

// Main IndexSlider component
const IndexSlider = (props: IndexSliderProps) => {
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    if (sliderRef.current && props.sliderFunction) {
      props.sliderFunction(sliderRef.current);
    }
  }, [props.sliderFunction]);

  const settings: Settings = {
    infinite: true,
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <StyledBox>
      <Slider
        {...settings}
        asNavFor={props.asNavFor}
        ref={sliderRef}
      >
        <Slide
          image={require("../public/images/slidercrop.jpeg?webp&width=1000")}
          mobileImage={require("../public/images/slidercrop2.jpeg")}
          header="Zinka - Connecting Colleges to Corporate"
          body="
          First platform in India for management students.
          We work on only one point to make you industry ready.
        "
          button={
            <PrimaryButton
              letterSpacing="1px"
              px={[4, null, 10]}
              py={[2, null, 6]}
              fontSize={["xs", null, "md"]}
              textTransform="uppercase"
              fontWeight="normal"
              mt={[1, null, 6]}
              h="2rem"
              onClick={() => scrollToSection("content")}
            >
              Explore
            </PrimaryButton>
          }
        />

        <Slide
          image={require("../public/images/slider2.jpeg?webp&width=1200")}
          header="Zinka Industry ready Program "
          body={
            <Box fontSize={["xs", null, "md"]}>
              <Text fontWeight="600" fontSize={["md", null, "xl"]} mb={1}>
                Prepare for a specific job role.
              </Text>
              <Text mb={1}>
                You choose your job instead of the job choose you.
              </Text>
              <Text mt={4}>
                Business Analyst | Digital Marketing Executive | Business
                Development Executive| HR Executive | Operations Executive |
                Project Manager | Product Manager | Supply Chain Consultant |
                Sales Management.
              </Text>
            </Box>
          }
          button={
            <PrimaryButton
              letterSpacing="1px"
              px={[4, null, 10]}
              py={[2, null, 6]}
              fontSize={["xs", null, "md"]}
              textTransform="uppercase"
              fontWeight="normal"
              mt={[1, null, 6]}
              h="2rem"
              onClick={() => scrollToSection("crtProgram")}
            >
              Explore
            </PrimaryButton>
          }
        />
        <Slide
          image={require("../public/images/slider5.jpeg?webp&width=1200")}
          header="Zinka Essentials Certification Program"
          body="
          Short courses for your overall instant knowledge with examples and case studies from
          different industries.
        "
          button={
            <PrimaryButton
              letterSpacing="1px"
              px={[4, null, 10]}
              py={[2, null, 6]}
              fontSize={["xs", null, "md"]}
              textTransform="uppercase"
              fontWeight="normal"
              mt={[1, null, 6]}
              h="2rem"
              onClick={() => scrollToSection("coursedetail")}
            >
              Explore
            </PrimaryButton>
          }
        />
        <Slide
          image={require("../public/images/Entrepreneurship.jpeg?webp&width=1200")}
          header="Project Management"
          body="
          Industry recognised 15 hour certificate course to prepare you to be future project
          managers
        "
          button={
            <PrimaryButton
              letterSpacing="1px"
              px={[4, null, 10]}
              py={[2, null, 6]}
              fontSize={["xs", null, "md"]}
              textTransform="uppercase"
              fontWeight="normal"
              mt={[1, null, 6]}
              h="2rem"
              onClick={() => scrollToSection("projectManagement")}
            >
              Explore
            </PrimaryButton>
          }
        />
      </Slider>
    </StyledBox>
  );
};

export default IndexSlider;
