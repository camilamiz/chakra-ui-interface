import { Flex, Stack } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { TravelCategories } from "../components/TravelCategories";

export default function Home() {
  return (
    <Flex
      w="100wh"
      h={`${100-24}vh`}
    >
      <Stack w="100%">
        <Banner />
        <TravelCategories />
      </Stack>
    </Flex>
  )
}
