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
  Stack,
  Wrap,
  WrapItem,
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
const StudentForm = () => {
  return (
    <Box>
      <form
        id="studentForm"
        name="studentForm"
        method="post"
        data-netlify="true"
        action="/thankYou/student"
      >
        <FormControl id="name">
          <Label>Full Name</Label>
          <Input type="text" name="name" required />
        </FormControl>
        <FormControl mt={5} id="email">
          <Label>Email</Label>
          <Input type="email" name="email" required />
        </FormControl>
        <FormControl mt={5} id="mobile">
          <Label>Mobile</Label>
          <InputGroup>
            <InputLeftAddon children="+91" />
            <Input type="tel" name="mobile" pattern="[0-9]{10}" required />
          </InputGroup>
        </FormControl>
        <input type="hidden" name="form-name" value="studentForm" />
        <PrimaryButton
          type="submit"
          mt={7}
          isFullWidth={true}
          textTransform="uppercase"
        >
          Submit
        </PrimaryButton>
      </form>
    </Box>
  );
};
export default StudentForm;
