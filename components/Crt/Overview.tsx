import {
  Box,
  List,
  ListItem,
  Heading,
  SimpleGrid,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Check } from "@emotion-icons/boxicons-regular";
import { Slide, Zoom } from "react-awesome-reveal";
const programOverviewList1 = [
  "Find training for your dream job roles based on your specialisation",
  "Interactive sessions with industry experts",
  "Job wise tailor made course programs",
  "100% placement assistance",
];

const Overview = () => {
  return (
    <Box px={5} maxW="1250px" mx="auto">
      <Zoom triggerOnce duration={500}>
        <Heading fontWeight="600" color="#384957">
          Program Overview
        </Heading>
      </Zoom>
      <SimpleGrid
        p={[3, null, 5]}
        spacing={5}
        color="#394A58"
        fontSize={["sm", null, "lg"]}
        columns={[1, null, 2]}
        mt={[6, null, 10]}
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

export default Overview;
