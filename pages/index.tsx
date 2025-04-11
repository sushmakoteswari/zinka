import { useState, useEffect } from "react";
import Slider from "react-slick";  // Default import
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import IndexSlider from "../components/IndexImageSlide";
import IndexAchivementSlider from "../components/IndexAchivementSlider";
import BrandName from "../components/BrandName";
import Content from "../components/Content";
import AboutUs from "../components/AboutUs";
import CoursesSlider from "../components/CoursesSlider";
import Testimonial from "../components/TestimonialsSlider";
import ZinkaNumber from "../components/ZinkaNumber";
import ContactForm from "../components/ContactForm";
import IndexMentorContent from "../components/MentorContent";
import LabelPanel from "../components/Label";
import GetConsultation from "../components/GetConsultation";
import { Box } from "@chakra-ui/react";
import CrtProgramme from "../components/CrtProgramme";

const Home = () => {
  const [slider1, setSlider1] = useState<Slider | null>(null);
  const [slider2, setSlider2] = useState<Slider | null>(null);

  useEffect(() => {
    if (slider1 && slider2 && typeof slider1.slickGoTo === 'function' && typeof slider2.slickGoTo === 'function') {
      try {
        slider1.slickGoTo(0);
        slider2.slickGoTo(0);
      } catch (error) {
        console.error('Error initializing sliders:', error);
      }
    }
  }, [slider1, slider2]);

  return (
    <Layout>
      <SEO title="Home" />
      <IndexSlider
        asNavFor={slider2}
        sliderFunction={(slider: Slider) => {
          if (slider && typeof slider.slickGoTo === 'function') {
            setSlider1(slider);
          }
        }}
      />
      <IndexAchivementSlider
        asNavFor={slider1}
        sliderFunction={(slider: Slider) => {
          if (slider && typeof slider.slickGoTo === 'function') {
            setSlider2(slider);
          }
        }}
      />
      {/* <BrandName /> */}
      <Content />
      <LabelPanel />
      <CoursesSlider />
      <CrtProgramme />
      <IndexMentorContent />
      <Box
        pt={10}
        bgImage={["unset", null, null, "url(/images/aboutbg.svg)"]}
        bgColor={["rgba(40,174,96,0.11)", null, null, "transparent"]}
        bgPosition={["100%"]}
        bgSize={["cover", null, "contain"]}
        bgRepeat="no-repeat"
      >
        <AboutUs />
        <Testimonial />
      </Box>
      <ZinkaNumber />
      <GetConsultation />
      <ContactForm />
    </Layout>
  );
};

export default Home;
