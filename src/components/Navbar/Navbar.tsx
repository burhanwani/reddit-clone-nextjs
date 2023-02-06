import React from "react";
import SearchInput from "./SearchInput";
import { Box, Flex, Image } from "@chakra-ui/react";
import RightContent from "./RightContent/RightContent";

type NavbarProps = {};

const Navbar: React.FC = () => {
  return (
    <Flex
      bg="white"
      height="44px"
      padding="6px 12px"
      justifyContent={{ md: "space-between" }}
    >
      <Flex
        align="center"
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 0, md: 2 }}
      >
        <Image src="/images/redditFace.svg" height="30px" />
        <Image
          display={{ base: "none", md: "unset" }}
          src="/images/redditText.svg"
          height="46px"
        />
      </Flex>
      <SearchInput />
      <RightContent />
    </Flex>
  );
};
export default Navbar;
