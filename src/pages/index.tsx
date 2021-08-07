import { Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";

export default function Home() {
  return (
    <Flex
      w="100wh"
      h={`${100-24}vh`}
    >
      <Banner />
    </Flex>
  )
}
