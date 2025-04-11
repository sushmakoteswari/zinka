import {
  Box,
  Flex,
  SimpleGrid,
  Stack,
  HStack,
  Text,
  Wrap,
  Link,
  WrapItem,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";

import { Instagram, Facebook, Youtube } from "@emotion-icons/bootstrap";
import { Whatsapp } from "@emotion-icons/boxicons-logos";
import NextLink from "next/link";
import { ChevronRight, ChevronDown } from "@emotion-icons/boxicons-regular";

interface EnrollClickProps {
  heading: string;
  body: string;
  link: string;
}
const EnrollClick = (props: EnrollClickProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Text
        onClick={isOpen ? onClose : onOpen}
        _hover={{
          cursor: "pointer",
          color: "#1EAE65",
        }}
        ml="-10px"
      >
        <ChevronRight
          size="1.5rem"
          style={{
            transform: isOpen ? "rotate(90deg)" : "none",
            transition: ".4s",
          }}
        />

        {props.heading}
      </Text>
      <Text pl={4}>
        {isOpen && (
          <NextLink href={props.link}>
            <Link
              _hover={{
                textDecoration: "underline",
                cursor: "pointer",
                color: "#1EAE65",
              }}
            >
              {props.body}
            </Link>
          </NextLink>
        )}
      </Text>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box bg="#202838" color="#FFFFFF" border="1px solid #707070">
      <SimpleGrid
        templateColumns={["1fr", null, "2fr 3fr"]}
        px={[6, null, 16]}
        py={10}
      >
        <Box>
          <NextLink href="/">
            <img
              src={"/images/zinka.png"}
              style={{ cursor: "pointer" }}
              alt="Zinka Logo"
            />
          </NextLink>
          <Box ml="6px">
            <Box my={4} fontSize="md" fontWeight="300">
              {/* <Text>No 8 advance street ,</Text>
            <Text>Bavish avenue ,</Text>
            <Text>Hyderabad.</Text> */}
              <Text>Contact Number : +918688872722.</Text>
            </Box>
            <NextLink href="/">
              <Text
                fontSize="md"
                _hover={{
                  textDecoration: "underline",
                }}
                cursor="pointer"
                fontWeight="300"
              >
                www.zinka.me
              </Text>
            </NextLink>
            <HStack mt={4} align="center" spacing={3}>
              <Link href="https://www.facebook.com/zinkameindia">
                <Facebook size="1.2rem" />
              </Link>

              <Youtube size="1.3rem" />
              <Instagram size="1.2rem" />
              <Whatsapp size="1.6rem" />
            </HStack>
          </Box>
        </Box>
        <Wrap
          maxW="97%"
          mt={10}
          spacing={[10, null, 0]}
          justify={["start", null, "space-around"]}
        >
          <WrapItem>
            <Box fontSize={["md", null, "lg"]}>
              <Heading fontSize="2xl">Explore Zinka</Heading>
              <Stack
                mt={4}
                fontSize={"sm"}
                alignItems="start"
                color="#FFFFFF"
                fontFamily="Poppins"
                fontWeight="300"
                spacing={3}
                direction={"column"}
              >
                <NextLink href="/#coursedetail">
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      color: "#1EAE65",
                      cursor: "pointer",
                    }}
                  >
                    Essential Courses
                  </Text>
                </NextLink>
                <NextLink href="/IndustryReadyProgram">
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "#1EAE65",
                    }}
                  >
                    Industry Ready Program
                  </Text>
                </NextLink>
                <EnrollClick
                  heading="For Universities"
                  body="- Enroll Now"
                  link="/contact/enroll/?university"
                />
                <EnrollClick
                  heading="For Student"
                  body="- Enroll Now"
                  link="/contact/enroll"
                />
                {/* <NextLink href="/contact/enroll">
                  <Link
                    _hover={{ textDecoration: "underline", color: "#7fffd0" }}
                  >
                    For Student
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;-Enroll Now
                  </Link>
                </NextLink> */}
                <NextLink href="/#about">
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "#1EAE65",
                    }}
                  >
                    Why Zinka
                  </Text>
                </NextLink>
              </Stack>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box fontSize={["md", null, "lg"]}>
              <Heading fontSize="2xl">Courses</Heading>
              <Stack
                mt={4}
                fontSize={"sm"}
                alignItems="start"
                color="#FFFFFF"
                fontFamily="Poppins"
                fontWeight="300"
                spacing={3}
                direction="column"
              >
                <NextLink href="/course/business_analytics">
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "#1EAE65",
                    }}
                  >
                    Business Analytics
                  </Text>
                </NextLink>
                <NextLink href="/course/digital_marketing">
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "#1EAE65",
                    }}
                  >
                    Digital Marketing
                  </Text>
                </NextLink>
                <NextLink href="/course/human_resource_management">
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "#1EAE65",
                    }}
                  >
                    Human Resources
                  </Text>
                </NextLink>
                <NextLink href="/course/strategic_management">
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "#1EAE65",
                    }}
                  >
                    Strategic Management
                  </Text>
                </NextLink>
                <NextLink href="/course/entrepreneurship">
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "#1EAE65",
                    }}
                  >
                    Entrepreneurship
                  </Text>
                </NextLink>
                <NextLink href="/course/finance">
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "#1EAE65",
                    }}
                  >
                    Finance
                  </Text>
                </NextLink>
                <NextLink href="/course/project_management ">
                  <Text
                    _hover={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "#1EAE65",
                    }}
                  >
                    Project Management
                  </Text>
                </NextLink>
              </Stack>
            </Box>
          </WrapItem>
        </Wrap>
      </SimpleGrid>
      <Box
        bg="#5B7281"
        mt={5}
        py={3}
        px={1}
        fontSize={["sm", null, "lg"]}
        fontWeight="300"
      >
        <Text textAlign="center">
          2021 All copyrights reserved by <NextLink href="/">zinka.me</NextLink>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
