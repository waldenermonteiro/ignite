import { Flex } from "@chakra-ui/react";

import Logo from "./Logo";
import NotificationsNav from "./NotificationsNav";

import Profile from "./Profile";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1400}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      <SearchBox />
      
      <Flex align={"flex-end"} ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
}
