import { Flex, Stack, Text } from "@chakra-ui/react";


export function PickContinentText () {
  return (
    <Stack pb="35px" align="center" w="100%">
      <Flex>
        <Flex w="90px" borderBottom="3px solid" borderColor="gray.500" mb="56px"/>
      </Flex>
      <Text fontSize="36" fontWeight="500" color="gray.500" align="center">Vamos nessa?<br />Então escolha seu continente</Text>
    </Stack>
  );
}
