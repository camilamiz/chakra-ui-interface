import { Box, Circle, Flex, HStack, Img, SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export function TravelCategories() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (isWideVersion) {
    return(
      <HStack w="100%" justify="center" py="88">
        <SimpleGrid columns={5} w="80%">
          <Box>
            <Stack align="center">
              <Img src="/cocktail.svg" boxSize="85"/>
              <Text justify="center" pt="1" fontWeight="600" fontSize="24px">vida noturna</Text>
            </Stack>
          </Box>
          <Box>
            <Stack align="center">
              <Img src="/surf.svg" boxSize="85"/>
              <Text justify="center" pt="1" fontWeight="600" fontSize="24px">praia</Text>
            </Stack>
          </Box>
          <Box>
            <Stack align="center">
              <Img src="/building.svg" boxSize="85"/>
              <Text justify="center" pt="1" fontWeight="600" fontSize="24px">moderno</Text>
            </Stack>
          </Box>
          <Box>
            <Stack align="center">
              <Img src="/museum.svg" boxSize="85"/>
              <Text justify="center" pt="1" fontWeight="600" fontSize="24px">clássico</Text>
            </Stack>
          </Box>
          <Box>
            <Stack align="center">
              <Img src="/earth.svg" boxSize="85"/>
              <Text justify="center" pt="1" fontWeight="600" fontSize="24px">e mais...</Text>
            </Stack>
          </Box>
        </SimpleGrid>
      </HStack>
    );
  }

  return (
    <Stack w="100%" justify="center" py="2rem" spacing="1rem">
      <SimpleGrid columns={2} w="100%" spacing="0.5rem">
        <Box>
          <HStack justify="center">
            <Circle size="0.5rem" bgColor="yellow.500" />
            <Text justify="center" pt="1" fontWeight="500" fontSize="1rem">vida noturna</Text>
          </HStack>
        </Box>
        <Box>
          <HStack justify="center">
          <Circle size="0.5rem" bgColor="yellow.500" />
            <Text justify="center" pt="1" fontWeight="500" fontSize="1rem">praia</Text>
          </HStack>
        </Box>
        <Box>
          <HStack justify="center">
            <Circle size="0.5rem" bgColor="yellow.500" />
            <Text justify="center" pt="1" fontWeight="500" fontSize="1rem">moderno</Text>
          </HStack>
        </Box>
        <Box>
          <HStack justify="center">
            <Circle size="0.5rem" bgColor="yellow.500" />
            <Text justify="center" pt="1" fontWeight="500" fontSize="1rem">clássico</Text>
          </HStack>
        </Box>
      </SimpleGrid>
      <HStack justify="center">
        <Circle size="0.5rem" bgColor="yellow.500" />
        <Text justify="center" pt="1" fontWeight="500" fontSize="1rem">e mais...</Text>
      </HStack>
    </Stack>
  );
}
