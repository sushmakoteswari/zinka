import { Text, HStack, Box, Image, Heading } from "@chakra-ui/react";
import React from "react";

const CourseSpecialitiesSection = () => {
  return (
    <Box>
      <CourseSpeciality
        icon="/images/certificate.svg"
        header="Shareable Certificate"
        description="Earn a certificate upon completion"
      />
      <CourseSpeciality
        icon="/images/globe.svg"
        header="100% online courses"
        description="Start instantly and learn at your own schedule"
      />
      <CourseSpeciality
        icon="/images/schedule.svg"
        header="Flexible Schedule"
        description="Set and maintain flexible deadlines"
      />
    </Box>
  );
};

interface CourseSpecialityProps {
  icon: string;
  header: string;
  description: string;
}

const CourseSpeciality = (props: CourseSpecialityProps) => {
  const { icon, header, description } = props;

  return (
    <HStack p={5}>
      <Box p={2} borderRadius="100%" border="2px solid #e1e1e1">
        <Image w="1.1rem" src={icon} alt="CourseSpeciality" />
      </Box>
      <Box>
        <Heading fontSize="xl">{header}</Heading>
        <Text color="secondaryText">{description}</Text>
      </Box>
    </HStack>
  );
};

export default CourseSpecialitiesSection;
