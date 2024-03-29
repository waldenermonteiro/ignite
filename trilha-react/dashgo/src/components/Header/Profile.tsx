import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align={"center"}>
      {showProfileData && (
        <Box mr={"4"} textAlign="right">
          <Text>Waldener Monteiro</Text>
          <Text color={"gray.300"} fontSize="small">
            waldener@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size={"md"}
        name="Waldener Monteiro"
        src="https://github.com/waldenermonteiro.png"
      />
    </Flex>
  );
}
