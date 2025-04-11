import { Box, Flex, Link } from "@chakra-ui/react";
import { useScrollSection } from "../../react-scroll-section";
import { Zoom } from "react-awesome-reveal";
interface TabLinkProps {
  children: React.ReactNode;
  onClick: () => void;
  selected: boolean;
}

const TabLink = (props: TabLinkProps) => {
  const { children, onClick, selected } = props;

  return (
    <Link
      px={4}
      py={2}
      fontSize={["xs", "md"]}
      borderRadius="1em"
      flex="1"
      onClick={onClick}
      color={selected ? "#fff" : "#384957"}
      textAlign="center"
      fontWeight={selected ? "bold" : "normal"}
      bg={selected ? "#384957" : "transparent"}
      transition="all 0.3s"
    >
      {children}
    </Link>
  );
};

const ScrollingTabBar = () => {
  const aboutSection = useScrollSection("crtabout");

  const syllabusSection = useScrollSection("crtsyllabus");
  const faqsSection = useScrollSection("crtfaqs");
  // const testimonialsSection = useScrollSection("crttestimonials");
  // const syllabusSection = useScrollSection("crtsyllabus");

  return (
    <Box mt={20} position="sticky" zIndex={10} top="10px" bg="none">
      <Zoom triggerOnce duration={500}>
        <Flex
          borderRadius="1em"
          maxW="900px"
          mx="auto"
          boxShadow="0 3px 6px #00000029"
          bg="#fff"
        >
          <TabLink
            onClick={aboutSection.onClick}
            selected={aboutSection.selected}
          >
            About
          </TabLink>
          {/* <TabLink
          onClick={syllabusSection.onClick}
          selected={syllabusSection.selected}
        >
          Syllabus
        </TabLink> */}
          <TabLink
            onClick={syllabusSection.onClick}
            selected={syllabusSection.selected}
          >
            Syllabus
          </TabLink>
          {/* <TabLink
          onClick={testimonialsSection.onClick}
          selected={testimonialsSection.selected}
        >
          Testimonials
        </TabLink> */}
          <TabLink
            onClick={faqsSection.onClick}
            selected={faqsSection.selected}
          >
            FAQs
          </TabLink>
        </Flex>
      </Zoom>
    </Box>
  );
};

export default ScrollingTabBar;
