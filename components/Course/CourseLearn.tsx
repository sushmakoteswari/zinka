import { Box, Heading, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import { Slide } from "react-awesome-reveal";
import { Check } from "@emotion-icons/boxicons-regular";

interface CourseLearnProps {
  learn: string[];
}
const CourseLearn = (props: CourseLearnProps) => {
  return (
    <Box px={3}>
      <Slide direction="left" triggerOnce duration={500}>
        <Heading mb={4} fontWeight="bold">
          Learning
        </Heading>
      </Slide>
      <SimpleGrid
        p={[3, null, 5]}
        border={"2px solid #e3e4e5"}
        spacing={[3, null, 5]}
        color="#707070"
        columns={[1, null, 2]}
      >
        {props.learn.map((item, index) => (
          <Flex alignItems={"center"} key={index}>
            <Box>
              <Check
                size={"2rem"}
                style={{
                  height: "100%",
                }}
                color="#28AE60"
              />
            </Box>
            <Text ml={4}>{item}</Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default CourseLearn;
