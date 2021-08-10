import { Box, Flex, Heading, HStack, Img, SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return(
    <Flex
      w="100%"
      h={["10rem", "15rem", "21rem"]}
      justify="center"
      alignItems="center"
      bgImage="url('/background.svg')"
      bgSize="cover"
      py={["5rem", "7.5rem", "10rem"]}
    >
      <HStack
        w="80%"
        zIndex="1"
        pl="2"
        spacing="12.5rem"
      >
        <Box alignItems="center">
          <Stack spacing={["0.2rem", "1rem"]}>
            <Heading as="h1" color="gray.50" my="2" fontWeight="500" fontSize={["1.25rem", "1.75rem", "2.25rem"]}>5 Continentes,<br />infinitas posssibilidades</Heading>
            <Text color="gray.100" fontWeight="400" fontSize={["0.8rem", "1rem", "1.25rem"]}>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
          </Stack>
        </Box>
        { isWideVersion &&
          <Box>
            <Img mt="100px" src="/airplane.svg" />
          </Box>
        }
      </HStack>
    </Flex>
  );
}
