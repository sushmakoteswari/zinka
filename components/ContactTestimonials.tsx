import { Box, Heading, Text, Stack, Center } from "@chakra-ui/react";
import { ArrowRight, ArrowLeft } from "@emotion-icons/bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
  .slick-dots {
    margin-bottom: -20px;
    z-index: -2;
  }
`;

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: (
    <Center right="15px" bottom="-15%" top="unset">
      <ArrowRight className="rightArrow" size="2rem" color="#384957" />
    </Center>
  ),
  prevArrow: (
    <Center left="5px" bottom="-15%" top="unset">
      <ArrowLeft className="rightArrow" size="2rem" color="#384957" />
    </Center>
  ),
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: "35px",
      },
    },
  ],
};

interface SliderItemProps {
  image: React.ReactNode;
  head: string;
  body: React.ReactNode;
}

const ContactTestimonials = () => {
  return (
    <Box maxW={["320px", null, "600px"]} mx="auto">
      <Heading
        fontWeight="bold"
        fontSize={["2xl", null, "4xl"]}
        color="#384957"
        mb={[8, null, 20]}
        px={[5, null, 0]}
      >
        Our Programs which lead you to success
      </Heading>

      <StyledBox
        shadow={["none", null, "0px 3px 10px #00000029"]}
        border={["none", null, "1px solid #7070702C"]}
        borderRadius={["none", null, "8px"]}
      >
        <Slider {...sliderSettings}>
          <SliderItem
            image={
              <img
                src="/images/student_ind_4.png" // Path relative to the public folder
                alt="Student1"
                style={{ height: "280px", minWidth: "200px", width: "auto" }}
              />
            }
            head="Zinka - Connecting Colleges to Corporate"
            body="First platform in India for management students. We work on only one point To make you industry ready"
          />
          <SliderItem
            image={
              <img
                src="/images/student_ind_3.png" // Path relative to the public folder
                alt="Student2"
                style={{ minWidth: "200px", height: "280px", width: "auto" }}
              />
            }
            head="Zinka Industry ready Program"
            body={
              <Box>
                <Text fontWeight="600" mb={1}>
                  Prepare for a specific job role.
                </Text>
                <Text mb={1}>
                  You choose your job instead of the job choose you.
                </Text>
                Business Analyst | Digital Marketing Executive | Business Development Executive
              </Box>
            }
          />
          <SliderItem
            image={
              <img
                src="/images/student_ind_2.png" // Path relative to the public folder
                alt="Student3"
                style={{ height: "280px", minWidth: "200px", width: "auto" }}
              />
            }
            head="Zinka Essentials Certification Program"
            body="
            Short courses for your overall instant knowledge with examples and case studies from
            different industries.
          "
          />
          <SliderItem
            image={
              <img
                src="/images/student_ind_1.png" // Path relative to the public folder
                alt="Student4"
                style={{ height: "280px", minWidth: "200px", width: "auto" }}
              />
            }
            head="Project Management"
            body="
            Industry recognised 15 hour certificate course to prepare you to be future project
            managers "
          />
        </Slider>
      </StyledBox>
    </Box>
  );
};

const SliderItem = (props: SliderItemProps) => {
  const { image, head, body } = props;
  return (
    <Stack
      direction={["column", null, "row"]}
      border={["1px solid #7070702C", null, "none"]}
      borderRadius={["8px", null, "none"]}
      boxShadow={["0px 3px 10px #00000029", null, "none"]}
      spacing={6}
      px={[4, null, 0]}
      pt={[2, null, 0]}
      minH={["494px", null, "auto"]}
      mx={[2, null, 0]}
    >
      {image}

      <Box px={3} py={[3, null, 7]}>
        <Heading fontWeight="bold" fontSize={["md", "2xl"]}>
          {head}
        </Heading>
        <Text color="#555" mt={[2, 5]} fontSize={["xs", "sm"]}>
          {body}
        </Text>
      </Box>
    </Stack>
  );
};

export default ContactTestimonials;
