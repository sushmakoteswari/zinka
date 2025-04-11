import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Box, Text, chakra } from "@chakra-ui/react";
import type { Settings } from "react-slick";

// Dynamically import Slider with no SSR
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
}) as any;

interface IndexAchivementSliderProps {
  asNavFor?: any;
  sliderFunction: (slider: any) => void;
}

const IndexAchivementSlider = ({ asNavFor, sliderFunction }: IndexAchivementSliderProps) => {
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    if (sliderRef.current && sliderFunction) {
      sliderFunction(sliderRef.current);
    }
  }, [sliderFunction]);

  const settings: Settings = {
    asNavFor: asNavFor ?? undefined,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  const achievements = [
    {
      value: "25000+",
      text: "students trained and placed",
    },
    {
      value: "2000+",
      text: "Students trained in last 12 months",
    },
    {
      value: "50+",
      text: "Hiring Partners",
    },
    {
      value: "100+",
      text: "Placement Assistance - not just a job but in your favourite job",
    },
  ];

  return (
    <Box maxW="600px" mx="auto" mt={[10, null, 14]} color="#384957">
      <Slider ref={sliderRef} {...settings}>
        {achievements.map(({ value, text }, index) => (
          <Text key={index} fontSize={["md", null, "2xl"]} textAlign="center" p={4}>
            <chakra.span color="#28AE60" textDecoration="underline">
              {value}
            </chakra.span>
            &nbsp;{text}
          </Text>
        ))}
      </Slider>
    </Box>
  );
};

export default IndexAchivementSlider;