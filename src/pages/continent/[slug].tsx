import { Box, Flex, Heading, Img, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { CityCard } from "../../components/CityCard";

type City = {
  name: string;
  country: string;
  image: string;
  flag: string;
}

type Continent = {
  name: string;
  description: string;
  totalCountries: number;
  languages: number;
  most100Cities: number;
  image: string;
  cities: City[];
}

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  return(
    <Stack>
      <Flex
        w="100%"
        h="31.25rem"
        pb="3.75rem"
        pl="8.75rem"
        align="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgImage={`url(${continent.image})`}
      >
        <Heading mt="24rem" color="gray.50" fontWeight="600" fontSize="3rem">{continent.name}</Heading>
      </Flex>
      <Stack px="8.75rem" py="5rem">
        <SimpleGrid columns={2} spacing="4rem" pb="5rem">
          <Box>
            <Text textAlign="justify">{continent.description}</Text>
          </Box>
          <Box>
            <SimpleGrid columns={3}>
              <Box align="center">
                <Heading color="yellow.500" fontWeight="600" fontSize="3rem">{continent.totalCountries}</Heading>
                <Text color="gray.500" fontWeight="600" fontSize="1.5rem">países</Text>
              </Box>
              <Box align="center">
                <Heading color="yellow.500" fontWeight="600" fontSize="3rem">{continent.languages}</Heading>
                <Text color="gray.500" fontWeight="600" fontSize="1.5rem">línguas</Text>
              </Box>
              <Box align="center">
                <Heading color="yellow.500" fontWeight="600" fontSize="3rem">{continent.most100Cities}</Heading>
                <Text color="gray.500" fontWeight="600" fontSize="1.5rem">cidades +100</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
        <Stack>
          <Heading>Cidades +100</Heading>
          <SimpleGrid columns={4} py="2.5rem" spacing="3rem">
            {continent.cities.map(city => {
              return(<CityCard city={city} />);
            })}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Stack>
  );
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
      paths: [],
      fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const res = await fetch(`http://localhost:3004/continents?slug=${String(slug)}`);
  const data = await res.json();
  const continent = data[0];

  return {
    props: {
      continent
    }
  }
}
