import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import Img from "react-optimized-image";

//images
import Staff from "../../public/images/staff4.jpg";

interface CardProps {
  highlightColor: string;
  name: string;
  subText: string;
  description: string;
  // image: React.ReactNode;
}

const Card = (props: CardProps) => (
  <Box
    maxW={["300px", "320px"]}
    top="10px"
    textAlign="center"
    px={[2, null, 6, 8]}
    pb={20}
    mt={10}
    borderRadius={8}
    boxShadow="0 5px 15px #00000029"
    borderTopWidth="4px"
    borderColor={props.highlightColor}
  >
    {/* <Box mt={-10}>{props.image}</Box> */}

    <Box fontSize="lg" fontWeight="600" color="#202931" mt={3}>
      {props.name}
    </Box>
    <Text
      textTransform="uppercase"
      letterSpacing="2px"
      fontWeight="500"
      color="secondaryText"
      mt={1}
    >
      {props.subText}
    </Text>

    <Text mt={3} color="secondaryText">
      {props.description}
    </Text>
  </Box>
);

const InstructorsSection = () => {
  return (
    <Box mx={["auto"]} maxW={["full", "800px", "1200px"]} mb={14} px={5}>
      <Heading px={[5, null, 0]} size="xl" mb={[5, null, 8]} fontWeight="bold">
        Learn with the best
      </Heading>
      <Box
        color="secondaryText"
        px={[5, null, 0]}
        mx="auto"
        mb={8}
        fontSize={["md", null, "lg"]}
        lineHeight={"1.8"}
      >
        Learn from the experts of the job role you choose. Gain knowledge to get
        the overall foundation required for the job role from mentors who are
        working in your dream job and different industries. Our instructors are
        Business Analysts, Program Managers, Business Development Managers,
        Digital Marketing Managers, Investment Bankers, Finance advisors, HR
        Managers (L&D, Recruitment) and Operations Managers.
      </Box>
      {/* <Flex flexWrap="wrap" justifyContent="space-around">
        <Card
          image={
            <Img
              src={Staff}
              webp
              sizes={[200]}
              alt={"staff"}
              style={{
                margin: "auto",
                borderRadius: "50%",
                width: "110px",
                height: "110px",
                objectFit: "cover",
              }}
            />
          }
          highlightColor="blue.300"
          name="Rachel Manning"
          subText="Instructor"
          description="Rachel is a front end web developer at Acquia and spend 3 years as a curriculum developer for a Silicon Valley Bootcamp. An advocate for continous learning, she is passionate about mentoring women and students in technology"
        />
        <Card
          image={
            <Img
              src={Staff}
              webp
              sizes={[200]}
              alt={"staff"}
              style={{
                margin: "auto",
                borderRadius: "50%",
                width: "110px",
                height: "110px",
                objectFit: "cover",
              }}
            />
          }
          highlightColor="purple.500"
          name="Rachel Manning"
          subText="Instructor"
          description="Rachel is a front end web developer at Acquia and spend 3 years as a curriculum developer for a Silicon Valley Bootcamp. An advocate for continous learning, she is passionate about mentoring women and students in technology"
        />
        <Card
          image={
            <Img
              src={Staff}
              webp
              sizes={[200]}
              alt={"staff"}
              style={{
                margin: "auto",
                borderRadius: "50%",
                width: "110px",
                height: "110px",
                objectFit: "cover",
              }}
            />
          }
          highlightColor="teal.300"
          name="Rachel Manning"
          subText="Instructor"
          description="Rachel is a front end web developer at Acquia and spend 3 years as a curriculum developer for a Silicon Valley Bootcamp. An advocate for continous learning, she is passionate about mentoring women and students in technology"
        />
        <Card
          image={
            <Img
              src={Staff}
              webp
              sizes={[200]}
              alt={"staff"}
              style={{
                margin: "auto",
                borderRadius: "50%",
                width: "110px",
                height: "110px",
                objectFit: "cover",
              }}
            />
          }
          highlightColor="yellow.400"
          name="Rachel Manning"
          subText="Instructor"
          description="Rachel is a front end web developer at Acquia and spend 3 years as a curriculum developer for a Silicon Valley Bootcamp. An advocate for continous learning, she is passionate about mentoring women and students in technology"
        />
      </Flex> */}
    </Box>
  );
};

export default InstructorsSection;
