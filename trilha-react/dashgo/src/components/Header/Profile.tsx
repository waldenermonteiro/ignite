import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex align={"center"}>
      <Box mr={"4"} textAlign="right">
        <Text>Waldener Monteiro</Text>
        <Text color={"gray.300"} fontSize="small">
          waldener@gmail.com
        </Text>
      </Box>

      <Avatar
        size={"md"}
        name="Waldener Monteiro"
        src="https://github.com/waldenermonteiro.png"
      />
    </Flex>
  );
}
