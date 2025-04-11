import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import PrimaryButton from "../PrimaryButton";
import Img from "react-optimized-image";
import Link from "next/link";

const CrtBanner = () => {
  return (
    <Box position="relative">
      <img
        src="/images/slider2.jpeg"  // Changed to string literal
       
     
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        alt="Industry ready program"
      />
      <Box
        zIndex={1}
        position="relative"
        color="white"
        background="rgba(0,0,0,0.5)"
        pt={[10, null, 16]}
        pb={24}
        px={8}
        mb={8}
        bg="rgba(0,0,0,.6)"
      >
        <Box maxW={"700px"}>
          <Heading fontSize={["2xl", "4xl"]} mb={[4, null, 8]}>
            Industry Ready Program
          </Heading>
          <Text maxW="700px" fontWeight="300" fontSize={["md", "xl"]}>
            The best way to land in your dream job is to get ready through the
            Industry Ready Program
          </Text>
        </Box>
        <Box mt={16}>
          <Link href="/contact/enroll">
            <PrimaryButton px={[5, null, 10]} height="2rem">
              Register
            </PrimaryButton>
          </Link>
        </Box>
        <Flex
          borderRadius={10}
          fontSize={["xs", "md"]}
          bg="white"
          justify={["space-evenly"]}
          p={[0, 2]}
          boxShadow="xl"
          color="#384957"
          maxW={["none", "70%"]}
          mt={8}
          mx={[0, null, "auto"]}
          mb={-32}
          order={[1, null, null, 0]}
        >
          <Box p={2}>
            <Text fontSize={["sm", "lg"]} fontWeight="bold">
              Job Specific
            </Text>
            <Text
              color="secondaryText"
              fontSize="xs"
              display={["none", "block"]}
            >
              Know which skills the job needs
            </Text>
          </Box>
          <Box h={"30px"} alignSelf="center" w="1px" bg="#9b9b9b" />
          <Box p={2}>
            <Text fontSize={["sm", "lg"]} fontWeight="bold">
              Mock Interviews
            </Text>
            <Text
              color="secondaryText"
              fontSize="xs"
              display={["none", "block"]}
            >
              Get interviewed by HRs with feedback
            </Text>
          </Box>
          <Box h={"30px"} alignSelf="center" w="1px" bg="#9b9b9b" />
          <Box p={2}>
            <Text fontSize={["sm", "lg"]} fontWeight="bold">
              Practice Tests
            </Text>
            <Text
              color="secondaryText"
              fontSize="xs"
              display={["none", "block"]}
            >
              Take multiple tests with the help of preparatory material
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CrtBanner;
