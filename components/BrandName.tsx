import { Wrap, WrapItem } from "@chakra-ui/react";


const BrandName = () => {
  return (
    <Wrap
      maxW="90%"
      spacing={[5, null, 10]}
      justify="center"
      align="center"
      mx="auto"
      mt={28}
    >
      <WrapItem>
        <img
          src="/images/Image2.png" // Path relative to the public folder
          alt="Brand Image 2"
          style={{
            boxShadow: "0px 3px 6px #00000029",
            borderRadius: "10px",
            width: "200px",
            height: "auto",
          }}
        />
      </WrapItem>

      <WrapItem>
        <img
          src="/images/Image3.png" // Path relative to the public folder
          alt="Brand Image 3"
          style={{
            boxShadow: "0px 3px 6px #00000029",
            borderRadius: "10px",
            width: "200px",
            height: "auto",
          }}
        />
      </WrapItem>

      <WrapItem>
        <img
          src="/images/Image4.png" // Path relative to the public folder
          alt="Brand Image 4"
          style={{
            boxShadow: "0px 3px 6px #00000029",
            borderRadius: "10px",
            width: "200px",
            height: "auto",
          }}
        />
      </WrapItem>

      <WrapItem>
        <img
          src="/images/Image5.png" // Path relative to the public folder
          alt="Brand Image 5"
          style={{
            boxShadow: "0px 3px 6px #00000029",
            borderRadius: "10px",
            width: "200px",
            height: "auto",
          }}
        />
      </WrapItem>
    </Wrap>
  );
};

export default BrandName;
