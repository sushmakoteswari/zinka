import { Box, Text } from "@chakra-ui/react";
import { Zoom } from "react-awesome-reveal";

const Content = () => {
  return (
    <Box px={5} position="relative" pt={[28, null, 32]} mt={-20} id="content">
      <Zoom triggerOnce duration={500}>
        <Text
          fontSize={["xl", null, "5xl"]}
          color="#384957"
          fontFamily="Poppins"
          fontWeight="700"
          letterSpacing={1}
          textAlign="center"
          lineHeight={1.4}
        >
          More reasons why students <br></br>
          trust Zinka for<br></br>
          their career foundation
        </Text>
      </Zoom>
      <Box
        position="absolute"
        display={["none", null, null, "block"]}
        top="50%"
        left="0"
        h="150px"
        right="0"
      >
        <Box
          h="20px"
          w="20px"
          bg="#1BA46B"
          transform="rotate(45deg)"
          pos="absolute"
          top="0"
          right="5%"
        ></Box>
        <Box
          h="15px"
          w="15px"
          borderRadius="100%"
          bg="#4E54B1"
          pos="absolute"
          bottom="0"
          left="15%"
        ></Box>
        <Box
          w="0"
          h="0"
          borderLeft="20px solid transparent"
          borderRight="20px solid transparent"
          borderBottom="20px solid #f48b48"
          pos="absolute"
          borderRadius="10px"
          transform="rotate(-30deg)"
          left="10%"
          top="-20%"
        ></Box>
      </Box>
    </Box>
  );
};

export default Content;
