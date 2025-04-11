import {
  Box,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
  SimpleGrid,
  Checkbox,
} from "@chakra-ui/react";
import React from "react";
import PrimaryButton from "../../components/PrimaryButton";

interface LabelProps {
  children: React.ReactNode;
}

const Label = (props: LabelProps) => {
  return (
    <FormLabel fontWeight="bold" textTransform="uppercase" letterSpacing="1px">
      {props.children}
    </FormLabel>
  );
};
const UniversityForm = () => {
  return (
    <Box>
      <form
        id="universityform"
        name="universityform"
        method="post"
        data-netlify="true"
        action="/thankYou/university"
      >
        <FormControl id="name">
          <Label>Full Name</Label>
          <Input name="name" type="text" required />
        </FormControl>
        <FormControl id="email" mt={5}>
          <Label>Work Email</Label>
          <Input name="email" type="email" required />
        </FormControl>
        <FormControl id="mobile" mt={5}>
          <Label>Mobile</Label>
          <InputGroup>
            <InputLeftAddon children="+91" />
            <Input name="mobile" type="tel" pattern="[0-9]{10}" required />
          </InputGroup>
        </FormControl>
        <SimpleGrid mt={5} columns={[1, null, 2]} spacing={6}>
          <FormControl id="jobTitle">
            <Label>Job Title</Label>
            <Input name="jobtitle" type="text" />
          </FormControl>
          <FormControl id="jobFunction">
            <Label>Job Function</Label>
            <Input name="jobFunction" type="text" />
          </FormControl>
        </SimpleGrid>
        <SimpleGrid mt={5} columns={[1, null, 2]} spacing={6}>
          <FormControl id="institutionName">
            <Label>Institution Name</Label>
            <Input name="institutionName" type="text" />
          </FormControl>
          <FormControl id="institutionWebsite">
            <Label>Institution Website</Label>
            <Input name="institutionWebsite" type="text" />
          </FormControl>
          <input type="hidden" name="form-name" value="universityform" />
        </SimpleGrid>
        <Box mt={5}>
          <Checkbox colorScheme="green">
            By checking this box you agree to terms and conditions
          </Checkbox>
        </Box>
        <PrimaryButton
          mt={7}
          type="submit"
          isFullWidth={true}
          textTransform="uppercase"
        >
          Submit
        </PrimaryButton>
      </form>
    </Box>
  );
};
export default UniversityForm;
