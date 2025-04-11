import { Box, Heading, Text } from "@chakra-ui/react";

const CourseAbout = () => {
  return (
    <Box py={5}>
      <Heading fontSize="2xl">About this Specialization</Heading>
      <Text color="secondaryText" my={4}>
        This Specialization covers the concepts and tools you'll need throughout
        the entire data science pipeline, from asking the right kinds of
        questions to making inferences and publishing results. In the final
        Capstone Project, you’ll apply the skills learned by building a data
        product using real-world data. At completion, students will have a
        portfolio demonstrating their mastery of the material.
      </Text>
    </Box>
  );
};

export default CourseAbout;
