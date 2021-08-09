import { Box, Img, SimpleGrid, Stack, Text } from "@chakra-ui/react";

type City = {
  name: string;
  country: string;
  image: string;
  flag: string;
}

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  return(
    <Box w="256px" h="300x" color="yellow.500" border="1px solid" borderRadius="0.2rem" key={city.name}>
      <Stack>
        <Img
          w="256px"
          h="173px"
          src={city.image}
        />
        <SimpleGrid columns={2} px="25px" pt="1rem" pb="25px">
          <Box p="">
            <Text as="p" fontWeight="600" fontSize="20px" fontFamily="Barlow" color="gray.500">{city.name}</Text>
            <Text as="p" fontWeight="500" fontSize="1rem" fontFamily="Barlow" color="gray.400">{city.country}</Text>
          </Box>
          <Box align="right" pt="13px">
            <Img
              w="1.875rem"
              h="1.875rem"
              src={city.flag}
            />
          </Box>
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
