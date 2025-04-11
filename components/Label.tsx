import React from "react";
import { Box, Text, Link, Heading } from "@chakra-ui/react";
import { Slide, Zoom } from "react-awesome-reveal";
import Img from "react-optimized-image";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
//images
import Succeed from "../public/images/labelStudent.jpeg";
import Learn from "../public/images/student_ind_3.png";
import Interact from "../public/images/student_ind_2.png";
import Slider from "react-slick";

interface LabelProps {
  image: React.ReactNode;
  position: string;
  theme: string;
  comment: string;
  color: string;
}

const Label = (props: LabelProps) => {
  return (
    <Box
      textAlign="center"
      mt={[14, null, 28]}
      width={["100%", null, "400px"]}
      px={5}
    >
      <Box>
        <Box maxW="250px" mx="auto">
          {props.image}
        </Box>
        <Heading color={props.color} fontSize={["md", null, "xl"]} mt={10}>
          {props.position}
        </Heading>
        <Zoom triggerOnce duration={500}>
          <Heading
            fontFamily="Poppins"
            color="#384957"
            fontWeight="bold"
            fontSize={["lg", null, "2xl"]}
            mt={3}
            letterSpacing={"1px"}
          >
            {props.theme}
          </Heading>
          <Text
            color="secondaryText"
            mt={5}
            letterSpacing={["0", null, "1px"]}
            fontSize={"md"}
          >
            {props.comment}
          </Text>
        </Zoom>
      </Box>
      <Heading
        my={5}
        fontSize={["sm", null, "md"]}
        color="#28AE60"
        textTransform="uppercase"
      >
        <NextLink href="/IndustryReadyProgram">
          <Link fontSize="sm">
            Learn More
            <ChevronRightIcon />
          </Link>
        </NextLink>
      </Heading>
    </Box>
  );
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        centerMode: true,
        infinite: false,
      },
    },
  ],
};

const LabelPanel = () => {
  return (
    <Box position="relative" maxW="1300px" m="auto">
      <Slider {...settings}>
        <Slide triggerOnce duration={500} direction="left">
          <Label
            image={
              <img
                src='images/labelStudent.jpeg'
                
               
                style={{
                  textAlign: "center",
                  minHeight: "377px",
                  objectFit: "cover",
                  margin: "auto",
                  boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "20px",
                }}
                alt={"Target"}
              />
            }
            position="TARGET"
            theme="Industry Curriculum "
            comment="Every student has a dream job. Land your dream job through Zinka industry curriculum. Design
          your future in your way.
          "
            color="#FD5E15"
          />
        </Slide>
        <Slide triggerOnce duration={500} direction="up">
          <Label
            image={
              <img
                src='images/student_ind_3.png'
               
                style={{
                  minHeight: "377px",
                  textAlign: "center",
                  margin: "auto",

                  boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
                alt={"Plan"}
              />
            }
            position="PLAN"
            theme="Learning that fits to Student Schedule"
            comment="You are free to learn whenever you want, from wherever you want with our flexible schedule
          "
            color="#4485DF"
          />
        </Slide>
        <Slide triggerOnce duration={500} direction="right">
          <Label
            image={
              <img
                src='images/student_ind_2.png'
               
                
                style={{
                  textAlign: "center",
                  margin: "auto",

                  boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "20px",
                  minHeight: "377px",
                  objectFit: "cover",
                }}
                alt={"Achieve"}
              />
            }
            position="ACHIEVE"
            theme="Preparatory Material & Tests"
            comment="We have number of tests in specific job role, aptitude, communication and mock interviews"
            color="#4D53B1"
          />
        </Slide>
      </Slider>

      <Box
        position="absolute"
        top="0"
        left="0"
        h="100%"
        right="0"
        zIndex={-1}
        display={["none", null, null, null, "block"]}
      >
        <Box
          h="35px"
          w="35px"
          bg="#1AC2D8"
          transform="rotate(45deg)"
          pos="absolute"
          bottom="5%"
          left="40%"
        />
        <Box
          h="15px"
          w="15px"
          borderRadius="100%"
          bg="#f48b48"
          bottom="0%"
          left="50%"
          pos="absolute"
        />
        <Box
          w="0"
          h="0"
          borderLeft="20px solid transparent"
          borderRight="20px solid transparent"
          borderBottom="20px solid #f48b48"
          pos="absolute"
          borderRadius="10px"
          transform="rotate(-30deg)"
          bottom="5%"
          left="90%"
        />
      </Box>
    </Box>
  );
};
export default LabelPanel;
