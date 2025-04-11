import {
  Input,
  Box,
  VStack,
  Stack,
  FormControl,
  FormLabel,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import MapSection from "./MapSection";
import PrimaryButton from "./PrimaryButton";

const ContactForm = () => {
  return (
    <Box id="contact" pt={8}>
      <Box p={5} maxW={"1200px"} m="auto" my={[10, null, 20]}>
        <Stack direction={["column", null, "row"]} spacing={20} align="center">
          <Box flex="1">
            <Heading
              fontSize={["2xl", null, "3xl", "4xl"]}
              textAlign={["center", null, null, "start"]}
              color="#384957"
              mb={16}
            >
              Contact Us
            </Heading>
            <form
              id="contactForm"
              name="contactForm"
              method="post"
              data-netlify="true"
              action="/thankYou/contact"
            >
              <VStack spacing={5}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input name="name" type="text" required />
                </FormControl>
                <FormControl id="contact">
                  <FormLabel>Contact</FormLabel>
                  <Input
                    name="contact"
                    pattern="[0-9]{10}"
                    type="tel"
                    required
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input name="email" type="email" />
                </FormControl>
                <FormControl id="college">
                  <FormLabel>College name</FormLabel>
                  <Input name="college"  type="text" />
                </FormControl>
                <FormControl id="message">
                  <FormLabel>Message</FormLabel>
                  <Textarea />
                </FormControl>
                <input type="hidden" name="form-name" value="contactForm" />
              </VStack>
              <Box mt={5}>
                <PrimaryButton type="submit" px={20}>
                  Submit
                </PrimaryButton>
              </Box>
            </form>
          </Box>
          <MapSection />
        </Stack>
      </Box>
    </Box>
  );
};

export default ContactForm;
