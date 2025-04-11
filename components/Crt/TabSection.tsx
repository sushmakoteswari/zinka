import { Box } from "@chakra-ui/react";
import ScrollingTabBar from "./TabBar";
import { ScrollingProvider, Section } from "../../react-scroll-section";
import CtpCard from "./CtpCard";
import InstructorsSection from "./InstructorsSection";
import Overview from "./Overview";
import StudentReviews from "./StudentReviews";
import Syllabus from "./Syllabus";
import { Zoom } from "react-awesome-reveal";
import FAQ from "../FAQ";
import CampushTrainingModule from "./CampusTrainingModule";
import SpecificPlacementTraining from "./SpecificPlacementTraining";
const TabSection = () => {
  return (
    <ScrollingProvider>
      <ScrollingTabBar />
      <Box>
        <Section id="crtabout">
          <Box pt={[10, null, 16]}>
            <Overview />
            <CtpCard />
            <SpecificPlacementTraining />
            <CampushTrainingModule />
          </Box>
        </Section>
        <Section id="crtsyllabus">
          <Box pt={[10, null, 16]}>
            <Zoom triggerOnce>
              <Syllabus />
            </Zoom>
          </Box>
        </Section>
        <Section id="crtinstructors">
          <Box pt={8}>
            <Zoom triggerOnce>
              <InstructorsSection />
            </Zoom>
          </Box>
        </Section>
        <Section id="crtfaqs">
          <Box pt={[10, null, 16]}>
            {/* <StudentReviews /> */}

            <FAQ />
          </Box>
        </Section>
      </Box>
    </ScrollingProvider>
  );
};

export default TabSection;
