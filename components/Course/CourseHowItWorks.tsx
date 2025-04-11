import { Box, Heading, Text } from "@chakra-ui/react";
import Slide from "react-awesome-reveal";
const CourseHowItWorks = () => {
  return (
    <Box pb={10} maxW="1200px" mx="auto">
      <Slide triggerOnce duration={500}>
        <Heading>How it works</Heading>
      </Slide>
      <Box mt={5}>
        <Heading fontSize="xl">Take Courses</Heading>
        <Text color="secondaryText" maxW="900px" mt={5}>
          Go through each chapter in your own pace Take the sample test
          available after completing the chapter Go through the case studies
          included in the chapters Give your final test after you learn Earn the
          certificate if you score at least 50% If you don’t, you can retake the
          test
        </Text>
      </Box>
    </Box>
  );
};

export default CourseHowItWorks;
