import { Box, Text, Heading, SimpleGrid, HStack } from "@chakra-ui/react";
import Img from "react-optimized-image";

//images
import Staff from "../../public/images/avatar.jpg";

const CourseInstructorsSection = () => {
  return (
    <Box pb={8}>
      <Heading>Instructors</Heading>
      <SimpleGrid mt={10} spacing={10} columns={[1, null, 2]}>
        <CourseInstructor />
        <CourseInstructor />
        <CourseInstructor />
        <CourseInstructor />
        <CourseInstructor />
      </SimpleGrid>
    </Box>
  );
};

const CourseInstructor = () => {
  return (
    <HStack spacing={4}>
      <HStack spacing={4}>
        <img sizes='images/avatar.jpg' style={{ borderRadius: "50%" }} />
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Indranil Gupta
          </Text>
          <Text color="secondaryText" fontSize="md">
            Professor
          </Text>
          <Text fontSize="sm" color="#936d48">
            Department of Computer Science
          </Text>
        </Box>
      </HStack>
    </HStack>
  );
};

export default CourseInstructorsSection;
