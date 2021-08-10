import { Box, Center, Flex, Heading, Img, SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
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
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return(
    <Stack w="100%">
      { isWideVersion
        ? <Flex
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
        : <Flex
          w="100%"
          h={["9.4rem", "20rem"]}
          justify="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          bgImage={`url(${continent.image})`}
        >
          <Center>
            <Heading color="gray.50" fontWeight="600" fontSize={["1.75rem", "2.4rem"]}>{continent.name}</Heading>
          </Center>
        </Flex>
      }

      <Stack px={["1rem", "4.5rem", "8.75rem"]} py={["1.5rem", "3.25rem", "5rem"]} w="100%">
        <SimpleGrid columns={isWideVersion ? 2 : 1} spacing={["1rem", "2.5rem", "4rem"]} pb={["1.5rem", "3.25rem", ]}>
          <Box>
            <Text textAlign="justify">{continent.description}</Text>
          </Box>
          <Box>
            <SimpleGrid columns={3}>
              <Box align="center">
                <Heading color="yellow.500" fontWeight="600" fontSize={["1.5rem", "2.25rem", "3rem"]}>{continent.totalCountries}</Heading>
                <Text color="gray.500" fontWeight="600" fontSize={["1rem", "1.5rem"]}>países</Text>
              </Box>
              <Box align="center">
                <Heading color="yellow.500" fontWeight="600" fontSize={["1.5rem", "2.25rem", "3rem"]}>{continent.languages}</Heading>
                <Text color="gray.500" fontWeight="600" fontSize={["1rem", "1.5rem"]}>línguas</Text>
              </Box>
              <Box align="center">
                <Heading color="yellow.500" fontWeight="600" fontSize={["1.5rem", "2.25rem", "3rem"]}>{continent.most100Cities}</Heading>
                <Text color="gray.500" fontWeight="600" fontSize={["1rem", "1.5rem"]}>cidades +100</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
        <Stack align={ isWideVersion ? "flex-start" : "center"}>
          <Heading alignItems="flex-start">Cidades +100</Heading>
          <SimpleGrid columns={isWideVersion ? 4 : 1} py={["1rem", "2.5rem"]} spacing={["1.5rem", "2.25rem", "3rem"]}>
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
