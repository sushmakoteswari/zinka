import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import PrimaryButton from "../components/PrimaryButton";
import Link from "next/link";



const GetConsultation = () => {
  return (
    <Box bg="#FCD07C34" py={20} px={3}>
      <SimpleGrid
        maxW="1100px"
        spacing={[16, null, 24]}
        mx="auto"
        templateColumns={["1fr", null, "auto 1fr"]}
        alignItems="center"
      >
        <Box maxW={["250px", "400px", "530px"]} mx="auto">
          <img
            src={"/images/mentor.jpeg"}
            alt="Mentor"
            style={{
              borderRadius: "10px",
              boxShadow: "black 0px 8px 6px -6px",
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
        <Box maxW="900px" mx="auto">
          <Heading maxW="500px" fontSize={["3xl", null, "4xl"]}>
            Book For a Mock Interview with Zinka Experts
          </Heading>
          <Text color="secondaryText" fontSize="lg" lineHeight={1.5} my={6}>
            Get one free mock interview by <br />
            our experienced team
          </Text>
          <Link href="/contact/enroll">
            <PrimaryButton
              mt={5}
              fontSize={["md", null, "xl"]}
              px={[4, null, 10]}
              py={[6]}
            >
              Book for a mock interview
            </PrimaryButton>
          </Link>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default GetConsultation;
