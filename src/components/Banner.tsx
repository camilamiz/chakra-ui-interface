import { Box, Flex, Heading, Img, SimpleGrid, Text } from "@chakra-ui/react";

export function Banner() {
  return(
    <Flex
      w="100%"
      h="335"
      justify="center"
      alignItems="center"
      bgImage="url('/background.svg')"
      bgSize="cover"
    >
      <SimpleGrid w="80%" columns={2} zIndex="1" pl="2">
        <Box pt="100">
          <Heading color="gray.50" my="2" fontWeight="500">5 Continentes,<br />infinitas posssibilidades</Heading>
          <Text color="gray.100" fontWeight="400">Chegou a hora de tirar do papel a viagem que você<br />sempre sonhou.</Text>
        </Box>
        <Box mt="87" ml="120"><Img src="/airplane.svg" /></Box>
      </SimpleGrid>
    </Flex>
  );
}
