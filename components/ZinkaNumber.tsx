import { Box, Wrap, WrapItem, Text, Heading, Divider } from "@chakra-ui/react";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";
import { Zoom } from "react-awesome-reveal";

interface CountNumberProps {
  count: number;
}

const CountNumber = (props: CountNumberProps) => {
  return (
    <CountUp end={props.count} duration={2}>
      {({ countUpRef, start }) => (
        <Heading fontSize={["3xl", null, "4xl"]}>
          <span ref={countUpRef} /> +
          <Waypoint onEnter={start} />
        </Heading>
      )}
    </CountUp>
  );
};

const ZinkaNumber = () => {
  return (
    <Box bg="#F3F7F7" mt={[0, null, 10]} p={10} pb={20}>
      <Heading
        color="#39424E"
        letterSpacing="1px"
        fontSize="3xl"
        textAlign="center"
        textTransform="uppercase"
      >
        Zinka By Numbers
      </Heading>
      <Wrap
        justify="center"
        align="center"
        textAlign="center"
        spacing={[10, 10, null, 20]}
        pt={14}
      >
        <WrapItem>
          <Box>
            <Zoom triggerOnce>
              <CountNumber count={25000} />

              <Text color="#00000065" fontSize={["lg", null, "xl"]}>
                students trained and placed
              </Text>
            </Zoom>
          </Box>
        </WrapItem>
        <WrapItem display={["none", null, "block"]}>
          <Box h="130px">
            <Divider borderColor="#707070" orientation="vertical" />
          </Box>
        </WrapItem>
        <WrapItem>
          <Box>
            <Zoom triggerOnce>
              <CountNumber count={40} />

              <Text color="#00000065" fontSize={["lg", null, "xl"]}>
                Colleges Collaboration
              </Text>
            </Zoom>
          </Box>
        </WrapItem>
        <WrapItem display={["none", null, "block"]}>
          <Box h="130px">
            <Divider borderColor="#707070" orientation="vertical" />
          </Box>
        </WrapItem>
        <WrapItem>
          <Box>
            <Zoom triggerOnce>
              <CountNumber count={50} />
              <Text color="#00000065" fontSize={["lg", null, "xl"]}>
                Hiring Partners
              </Text>
            </Zoom>
          </Box>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default ZinkaNumber;
