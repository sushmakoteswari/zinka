import { Box, SimpleGrid, Heading, Text, Flex } from "@chakra-ui/react";
import CourseSkills from "./CourseSkills";
import ScrollingTabBar from "./ScrollingTabBar";
import CourseSpecialitiesSection from "./CourseSpecialitiesSection";
import CourseAbout from "./CourseAbout";
import CourseInstructorsSection from "./CourseInstructorsSection";
import CourseHowItWorks from "./CourseHowItWorks";
import { ScrollingProvider, Section } from "../../react-scroll-section";
import CourseCurriculum from "./CourseCurriculum";
import CourseLearn from "./CourseLearn";
import { Check } from "@emotion-icons/boxicons-regular";
import { Zoom, Slide } from "react-awesome-reveal";

interface CourseCurriculumProps {
  courseCurriculumList: string[];
  courseSkillList: string[];
  courseLearn: string[];
  howItWorks: string[];
}
const CourseTabSection = (props: CourseCurriculumProps) => {
  return (
    <ScrollingProvider>
      <ScrollingTabBar />
      <Box my={5} px={4} maxW="1400px" mx="auto">
        <Section id="learn">
          <SimpleGrid
            pt={16}
            templateColumns={["1fr", null, "3fr 1fr"]}
            gap={5}
          >
            <Box>
              <Zoom triggerOnce duration={500}>
                <CourseSkills skills={props.courseSkillList} />
              </Zoom>
              <Zoom triggerOnce duration={500}>
                <CourseLearn learn={props.courseLearn} />
              </Zoom>
              {/* <CourseAbout /> */}
            </Box>
            <CourseSpecialitiesSection />
          </SimpleGrid>
        </Section>
        <Section id="howitworks">
          <Box pt={16}>
            <Zoom triggerOnce duration={500}>
              <Box maxW={["auto", null, "1000px"]} px={3}>
                <Slide triggerOnce duration={500}>
                  <Heading>How it works</Heading>
                </Slide>
                <Box mt={5}>
                  <SimpleGrid
                    p={[3, null, 5]}
                    border={"2px solid #e3e4e5"}
                    spacingX={[3, null, 5]}
                    color="#707070"
                    columns={[1, null, 2]}
                  >
                    {props.howItWorks.map((item, index) => (
                      <Flex alignItems={"start"} mb={2} key={index}>
                        <Box>
                          <Check
                            size={"1.5rem"}
                            style={{
                              height: "100%",
                            }}
                            color="#28AE60"
                          />
                        </Box>
                        <Text ml={3}>{item}</Text>
                      </Flex>
                    ))}
                  </SimpleGrid>
                </Box>
              </Box>
            </Zoom>
          </Box>
        </Section>
        <Section id="curriculum">
          <Box pt={16}>
            <Zoom triggerOnce duration={500}>
              <CourseCurriculum listItem={props.courseCurriculumList} />
            </Zoom>
            {/* <CourseInstructorsSection /> */}
          </Box>
        </Section>
      </Box>
    </ScrollingProvider>
  );
};

export default CourseTabSection;
