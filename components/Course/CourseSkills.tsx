import { Box, Heading, Wrap, WrapItem, Tag } from "@chakra-ui/react";
import { Slide } from "react-awesome-reveal";
interface CourseSkillProps {
  skills: string[];
}

const CourseSkills = (props: CourseSkillProps) => {
  const { skills } = props;
  return (
    <Box mt={1} mb={10} p={3} border="1px solid #eee">
      <Slide direction="left" triggerOnce duration={500}>
        <Heading mb={5} fontWeight="bold">
          Skills you will gain
        </Heading>
      </Slide>
      <Wrap mt={3} justify={["center", null, "start"]}>
        {skills.map((skill, index) => (
          <WrapItem key={index}>
            <Tag
              fontSize={["sm", null, "md"]}
              px={5}
              py={2}
              bg="#ebeced"
              borderRadius="full"
            >
              {skill}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default CourseSkills;
