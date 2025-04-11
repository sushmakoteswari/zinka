import Slider from "react-slick";
import {
  Box,
  Flex,
  Text,
  OrderedList,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import PrimaryButton from "./PrimaryButton";
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
  .slick-dots li.slick-active {
    background: rgb(30, 174, 101);
  }
  .slick-dots button {
    display: none;
  }
  .slick-dots li {
    display: block;
    float: left;
    border-radius: 50px;
    height: 6px;
    width: 100px;
  }
  .slick-dots {
    margin: auto;
    height: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 440px;
    background: #eee;
    border-radius: 50px;
  }
`;

const settings = {
  infinite: true,
  speed: 500,
  dots: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

interface SlideProps {
  image: any;
  header: string;
  body: string;
  button?: React.ReactNode;
  list?: React.ReactNode;
}

const Slide = (props: SlideProps) => {
  return (
    <Box
      bgImage={`url(${props.image})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      h={["300px"]}
    >
      <Box color="#FFFFFF" p={5} h="100%" bg="rgba(0,0,0,.6)">
        <VStack align="flex-start" py={2} spacing={2} maxW={"500px"}>
          <Text
            fontWeight="500"
            fontSize={["md", null, "xl"]}
            letterSpacing={3}
          >
            {props.header}
          </Text>
          <Text
            fontSize={["xs", null, "sm"]}
            fontWeight="400"
            letterSpacing={1}
          >
            {props.body}
          </Text>
          <Box fontSize={["xm", null, "sm"]} fontWeight="400" letterSpacing={1}>
            {props.list}
          </Box>
          <Box>{props.button}</Box>
        </VStack>
      </Box>
    </Box>
  );
};

const EnrollSlider = () => {
  return (
    <StyledBox mt={10}>
      <Slider {...settings}>
        <Slide
          image={require("../public/images/slider1.jpg?webp&width=1200")}
          header="Zinka - Connecting Colleges to Corporate"
          body="
          First platform in India for management students.
          We work on only one point - To make you industry ready.
        "
        />

        <Slide
          image={require("../public/images/study2.jpg?webp&width=1200")}
          header="Zinka Industry ready Program 
          Prepare for a specific job role.
          "
          body="
          Business Analyst | Digital Marketing Executive | Business Development Executive| HR
          Executive | Operations Executive | Project Manager | Product Manager | Supply Chain
          Consultant | Sales Management.
                  "
          button={
            <PrimaryButton
              letterSpacing="1px"
              px={10}
              textTransform="uppercase"
              fontWeight="normal"
            >
              Explore
            </PrimaryButton>
          }
        />
        <Slide
          image={require("../public/images/study2.jpg?webp&width=1200")}
          header="Zinka Essentials Certification Program"
          body="
          Short courses for your overall instant knowledge with examples and case studies from
          different industries.
        "
          button={
            <PrimaryButton letterSpacing="1px" px={3} textTransform="uppercase">
              Explore
            </PrimaryButton>
          }
        />
        <Slide
          image={require("../public/images/study2.jpg?webp&width=1200")}
          header="Project Management"
          body="
          Industry recognised 15 hour certificate course to prepare you to be future project
          managers
          (As Slides change from one to another, the below section also should change and display
          various number of achievements)
        "
          list={
            <OrderedList>
              <ListItem>25000+ students trained and placed</ListItem>
              <ListItem> 2000+ Students trained in last 12 months</ListItem>
              <ListItem>50+ Hiring Partners</ListItem>
              <ListItem>
                100% Placement Assistance - not a just job but in your favourite
                job
              </ListItem>
              <ListItem>Certified Programs.</ListItem>
            </OrderedList>
          }
        />
      </Slider>
    </StyledBox>
  );
};

export default EnrollSlider;
