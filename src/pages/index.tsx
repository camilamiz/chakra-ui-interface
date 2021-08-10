import { Flex, Stack, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { TravelCategories } from "../components/TravelCategories";
import { Carousel } from "../components/Carousel";

export default function Home() {
  return (
    <Flex w="100wh" h={`${100-24}vh`}>
      <Stack w="100%">
        <Banner />
        <TravelCategories />
        <Flex pb="35px" mb="25px" verticalAlign="center" justify="center" w="100%">
          <Stack align="center" justify="center">
            <Flex>
              <Flex w="90px" borderBottom="3px solid" borderColor="gray.500" mb={["1.5rem", "2.5rem", "3.5rem"]}/>
            </Flex>
            <Text fontSize={["1.25rem", "1.75rem", "2.25rem"]} fontWeight="500" color="gray.500" align="center">Vamos nessa?<br />Então escolha seu continente</Text>
          </Stack>
        </Flex>
        <Carousel />
      </Stack>
    </Flex>
  )
}
