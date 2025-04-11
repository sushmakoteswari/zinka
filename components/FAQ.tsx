import {
  Box,
  Heading,
  Flex,
  Text,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Zoom } from "react-awesome-reveal";

const faqData = [
  {
    question: "What will I get in this program?",
    answer:
      "This is an end-to-end recruitment training program for management students (BBA/MBA) with a combination of job specific skills, interview skills, communication skills, logical & reasoning skills and mentoring sessions making you fully equipped for your final interview.",
  },
  {
    question: "Can I join this program for myself or through my college?",
    answer:
      "This program is designed for the class size of at least 600 students. So it’s recommended that you contact our team through your college and we will immediately contact your college for starting the program",
  },
  {
    question: "What's the program fee?",
    answer: "The fees is Rs.2000 per student and the fee is non refundable.",
  },
  {
    question: "How long is the program?",
    answer:
      "It’s a 1500 hour program. The calendar is customised according to the needs of the college.",
  },
  {
    question: "Can I join and will I be placed?",
    answer: (
      <Text>
        a. Yes, this program is designed for the class size of at least 600
        students. So it’s recommended that you contact our team through your
        college and we will immediately contact your college for starting the
        program.
        <br />
        <br />
        b. Yes, you will get 100% placement assistance and opportunities from
        different companies in PAN India.
      </Text>
    ),
  },
  {
    question: "What makes this program interesting for students?",
    answer:
      "Competitions are organised monthly to revise their skills learnt during the program and the winner can earn a certificate and prize of Rs.5000",
  },
];

const FAQ = () => {
  return (
    <Zoom duration={500} triggerOnce>
      <Box bg="#FAFFF9" pb={10} px={5}>
        <Box p={3} pt={5} maxW="800px" mx="auto">
          <Heading fontSize="3xl" textAlign="center" mb={6}>
            Frequently Asked Questions
          </Heading>
          <Box>
            {faqData.map((faq, index) => (
              <Box key={index}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Zoom>
  );
};

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem = (props: FAQItemProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const { question, answer } = props;

  return (
    <Box borderWidth="1px" mb={3} bg="white">
      <Flex
        p={[2, null, 5]}
        cursor="pointer"
        textDecoration="none"
        fontWeight="500"
        onClick={onToggle}
      >
        <ChevronRightIcon
          fontSize={"2xl"}
          color="#ff7070"
          transform={isOpen ? "rotate(90deg)" : "rotate(0deg)"}
          transition="transform 0.3s"
        />
        {question}
      </Flex>
      <Collapse in={isOpen}>
        <Box color="secondaryText" fontSize={["md"]} px={5} pb={3}>
          {answer}
        </Box>
      </Collapse>
    </Box>
  );
};

export default FAQ;
