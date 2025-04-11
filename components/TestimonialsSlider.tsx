import { Box, Heading, Image, Text, Divider, Center } from "@chakra-ui/react";

import Slider from "react-slick";
import styled from "@emotion/styled";
import { ChevronRight, ChevronLeft } from "@emotion-icons/bootstrap";
import Img from "react-optimized-image";
import { Zoom } from "react-awesome-reveal";

//images
import Staff1 from "../public/images/testimonial_2.png";
import Staff2 from "../public/images/testimonial_5.png";
import Staff3 from "../public/images/testimonial_4.png";
import Staff4 from "../public/images/testimonial_5.png";
import Staff5 from "../public/images/testimonial_3.png";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  nextArrow: (
    <Box right="0">
      <ChevronRight className="leftArrow" size="2.2rem" color="#1FAE65" />
    </Box>
  ),
  prevArrow: (
    <Box>
      <ChevronLeft className="rightArrow" size="2.2rem" color="#1FAE65" />
    </Box>
  ),
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
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
      },
    },
  ],
};

interface CoursesProps {
  // image: React.ReactNode;
  name: string;
  designation: string;
  place: string;
  detail: string;
}

const CourseDetail = (props: CoursesProps) => {
  return (
    <Zoom triggerOnce duration={500}>
      <Box maxW="250px" mx={["auto", 3]} textAlign="center" mt={[5, null, 20]}>
        {/* {props.image} */}
        <Box my={5}>
          <Heading
            fontSize="2xl"
            fontWeight="500"
            color="#170676"
            textAlign="center"
          >
            {props.name}
          </Heading>
          <Text
            fontWeight="600"
            maxW="300px"
            m="auto"
            mt={2}
            letterSpacing={1}
            fontSize={"md"}
          >
            {props.designation}
          </Text>
          <Text mt={1} fontSize={"sm"} pb={2} letterSpacing={1}>
            {props.place}
          </Text>

          <Divider
            borderColor="#7d59f3"
            borderWidth="2px"
            width="100px"
            mx="auto"
          />
        </Box>
        <Text color="secondaryText" fontSize="xl">
          "{props.detail}"
        </Text>
      </Box>
    </Zoom>
  );
};
const Testimonial = () => {
  return (
    <Box mt={20} px={10}>
      <Heading
        textAlign="center"
        color="#384957"
        fontWeight="bold"
        fontSize="4xl"
      >
        Testimonials
      </Heading>
      <Box maxW="900px" m="auto">
        <Slider {...settings}>
          <CourseDetail
            // image={
            //   <Img
            //     src={Staff1}
            //     sizes={[250]}
            //     webp
            //     alt={"staff"}
            //     style={{
            //       objectFit: "cover",
            //       margin: "auto",
            //       borderRadius: "50%",
            //       height: "170px",
            //       width: "170px",
            //     }}
            //   />
            // }
            name="Jayasree Tadela
            "
            designation=""
            place=""
            detail="It’s a useful learning you gain here"
          />

          <CourseDetail
            // image={
            //   <Img
            //     src={Staff2}
            //     sizes={[300]}
            //     webp
            //     alt={"staff"}
            //     style={{
            //       objectFit: "cover",
            //       margin: "auto",
            //       borderRadius: "50%",
            //       height: "170px",
            //       width: "170px",
            //     }}
            //   />
            // }
            name="Supriya Nandamuri"
            designation=""
            place=""
            detail="Valuable information and flexible time to complete the course"
          />

          <CourseDetail
            // image={
            //   <Img
            //     src={Staff3}
            //     sizes={[250]}
            //     webp
            //     alt={"staff"}
            //     style={{
            //       objectFit: "cover",
            //       margin: "auto",
            //       borderRadius: "50%",
            //       height: "170px",
            //       width: "170px",
            //     }}
            //   />
            // }
            name="Sujani Velugu"
            designation=""
            place=""
            detail="I love this course since it’s only for few hours and easy to learn"
          />

          <CourseDetail
            // image={
            //   <Img
            //     src={Staff4}
            //     sizes={[250]}
            //     webp
            //     alt={"staff"}
            //     style={{
            //       objectFit: "cover",
            //       margin: "auto",
            //       borderRadius: "50%",
            //       height: "170px",
            //       width: "170px",
            //     }}
            //   />
            // }
            name="Jhansi Satya"
            designation=""
            place=""
            detail="Important to have this knowledge and the program has interesting subject"
          />

          <CourseDetail
            // image={
            //   <Img
            //     src={Staff5}
            //     sizes={[300]}
            //     webp
            //     alt={"staff"}
            //     style={{
            //       objectFit: "cover",
            //       margin: "auto",
            //       borderRadius: "50%",
            //       height: "170px",
            //       width: "170px",
            //     }}
            //   />
            // }
            name="Radha Narla
            "
            designation=""
            place=""
            detail="Short course in short time with a certificate"
          />

          <CourseDetail
            // image={
            //   <Img
            //     src={Staff1}
            //     sizes={[250]}
            //     webp
            //     alt={"staff"}
            //     style={{
            //       objectFit: "cover",
            //       margin: "auto",
            //       borderRadius: "50%",
            //       height: "170px",
            //       width: "170px",
            //     }}
            //   />
            // }
            name="Vishal Reddy"
            designation=""
            place=""
            detail="Short and simple course which provides good knowledge in the subject. Very much needed"
          />
        </Slider>
      </Box>
    </Box>
  );
};

export default Testimonial;
