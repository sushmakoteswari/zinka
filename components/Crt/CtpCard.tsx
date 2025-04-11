import { Box, Heading, Grid, Text, Image } from "@chakra-ui/react";
import { Slide, Zoom } from "react-awesome-reveal";

const CtpCard = () => (
  <Box
    maxW={["400px", "680px", null, "80vw", "1200px"]}
    mx={"auto"}
    boxShadow="0 3px 10px #00000029"
    my={16}
    px={5}
  >
    <Slide triggerOnce direction="left" duration={1000}>
      <Box
        bg="#28AE60"
        display="inline-block"
        px={3}
        pr={8}
        py={1}
        mt={3}
        color="white"
        fontWeight="600"
        position="relative"
        fontSize="xl"
        _after={{
          content: `""`,
          position: "absolute",
          top: "0",
          right: "-10px",
          borderColor: "transparent",
          borderStyle: "solid",
          borderWidth: "1.2em",
          borderRightColor: "white",
          borderBottomColor: "white",
          transform: "rotate(-20deg)",
        }}
      >
        TRENDING
      </Box>
    </Slide>
    <Grid
      templateColumns={["1fr", "1fr 0.8fr"]}
      gap={[0, null, null, 1]}
      pb={5}
    >
      <Box gridRow={["2/3", "1/2"]}>
        <Box color="#384957" mt={8} pl={[3, 5]} pr={3}>
          <Zoom triggerOnce duration={500}>
            <Heading size="xl" fontWeight="600">
              Campus Training Programme
            </Heading>
          </Zoom>
          <Text
            fontSize={["sm", null, "lg"]}
            mt={8}
            width={["100%", null, null, "80%"]}
            lineHeight="1.7"
            color="secondaryText"
          >
            Colleges and students choose the program for learning in-demand job
            ready skills to crack final interviews.
            <br />
            Our Program helps you gain skills in aptitude, quantitative, logical
            & reasoning by virtual classes and interview preparation through
            mock interviews, practice tests, and mentoring sessions.
          </Text>
        </Box>
      </Box>
      <Box position="relative" gridRow={["1/2", "1/2"]} mt={[2, 0]}>
        <Image
          src="/images/splash.svg"
          maxW="30px"
          position="absolute"
          left={"7%"}
          alt="Splash"
          top={"-2%"}
        />
        <Zoom triggerOnce duration={500}>
          <Box
            ml={16}
            mt={[6, 5]}
            mb={[16, 20]}
            maxW={["150px", null, "200px", "270px"]}
          >
            <img
              src="/images/student_ind_2.png"
              style={{
                borderRadius: "10px",
                boxShadow: "0 8px 6px -6px gray",
                width: "100%",
                height: "auto",
              }}
              alt="Student-1"
            />
          </Box>
        </Zoom>
        <Zoom triggerOnce duration={500}>
          <Box
            position="absolute"
            bottom={["-4%", null, "0"]}
            right={["10%", "-2%"]}
            maxW={["150px", null, "200px", "270px"]}
          >
            <img
              src="/images/student_ind_3.png"
              style={{
                borderRadius: "10px",
                boxShadow: "0 8px 6px -6px gray",
                width: "100%",
                height: "auto",
              }}
              alt="Student-2"
            />
          </Box>
        </Zoom>
        <Image
          src="/images/splash.svg"
          position="absolute"
          transform="rotate(180deg)"
          bottom={["-15%", "-6%"]}
          maxW="30px"
          right={["0%", "-8%"]}
          alt="Splash"
        />
      </Box>
    </Grid>
  </Box>
);

export default CtpCard;
