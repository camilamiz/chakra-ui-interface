import { Box, Flex, Img, SimpleGrid } from '@chakra-ui/react';

export function Header() {
  return(
    <Flex
      as="header"
      w="100%"
      h="24"
      align="center"
      bg="gray.50"
      mx="auto"
    >
      <SimpleGrid columns={3} spacing={10} w="100%">
        <Box></Box>
        <Box align="center"><Img src="/logo.svg" /></Box>
        <Box></Box>
      </SimpleGrid>
    </Flex>
  );
}
