import { Box, Text, Image, Flex, Heading } from "@chakra-ui/react";
import { Zoom } from "react-awesome-reveal";
import About2 from "../public/images/student5.jpeg";

const AboutUs = () => {
  return (
    <Box id="about" pt={6} mt={-6}>
      <Box maxW={"1100px"} m="auto" p={5} mt={[0, null, 20]}>
        <Flex
          justifyContent={["center", null, null, "space-between"]}
          wrap="wrap"
          flexDirection={["column-reverse", null, null, "row"]}
        >
          <Zoom triggerOnce duration={500}>
            <Box pos="relative">
              <img
                src="images/student4.jpeg"
                style={{
                  boxShadow: "0px 3px 6px #00000029",
                  borderRadius: "10px",
                  marginBottom: "1.5rem",
                }}
                alt="About"
              />
              <Image
                display={["none", null, null, "block"]}
                src={"/images/splash.svg"}
                top={"-25%"}
                left={"-15%"}
                position="absolute"
                alt="splash"
              />
            </Box>
          </Zoom>
          <Box mb={[5, null, 0]}>
            <Heading color="#384957" mb={[5, 10]}>
              About Us
            </Heading>
            <Text
              fontWeight="400"
              letterSpacing="1px"
              lineHeight={"1.9"}
              maxW="600px"
              color="#909090"
            >
              We work only on one point. To make our students industry ready. We
              do it through our collaboration with over 800 industry experts
              giving our students an opportunity to work on industry projects,
              webinars and courses that prepare you for your dream job.
            </Text>
          </Box>
        </Flex>

        <Flex
          justifyContent={["center", null, null, "space-between"]}
          wrap="wrap"
          flexDirection={["column", null, null, "row"]}
          mt={20}
        >
          <Box>
            <Heading mb={10} color="#384957">
              Our Vision
            </Heading>
            <Text
              color="#909090"
              letterSpacing="1px"
              fontWeight="400"
              lineHeight={"1.9"}
              maxW="600px"
              w="85vw"
              mb={[5, null, 0]}
            >
              Our vision is to bridge the gap between all colleges in India and
              the corporate world by giving students industry related knowledge,
              opportunities and experience.
            </Text>
          </Box>
          <Zoom triggerOnce duration={500}>
            <Box position="relative">
              <img
                src="images/student5.jpeg" // Path relative to the public folder
                alt="About"
                style={{
                  boxShadow: "0px 3px 6px #00000029",
                  borderRadius: "10px",
                  marginBottom: "1.5rem",
                  width: "330px", // Adjust width if needed
                  height: "auto", // Maintain aspect ratio
                }}
              />
              <Image
                src={"/images/splash.svg"}
                position="absolute"
                transform="rotate(90deg)"
                right={"-13%"}
                display={["none", null, null, "block"]}
                top={"-25%"}
                alt="splash"
              />
            </Box>
          </Zoom>
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutUs;
