import { Box, SimpleGrid, Flex, Text, Center } from "@chakra-ui/react";
import Slider from "react-slick";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";
import PrimaryButton from "../components/PrimaryButton";
import { Flip, Bounce } from "react-awesome-reveal";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Check } from "@emotion-icons/boxicons-regular";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "@emotion-icons/bootstrap";

const settings = {
  infinite: true,
  speed: 500,
  autoplay: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: (
    <Center right="-10px" bottom="10px" top="unset" zIndex={10}>
      <ArrowRight className="leftArrow" size="2rem" color="#1EAE65" />
    </Center>
  ),
  prevArrow: (
    <Center top="unset" left="-20px" bottom="10px" zIndex={10}>
      <ArrowLeft className="rightArrow" size="2rem" color="#1EAE65" />
    </Center>
  ),
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: false,
      },
    },
  ],
  customPaging: (i: number) => (
    <Center w="1.1rem" h="1.1rem" border="2px solid #7ab088" borderRadius="100%">
      <Box w="0.5rem" h="0.5rem" borderRadius="100%" className="mentorSliderDot" />
    </Center>
  ),
  appendDots: (dots: React.ReactNode) => (
    <Box
      sx={{
        borderRadius: "10px",
        padding: "10px",
        position: "absolute",
        bottom: "0",
        height: "50px",
      }}
    >
      <ul>{dots}</ul>
    </Box>
  ),
};

interface SlideProps {
  header: string;
  body: string[];
}

const Slide = (props: SlideProps) => {
  const { header, body } = props;
  return (
    <SimpleGrid
      minHeight={"100px"}
      gridTemplateColumns={["1fr", null, ".7fr 1fr"]}
      columns={[1, null, 2]}
      alignItems="center"
      py={8}
      spacing={8}
      pb={10}
    >
      <Box textAlign="center" fontSize={"xl"} color="#384957">
        {header}
        <br />
        <Link href="/contact/enroll">
          <PrimaryButton mt={5} py={5} pr={1}>
            <Flex alignItems="center">
              <Text>Enroll Now</Text>
              <ChevronRightIcon ml={"10px"} fontSize="1.5rem" />
            </Flex>
          </PrimaryButton>
        </Link>
      </Box>

      <Box color="#717171" fontSize={"md"} p={4}>
        {body.map((detail, index) => (
          <Flex alignItems={"start"} key={index} mb={2}>
            <Box>
              <Check size={"1.5rem"} style={{ height: "100%" }} color="#7ab088" />
            </Box>
            <Text ml={3}>{detail}</Text>
          </Flex>
        ))}
      </Box>
    </SimpleGrid>
  );
};

interface CountNumberProps {
  count: number;
}

const CountNumber = (props: CountNumberProps) => {
  return (
    <CountUp end={props.count} duration={2}>
      {({ countUpRef, start }) => (
        <Text fontSize="4xl" fontWeight="bold">
          <span ref={countUpRef} />
          <Waypoint onEnter={start} />
        </Text>
      )}
    </CountUp>
  );
};

const IndexMentorContent = () => {
  return (
    <Box
      p={4}
      bgImage={[
        "unset",
        null,
        null,
        "url(/images/index_mentor_bg.png)",
      ]}
      bgColor={["#111b41", null, null, "white"]}
      mt={3}
      bgSize="cover"
      bgRepeat="no-repeat"
      pos="relative"
    >
      <Flex
        justifyContent="space-evenly"
        alignItems={["flex-end", null, "center"]}
        wrap="wrap"
        textAlign={["center", null, "left"]}
      >
        <Box mt={[5, null, null, null, "180px"]}>
          <img
            src="/images/IndexMentor2.jpeg"
            alt="Mentor"
            style={{
              width: '500px',
              height: '300px',
              objectFit: "cover",
              borderRadius: "10px"
            }}
          />
        </Box>
        <Box color="#FFFFFF" mt={[5, null, null, null, "300px"]}>
          <Bounce triggerOnce>
            <Box fontSize={["3xl", "4xl"]} fontWeight="bold">
              <Text> Mentoring makes Zinka</Text>
              <Text>even more special</Text>
            </Box>
          </Bounce>
          <Text fontSize="lg" mt={10}>
            Get mentored by industry experts who have experience
            <br />
            in the same job role that you want to join
          </Text>
          <SimpleGrid my={[8, null, 12, 16]} spacing={8} columns={[1, 2]}>
            <Flip duration={500} direction="vertical">
              <Box>
                <CountNumber count={500} />
                <Text mt={-2} fontSize="xl">
                  Mentors
                </Text>
              </Box>
            </Flip>
            <Flip duration={500} direction="vertical">
              <Box>
                <CountNumber count={50} />
                <Text mt={-2} fontSize="xl">
                  Companies
                </Text>
              </Box>
            </Flip>
            <Flip duration={500} direction="vertical">
              <Box>
                <CountNumber count={1000} />
                <Text mt={-2} fontSize="xl">
                  General mentoring sessions
                </Text>
              </Box>
            </Flip>
            <Flip duration={500} direction="vertical">
              <Box>
                <CountNumber count={200} />
                <Text mt={-2} fontSize="xl">
                  Group mentoring sessions
                </Text>
              </Box>
            </Flip>
          </SimpleGrid>
        </Box>
      </Flex>
      <Box
        mt={[0, null, 10]}
        px={[5, null, 8]}
        pb={5}
        bg="#FFFFFF"
        borderRadius={28}
        maxW={"900px"}
        mx="auto"
        boxShadow="0px 3px 20px #8383834A"
        position="relative"
        id="projectManagement"
      >
        <Slider {...settings}>
          <Slide
            header="Project Management Learning Outcome"
            body={[
              "Agile tools",
              "Data driven decision making",
              "Tracking",
              "Risk",
              "Implement",
              "Time overruns - Learn risk management techniques",
              "Understand different project management aspects such as planning",
              "Time management and closure - Appreciate the varying concepts and life cycles of a project such as integration",
            ]}
          />
          <Slide
            header="Project Management Skills you can acquire"
            body={[
              "Planning and Forecasting",
              "Project Management Methodologies",
              "Subject Matter Expertise",
              "Project Management Software",
              "Organisation",
              "Problem Solving",
              "Adaptability",
            ]}
          />
          <Slide
            header="How it works"
            body={[
              "Go through each chapter in your own pace",
              "Take the sample test available after completing the chapter",
              "Go through the case studies included in the chapters",
              "Discuss with industry experts in comment section if you have any questions",
              "Give your final test after you learn",
              "Earn the certificate if you score at least 50%",
              "If you don't, you can retake the test",
            ]}
          />
          <Slide
            header="Project Management Curriculum"
            body={[
              "Scope",
              "Time",
              "Cost",
              "Quality",
              "Resources",
              "Risk",
              "Procurement",
              "Applications of Agile",
              "Tools & Techniques",
            ]}
          />
        </Slider>
      </Box>
      <Box
        position="absolute"
        top="10%"
        left="25%"
        display={["none", null, null, "block"]}
      >
        <Box pos="relative">
          <Box
            h="35px"
            w="35px"
            borderRadius="100%"
            bg="#4E54B1"
            pos="absolute"
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IndexMentorContent;
