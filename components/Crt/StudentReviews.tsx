import { Box, SimpleGrid, Flex, Text, Heading } from "@chakra-ui/react";
import { StarFill } from "@emotion-icons/bootstrap";

const ReviewCard = () => (
  <Box
    maxW={["320px", null, null, "full"]}
    p={8}
    background="#fff"
    borderRadius={5}
    color="#5B7281"
    boxShadow="0 5px 10px #00000029"
    mx="auto"
  >
    <Flex justifyContent={"space-between"}>
      <Box fontSize="lg" fontWeight="600">
        Robert jr
      </Box>
      <Box>
        {[1, 2, 3, 4, 5].map((num) => (
          <StarFill
            key={num}
            size={"1.3rem"}
            color="#e4d551"
            style={{ marginRight: "0.4em" }}
          />
        ))}
      </Box>
    </Flex>
    <Text color="secondaryText" mt={5}>
      Clouds, Distributed Systems, Networking.Learn about and build distributed
      and networked systems for clouds and big data.Clouds, Distributed Systems,
      Networking. Learn about and build distributed and networked systems for
      clouds and big data.
    </Text>
  </Box>
);

const StudentReviews = () => (
  <Box bgGradient="linear(to-b, white, #dcedf1)">
    <Flex
      pt={16}
      pb={10}
      maxW="1200px"
      mx="auto"
      justifyContent={["space-around", null, null, "space-between"]}
      alignItems="center"
      fontWeight="100"
      wrap="wrap"
    >
      <Heading fontWeight="500" fontSize={["3xl", "4xl"]} color="#39989b">
        Top Student Reviews
      </Heading>
      <Flex
        alignItems={["baseline", "center"]}
        fontSize={["2xl", "5xl"]}
        color="#435866"
      >
        <Box as="span" mr={2}>
          4.7
        </Box>
        {[1, 2, 3, 4, 5].map((index) => (
          <StarFill
            key={index}
            size={"1.5rem"}
            color="#e4d551"
            style={{ marginRight: "0.1em", alignSelf: "center" }}
          />
        ))}
        <Box as="span" fontSize="sm" color="#afaeae">
          {"(850)"}
        </Box>
      </Flex>
    </Flex>
    <SimpleGrid
      maxW={["300px", null, "800px", "1200px"]}
      mx="auto"
      spacing={5}
      columns={[1, 2, null, 3]}
      pb={10}
    >
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </SimpleGrid>
  </Box>
);

export default StudentReviews;
