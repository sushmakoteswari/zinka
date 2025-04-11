import { Box, Flex, Link } from "@chakra-ui/react";
import { useScrollSection } from "../../react-scroll-section";
import React, { useState, useEffect } from "react";

// Type definition for TabLink props
interface TabLinkProps {
  children: React.ReactNode;
  onClick: () => void;
  selected: boolean;
}

// TabLink component
const TabLink = ({ children, onClick, selected }: TabLinkProps) => {
  return (
    <Link
      fontSize={["sm", null, "md"]}
      flex="1"
      pt="25px"
      onClick={onClick}
      color={selected ? "#28ae60" : "#384957"}
      textAlign="center"
      transition="all 0.3s"
    >
      {children}
    </Link>
  );
};

// Type definition for section data (from useScrollSection hook)
interface SectionData {
  onClick: () => void;
  selected: boolean;
}

// Main ScrollingTabBar component
const ScrollingTabBar = () => {
  const learningSection: SectionData = useScrollSection("learn");
  const howItWorksSection: SectionData = useScrollSection("howitworks");
  const CurriculumSection: SectionData = useScrollSection("curriculum");
  
  const [shrinkHeight, setShrinkHeight] = useState<boolean>(false);

  // Scroll event listener to adjust navbar height
  useEffect(() => {
    const onScroll = (e: Event) => {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      setShrinkHeight(scrollTop > 400);
    };

    window.addEventListener("scroll", onScroll);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", onScroll);
  }, []); // Empty dependency array to only run on mount/unmount

  return (
    <Box
      bg="white"
      zIndex={shrinkHeight ? 10 : 5}
      position="sticky"
      top="0"
      borderBottom="1px solid #e3e4e5"
      h={shrinkHeight ? "50px" : "74px"} // Adjust navbar height based on scroll position
    >
      <Flex maxW="1200px" mx="auto" height="100%">
        <TabLink
          onClick={learningSection.onClick}
          selected={learningSection.selected}
        >
          Learn
        </TabLink>
        <TabLink
          onClick={howItWorksSection.onClick}
          selected={howItWorksSection.selected}
        >
          How It Works
        </TabLink>
        <TabLink
          onClick={CurriculumSection.onClick}
          selected={CurriculumSection.selected}
        >
          Curriculum
        </TabLink>
        {/* Uncomment the following line to add a Testimonials tab */}
        {/* <TabLink onClick={() => {}} selected={false}>Testimonials</TabLink> */}
      </Flex>
    </Box>
  );
};

export default ScrollingTabBar;
