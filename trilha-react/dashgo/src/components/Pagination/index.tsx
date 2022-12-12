import { Box, Button, HStack } from "@chakra-ui/react";
import PaginationItem from "./PaginationItem";

export default function Pagination() {
  return (
    <HStack
      direction={"row"}
      spacing="6"
      mt="8"
      justify={"space-between"}
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack direction={"row"} spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </HStack>
    </HStack>
  );
}
