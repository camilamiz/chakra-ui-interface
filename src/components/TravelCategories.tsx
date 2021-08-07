import { Box, HStack, Img, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export function TravelCategories() {
  return(
    <HStack w="100%" justify="center" pt="88" pb="88">
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
