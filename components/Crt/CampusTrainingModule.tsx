import {
  Box,
  List,
  ListItem,
  Heading,
  SimpleGrid,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Check } from "@emotion-icons/boxicons-regular";
import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
const programOverviewList1 = [
  "Aptitude",
  "Quantitative",
  "Logical & Reasoning",
  "Situational Judgement",
];

const CampusTrainingModule = () => {
  return (
    <Box mb={10} maxW="1200px" mx="auto" mt={16}>
      <Slide direction="down" triggerOnce>
        <Zoom triggerOnce duration={500}>
          <Heading
            fontWeight="600"
            textAlign={["center", null, "start"]}
            color="#384957"
          >
            General Placement Training Modules
          </Heading>
        </Zoom>
      </Slide>
      <Text
        fontSize={["md", null, "lg"]}
        maxW="700px"
        color="#5B7281"
        px={[7, null, 5]}
        mt={5}
        lineHeight={["1.5", null, "1.8"]}
      >
        This program also includes training for general skills required for a
        placement along with job specific skills.
      </Text>
      <SimpleGrid
        p={6}
        spacing={5}
        color="#394A58"
        fontSize={["lg"]}
        columns={[1, null, 2]}
        mt={[5, null, 10]}
      >
        {programOverviewList1.map((item, index) => (
          <Flex alignItems={"start"} key={index}>
            <Box>
              <Check
                size={"1.5rem"}
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

export default CampusTrainingModule;
