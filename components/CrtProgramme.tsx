import {
  SimpleGrid,
  Text,
  Heading,
  Box,
  Center,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import { Slide, Zoom } from "react-awesome-reveal";
import Link from "next/link";

const CrtProgramme = () => {
  return (
    <Box
      maxW="full"
      p={8}
      pt={32}
      mt={20}
      mb={[0, null, 20]}
      color="secondaryText"
      mx="auto"
      bg="#F7F7F7"
      id="crtProgram"
    >
      <Heading textAlign="center" fontWeight="bold" color="#384957">
        Industry Ready Programme
      </Heading>
      <Text
        mt={8}
        maxW="1000px"
        mx="auto"
        fontSize="md"
        textAlign="center"
        letterSpacing={1}
        lineHeight={["1.8"]}
      >
        Zinka has brought a fine range of preparatory online courses only for
        BBA & MBA students. This program makes our students stand out and gives
        more opportunities. Each course provides for different study
        requirements of students. We aim to provide tailor-made courses to
        understand how to perform their future job role and make it easy for
        their interviews
      </Text>
      <SimpleGrid
        templateColumns={["1fr", null, "1fr 5px 1fr"]}
        maxW="900px"
        mx="auto"
        spacingX={[0, null, 10]}
        spacingY={[2, null, 6]}
        mt={10}
        position="relative"
        px={4}
        fontSize={["sm", null, "md"]}
      >
        <Box></Box>

        <Box
          h="15px"
          zIndex={2}
          w="15px"
          borderRadius="full"
          bg="#12C367"
          display={["none", null, "block"]}
        ></Box>
        <Slide direction="right" triggerOnce={true} duration={500}>
          <Zoom triggerOnce={true} duration={500}>
            <Stack
              direction={["row", null, "column"]}
              spacing={-3}
              align="center"
            >
              <Box w="100px" h="100px" position="relative">
                <img
                  src="/images/crtJobSpecific.jpeg"
                  alt="Crt Job Specific"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </Box>
              <Text border="1px solid #d5d5d5" px={5} py={2} borderRadius={10}>
                Job-specific course by industry experts of desired job role
              </Text>
            </Stack>
          </Zoom>
        </Slide>

        <Slide direction="left" triggerOnce={true} duration={500}>
          <Zoom triggerOnce={true} duration={500}>
            <Stack
              spacing={-3}
              direction={["row", null, "column"]}
              align="center"
            >
              <Box w="100px" h="100px" position="relative">
                <img
                  src="/images/crtTechnicalAptitude.jpeg"
                  alt="Crt Technical Aptitude"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </Box>
              <Text border="1px solid #d5d5d5" py={2} px={5} borderRadius={10}>
                Virtual technical, aptitude, quantitative, logical & reasoning
                skills classes
              </Text>
            </Stack>
          </Zoom>
        </Slide>
        <Box
          h="15px"
          w="15px"
          zIndex={2}
          borderRadius="full"
          bg="#12C367"
          display={["none", null, "block"]}
        ></Box>
        <Box></Box>
        <Box></Box>
        <Box
          h="15px"
          zIndex={2}
          w="15px"
          borderRadius="full"
          bg="#12C367"
          display={["none", null, "block"]}
        ></Box>
        <Slide direction="right" triggerOnce={true} duration={500}>
          <Zoom triggerOnce={true} duration={500}>
            <Stack
              direction={["row", null, "column"]}
              spacing={-3}
              align="center"
            >
              <Box w="100px" h="100px" position="relative">
                <img
                  src="/images/crtMockInterview.jpeg"
                  alt="Mock Interview"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </Box>
              <Text border="1px solid #d5d5d5" py={2} px={5} borderRadius={10}>
                Mock interviews by HRs & Group Discussions
              </Text>
            </Stack>
          </Zoom>
        </Slide>

        <Slide direction="left" triggerOnce={true} duration={500}>
          <Zoom triggerOnce={true} duration={500}>
            <Stack
              spacing={-3}
              direction={["row", null, "column"]}
              align="center"
            >
              <Box w="100px" h="100px" position="relative">
                <img
                  src="/images/crtPracticeTest.jpeg"
                  alt="Crt Practice Test"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </Box>
              <Text border="1px solid #d5d5d5" py={2} px={5} borderRadius={10}>
                Practice tests and preparatory material
              </Text>
            </Stack>
          </Zoom>
        </Slide>

        <Box
          h="15px"
          w="15px"
          zIndex={2}
          borderRadius="full"
          bg="#12C367"
          display={["none", null, "block"]}
        ></Box>
        <Box></Box>
        <Box></Box>
        <Box
          h="15px"
          w="15px"
          zIndex={2}
          borderRadius="full"
          bg="#12C367"
          display={["none", null, "block"]}
        ></Box>
        <Slide direction="right" triggerOnce={true} duration={500}>
          <Zoom triggerOnce={true} duration={500}>
            <Stack
              spacing={-3}
              direction={["row", null, "column"]}
              align="center"
            >
              <Box w="100px" h="100px" position="relative">
                <img
                  src="/images/crtMentor.jpeg"
                  alt="crt Mentor"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </Box>
              <Text border="1px solid #d5d5d5" py={2} px={5} borderRadius={10}>
                Online mentoring sessions from HR professionals and corporate
                leaders
              </Text>
            </Stack>
          </Zoom>
        </Slide>
        <Box
          position="absolute"
          w="7px"
          h="100%"
          bg="#d5d5d5"
          left="50.1%"
          display={["none", null, "block"]}
        ></Box>
      </SimpleGrid>
      <Box textAlign="center" mt={5}>
        <Link href="/IndustryReadyProgram">
          <PrimaryButton
            letterSpacing="1px"
            px={[4, null, 10]}
            textTransform="uppercase"
            fontWeight="normal"
          >
            Explore more
          </PrimaryButton>
        </Link>
      </Box>
    </Box>
  );
};

export default CrtProgramme;
