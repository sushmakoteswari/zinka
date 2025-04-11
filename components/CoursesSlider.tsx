import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import PrimaryButton from "./PrimaryButton";
import { ArrowRight, ArrowLeft } from "@emotion-icons/bootstrap";
import Link from "next/link";
import { Bounce, Zoom } from "react-awesome-reveal";
import styled from "@emotion/styled";
//images
import business from "../public/images/businessanalytics.jpeg";
import digitalmarketing from "../public/images/digitalmarketing.jpeg";
import humanresource from "../public/images/humanresource.jpeg";
import staticmanagement from "../public/images/staticmanagement.jpeg";
import entrepreneurship from "../public/images/Entrepreneurship.jpeg";
import finance from "../public/images/finance.jpeg";
import projectmanagement from "../public/images/slider4.png";

const StyledBox = styled(Box)`
  .labelContainer:hover > .imageContainer {
    transition: 0.5s;
    transform: scale(1.03);
  }
`;

interface CoursesProps {
  image: string;
  courseName: string;
  duration: string;
  detail: string;
  link: string;
}

const CourseDetail = (props: CoursesProps) => {
  return (
    <StyledBox maxW={"250px"} id="coursedetail" mx={[1, "auto"]} my={4}>
      <Link href={props.link}>
        <Box
          boxShadow="0px 3px 6px #00000029"
          borderRadius="1em"
          cursor="pointer"
          className="labelContainer"
        >
          <Box className="imageContainer" position="relative" height="210px">
            <img
              src={props.image}
              alt={props.courseName}
              style={{
                width: '100%',
                height: '100%',
                objectFit: "cover",
                borderRadius: "1em 1em 0 0"
              }}
            />
          </Box>
          <Box p={4}>
            <Heading fontSize="xl" mb={2}>
              {props.courseName}
            </Heading>
            <Text fontSize="sm" color="gray.500" mb={2}>
              Duration: {props.duration}
            </Text>
            <Text fontSize="sm" mb={4}>
              {props.detail}
            </Text>
            <PrimaryButton
              rightIcon={<ChevronRightIcon />}
              variant="outline"
              size="sm"
            >
              Learn More
            </PrimaryButton>
          </Box>
        </Box>
      </Link>
    </StyledBox>
  );
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: (
    <Box
      bg="#fff"
      w="3.5rem"
      h="3.5rem"
      boxShadow="0 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="50%"
    >
      <Center w="100%" h="100%">
        <ArrowRight
          className="rightArrow"
          size="1.6rem"
          color="#1FAE65"
        />
      </Center>
    </Box>
  ),
  prevArrow: (
    <Box
      bg="#fff"
      w="3.5rem"
      h="3.5rem"
      boxShadow="0 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="50%"
    >
      <Center w="100%" h="100%">
        <ArrowLeft
          className="rightArrow"
          size="1.6rem"
          color="#1FAE65"
        />
      </Center>
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
        centerMode: true,
        centerPadding: "40px",
        infinite: false,
      },
    },
  ],
};

const CoursesSlider = () => {
  return (
    <Box pt={32} bg="#fffff" id="coursedetail">
      <Heading
        color="#384957"
        textAlign="center"
        fontFamily="Poppins"
        fontWeight="bold"
        mb={8}
        fontSize={["2xl", null, "5xl"]}
        px={3}
      >
        Zinka Essentials Certification Program
      </Heading>

      <Zoom triggerOnce duration={500}>
        <Box w={["100%", "90vw"]} maxW="1100px" m="auto">
          <Text
            fontSize={["md", null, "xl"]}
            color="#384957"
            textAlign="center"
            fontFamily="Poppins"
            mb={3}
            px={4}
          >
            "Zinka gives you all in-demand skills required in the form of
            <br />
            courses which make your placements easier."
          </Text>
          <Slider {...settings}>
            <CourseDetail
              image="/images/businessanalytics.jpeg"
              courseName="Business Analytics"
              duration="5 hours"
              detail="Data Scientist | Business Analyst | Quantitative Analyst | Market Research"
              link="/course/business_analytics"
            />
            <CourseDetail
              image="/images/digitalmarketing.jpeg"
              courseName="Digital Marketing"
              duration="5 Hours"
              detail="Digital Marketing Manager | SEO Executive | Social Media Marketing Expert | Content Marketing Manager"
              link="/course/digital_marketing"
            />
            <CourseDetail
              image="/images/humanresource.jpeg"
              courseName="Human Resource Management"
              duration="5 Hours"
              detail="HR Manager | HR Analyst | IT Recruiter | HR Consulting"
              link="/course/human_resource_management"
            />
            <CourseDetail
              image="/images/staticmanagement.jpeg"
              courseName="Strategic Management"
              duration="5 Hours"
              detail="Entrepreneur | Designer | Analyst | Top Management Roles"
              link="/course/strategic_management"
            />
            <CourseDetail
              image="/images/Entrepreneurship.jpeg"
              courseName="Entrepreneurship"
              duration="5 Hours"
              detail="Entrepreneur | Business Owner | Start-up Founder | Business Consultant"
              link="/course/entrepreneurship"
            />
            <CourseDetail
              image="/images/finance.jpeg"
              courseName="Finance"
              duration="5 Hours"
              detail="Financial Analyst | Investment Banker | Risk Manager | Financial Consultant"
              link="/course/finance"
            />
            <CourseDetail
              image="/images/slider4.png"
              courseName="Project Management"
              duration="5 Hours"
              detail="Project Manager | Program Manager | Project Coordinator | Project Consultant"
              link="/course/project_management"
            />
          </Slider>
        </Box>
      </Zoom>
    </Box>
  );
};

export default CoursesSlider;
