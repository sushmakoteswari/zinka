import { Box, Heading, Flex, Text } from "@chakra-ui/react";

const syllabusContent = [
  {
    title: "Mock interview",
    body:
      "Clouds, Distributed Systems, Networking. Learn about and build distributed and networked systems for clouds and big data. Clouds, Distributed Systems, Networking. Learn about and build distributed and networked systems for clouds and big data.",
  },
  {
    title: "Aptitude Training",
    body:
      "Clouds, Distributed Systems, Networking. Learn about and build distributed and networked systems for clouds and big data. Clouds, Distributed Systems, Networking. Learn about and build distributed and networked systems for clouds and big data.",
  },
  {
    title: "Industry specific programme",
    body:
      "Clouds, Distributed Systems, Networking. Learn about and build distributed and networked systems for clouds and big data. Clouds, Distributed Systems, Networking. Learn about and build distributed and networked systems for clouds and big data.",
  },
];

const Syllabus = () => (
  <Box maxW={"1200px"} mx={[1, null, null, "auto"]} px={5}>
    <Heading
      mb={[5, null, 10]}
      size="xl"
      textAlign={["center", null, "start"]}
      color="#384957"
    >
      Syllabus
    </Heading>
    <Flex
      color="#384957"
      bg="#5B728107"
      justify="space-around"
      flexWrap="wrap-reverse"
    >
      <Box maxW="730px">
        {syllabusContent.map((content, index) => (
          <Flex key={index}>
            <Box mr={4}>
              <Box
                mt={2}
                w="10px"
                h="10px"
                background="#0E7A9C"
                borderRadius="full"
              />
              {index !== syllabusContent.length - 1 && (
                <Box w="1px" h="100%" mx="auto" background="#5A728058" />
              )}
            </Box>
            <Box>
              <Heading size="md">{content.title}</Heading>
              <Text color="secondaryText" fontSize="md" mt={5} mb={20}>
                {content.body}
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>
      <Box mb={[10, 0]} maxW={["full", "500px"]} mt={-8}>
        <img
          src="/images/finance2.jpeg" // Directly specify the image source as a string
          style={{
            boxShadow: "0px 3px 6px gray",
            borderRadius: "10px",
            marginTop: "2.5rem",
            width: '100%', // Adjust width to fit container
            height: 'auto' // Maintain aspect ratio
          }}
          alt="Teacher"
        />
        <Text fontSize="3xl" mt={8} fontWeight="600">
          Carefully crafted syllabus
        </Text>
      </Box>
    </Flex>
  </Box>
);

export default Syllabus;
