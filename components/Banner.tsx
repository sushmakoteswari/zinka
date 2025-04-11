import { Box, Flex, List, ListItem, Text, Link } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Banner = () => {
  return (
    <Box>
      <Flex
        wrap="wrap"
        bg="#5B728110"
        justifyContent="center"
        alignItems="center"
        boxShadow=" 0px 3px 6px #00000029"
      >
        <Flex>
          <Box p={[10, null, 20]}>
            <Box as="p" fontSize={["3xl", null, "5xl"]} color={"#28AE60"}>
              Learn Coding skills from scratch!
            </Box>
            <List fontSize={["xl", null, "xl"]}>
              <ListItem pt={3}>
                <CheckCircleIcon color="#5B7281" mr={3} />
                Connect with top mentors
              </ListItem>
              <ListItem pt={3}>
                <CheckCircleIcon color="#5B7281" mr={3} />
                Get personalised training
              </ListItem>
              <ListItem pt={3}>
                <CheckCircleIcon color="#5B7281" mr={3} />
                Get preparation material
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Flex>
      <Box
        fontSize={["2xl", null, "2xl"]}
        mt={10}
        textAlign="center"
        p={4}
        color="#384957"
      >
        <Text display="inline-block" textDecoration="underline">
          <Link href="#" color="#28AE60" letterSpacing="0.7px">
            2000+
          </Link>
        </Text>
        &nbsp; Students trained in last 12 months
      </Box>
    </Box>
  );
};

export default Banner;
