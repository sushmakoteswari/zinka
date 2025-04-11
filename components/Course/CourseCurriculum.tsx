import {
  SimpleGrid,
  Box,
  List,
  ListItem,
  Heading,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Check } from "@emotion-icons/boxicons-regular";
import { Slide } from "react-awesome-reveal";
interface CourseCurriculumprops {
  listItem: string[];
}

const CourseCurriculum = (props: CourseCurriculumprops) => {
  const { listItem } = props;
  return (
    <Box mb={16} maxW={["auto", null, "1000px"]} px={3}>
      <Slide direction="left" triggerOnce duration={500}>
        <Heading fontWeight="bold" mb={3}>
          Curriculum
        </Heading>
      </Slide>
      <SimpleGrid
        p={[3,null,5]}
        border={"2px solid #e3e4e5"}
        spacingX={5}
        spacingY={2}
        color="#707070"
        columns={[1, null, 2]}
      >
        {listItem.map((item, index) => (
          <Flex alignItems={"center"} key={index}>
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
      {/* <List color="#707070">
        {listItem.map((i, index) => (
          <ListItem mb={3} key={index} letterSpacing={1}>
            <Flex alignItems={"center"}>
              <Check
                size={"2rem"}
                style={{
                  height: "100%",
                  marginRight: "5px",
                }}
                color="#28AE60"
              />
              {i}
            </Flex>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );
};
export default CourseCurriculum;
