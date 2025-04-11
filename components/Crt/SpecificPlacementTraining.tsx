import { Box, SimpleGrid, Text, Heading } from "@chakra-ui/react";
import { Slide, Zoom } from "react-awesome-reveal";
interface TrainingItemProps {
  name: string;
  salary: string;
}
const TrainingItem = (props: TrainingItemProps) => {
  return (
    <Box
      textAlign="center"
      border="2px solid #d5d5d5"
      p={[2, null, 5]}
      borderRadius={10}
      minH={"150px"}
      minW={["auto", null, "200px"]}
      overflow="auto"
    >
      <Text color="#384957" fontSize="md">
        {props.name}
      </Text>
      <Text mt={2} color="#6BB18D" fontWeight="bold">
        {props.salary}
      </Text>
    </Box>
  );
};
const SpecificPlacementTraining = () => {
  return (
    <Box maxW="1200px" mx="auto" px={5}>
      <Zoom triggerOnce duration={500}>
        <Heading color="#384957">Job specific placement training</Heading>
      </Zoom>
      <Text
        color="secondaryText"
        fontSize={["md", null, "lg"]}
        mt={5}
        lineHeight={["1.5", null, "1.8"]}
        maxW="1000px"
      >
        Training for your desired job role in any specialisation. Training based
        on that job you’re going to join making the interview process easier for
        you and the HR with case studies and examples of your responsibilities
        during your work in that role
      </Text>
      <SimpleGrid
        // columns={[2, null, 5]}
        templateColumns={["repeat(2,1fr)", null, "repeat(5 ,1fr)"]}
        spacing={[5, null, 10]}
        mt={10}
        fontSize="lg"
      >
        <Zoom triggerOnce duration={500}>
          <Slide duration={500} triggerOnce direction="left">
            <TrainingItem name="Business Analyst" salary=" 5 LPA - 6 LPA" />
          </Slide>
          <Slide duration={500} triggerOnce direction="up">
            <TrainingItem
              name="Digital Marketing Executive"
              salary="6 LPA - 8 LPA"
            />
          </Slide>
          <Slide duration={500} triggerOnce direction="down">
            <TrainingItem
              name="Business Development Executive "
              salary="7 LPA - 9 LPA"
            />
          </Slide>
          <Slide duration={500} triggerOnce direction="down">
            <TrainingItem name="HR Executive" salary="5 LPA - 7 LPA" />
          </Slide>
          <Slide duration={500} triggerOnce direction="right">
            <TrainingItem name="Operations Executive" salary="6 LPA - 7 LPA" />
          </Slide>
        </Zoom>
      </SimpleGrid>
    </Box>
  );
};

export default SpecificPlacementTraining;
