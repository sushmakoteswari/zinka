import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  Box,
  Link,
  Text,
  VStack,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import { ChevronRight } from "@emotion-icons/boxicons-regular";
import NextLink from "next/link";

import { motion } from "framer-motion";
interface MobileDrwProps {
  open: boolean;
  onClose: () => void;
}

const MobileDrw = (props: MobileDrwProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Drawer
        placement="left"
        onClose={props.onClose}
        isOpen={props.open}
        size={"sm"}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              <NextLink href="/">
                <Text fontSize={"lg"} color="green.500">
                  Zinka.me
                </Text>
              </NextLink>
              <DrawerCloseButton />
            </DrawerHeader>
            <DrawerBody position="relative">
              <VStack
                spacing={5}
                fontSize={"md"}
                alignItems="end"
                color="green.500"
                fontFamily="Poppins"
                p={8}
              >
                <motion.div
                  key={Number(props.open)}
                  initial={{ x: -100, opacity: 0 }}
                  transition={{ delay: 0.2, stiffness: 100 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <Link onClick={props.onClose}>
                    <NextLink href="/">Home</NextLink>
                  </Link>
                </motion.div>
                <motion.div
                  key={Number(props.open)}
                  initial={{ x: -100, opacity: 0 }}
                  transition={{ delay: 0.25, stiffness: 100 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <Link onClick={props.onClose}>
                    <NextLink href="/#about">About Us</NextLink>
                  </Link>
                </motion.div>
                <motion.div
                  key={Number(props.open)}
                  initial={{ x: -100, opacity: 0 }}
                  transition={{ delay: 0.3, stiffness: 100 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <Text onClick={onToggle}>
                    Courses
                    <ChevronRight
                      size="1.5rem"
                      style={{
                        marginLeft: "3px",
                        transform: isOpen ? "rotate(90deg)" : "none",
                        transition: "0.6s",
                      }}
                    />
                  </Text>
                </motion.div>
                <Collapse in={isOpen} animateOpacity>
                  <Box ml={4}>
                    <Text onClick={props.onClose} py={2}>
                      <NextLink href="/course/business_analytics">
                        Business Analytics
                      </NextLink>
                    </Text>
                    <Text onClick={props.onClose} py={2}>
                      <NextLink href="/course/digital_marketing">
                        Digital Marketing
                      </NextLink>
                    </Text>
                    <Text onClick={props.onClose} py={2}>
                      <NextLink href="/course/human_resource_management">
                        Human Resource Management
                      </NextLink>
                    </Text>
                    <Text onClick={props.onClose} py={2}>
                      <NextLink href="/course/strategic_management">
                        Strategic Management
                      </NextLink>
                    </Text>
                    <Text onClick={props.onClose} py={2}>
                      <NextLink href="/course/entrepreneurship">
                        Entrepreneurship
                      </NextLink>
                    </Text>
                    <Text onClick={props.onClose} py={2}>
                      <NextLink href="/course/finance">Finance</NextLink>
                    </Text>
                    <Text onClick={props.onClose} py={2}>
                      <NextLink href="/course/project_management">
                        Project Management
                      </NextLink>
                    </Text>
                  </Box>
                </Collapse>

                <motion.div
                  key={Number(props.open)}
                  initial={{ x: -100, opacity: 0 }}
                  transition={{ delay: 0.35, stiffness: 100 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <Link onClick={props.onClose}>
                    <NextLink href="/IndustryReadyProgram">
                      Industry Ready Program
                    </NextLink>
                  </Link>
                </motion.div>

                <motion.div
                  key={Number(props.open)}
                  initial={{ x: -100, opacity: 0 }}
                  transition={{ delay: 0.4, stiffness: 100 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <Link onClick={props.onClose}>
                    <NextLink href="/#contact">Contact Us</NextLink>
                  </Link>
                </motion.div>
              </VStack>

              <Box
                position="absolute"
                height="100%"
                w="100%"
                transform="rotate(12deg)"
                left="-15%"
                top="-8%"
                bg="#edfff8"
                zIndex={-1}
              />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default MobileDrw;
