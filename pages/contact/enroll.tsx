import {
  Box,
  Text,
  Tab,
  TabPanel,
  Stack,
  TabList,
  Tabs,
  TabPanels,
} from "@chakra-ui/react";
import SEO from "../../components/SEO";

import StudentForm from "../../components/Forms/StudentForm";
import UniversityForm from "../../components/Forms/UniversityForm";
import GetConsultation from "../../components/GetConsultation";
import ContactTestimonials from "../../components/ContactTestimonials";
import Layout from "../../components/Layout";
import ZinkaNumber from "../../components/ZinkaNumber";
import Img from "react-optimized-image";
import { useRouter } from "next/router";
import { Zoom, Slide } from "react-awesome-reveal";
//images
import Lnt from "../../public/images/landtlogo.png";
import HpLogo from "../../public/images/hplogo.png";
import GoldMan from "../../public/images/goldmansachslogo.png";
import Fidelity from "../../public/images/fidelityLogo.png";

const EnrollPage = () => {
  const router = useRouter();
  const isUniversity = "university" in router.query;

  return (
    <Layout>
      <SEO title="Enroll" />
      <Stack
        direction={["column-reverse", null, null, "row"]}
        maxW="1300px"
        mx="auto"
        p={5}
        mb={10}
        mt={[5, null, 16]}
        spacing={20}
        gridTemplateColumns={["1fr", null, "1fr 1fr"]}
      >
        <Box>
          <Zoom triggerOnce duration={1500}>
            <ContactTestimonials />
          </Zoom>
          {/* <Box>
            <Heading textAlign="center" color="#5B7281" fontSize="lg">
              Top Company Partnerships
            </Heading>
            <Wrap justify="center" mt={3} spacing={5}>
              <WrapItem>
                <Img
                  src={Lnt}
                  webp
                  sizes={[200]}
                  style={{ maxHeight: "80px" }}
                />
              </WrapItem>
              <WrapItem>
                <Img
                  src={HpLogo}
                  webp
                  sizes={[200]}
                  style={{ maxHeight: "70px" }}
                />
              </WrapItem>
              <WrapItem>
                <Img
                  src={GoldMan}
                  webp
                  sizes={[200]}
                  style={{ maxHeight: "80px" }}
                />
              </WrapItem>
              <WrapItem>
                <Img
                  src={Fidelity}
                  webp
                  sizes={[200]}
                  style={{ maxHeight: "80px" }}
                />
              </WrapItem>
            </Wrap>
          </Box> */}
        </Box>

        <Tabs
          variant="unstyled"
          defaultIndex={isUniversity ? 1 : 0}
          key={isUniversity ? 1 : 0}
          align="center"
        >
          <TabList mb="1em" justifyContent="center">
            <Tab
              fontSize={["md", null, "xl"]}
              _selected={{
                color: "white",
                bg: "#28AE60",
              }}
              color="#5B7281"
              _focus={{ boxShadow: "none" }}
              border="2px solid #EDF2F7"
            >
              Student
            </Tab>
            <Tab
              fontSize={["md", null, "xl"]}
              _selected={{ color: "white", bg: "#28AE60" }}
              color="#5B7281"
              border="2px solid #EDF2F7"
              _focus={{ boxShadow: "none" }}
            >
              University
            </Tab>
          </TabList>
          <Text mt={10} fontWeight="bold" color="#384957" fontSize="2xl" mb={5}>
            You're just a click away from sky rocketing your career
          </Text>
          <TabPanels>
            <TabPanel>
              <StudentForm />
            </TabPanel>

            <TabPanel>
              <UniversityForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
      {/* <FAQ /> */}
      <ZinkaNumber />
      <GetConsultation />
    </Layout>
  );
};

export default EnrollPage;
