import { Box, Flex, HStack, Img, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

import { GoBackLink } from './GoBackLink';

export function Header() {
  const { asPath } = useRouter();

  return(
    <Flex
      as="header"
      w="100%"
      h={["3rem", "4.5rem", "6.25rem"]}
      align="center"
      bg="gray.50"
      mx="auto"
      py="1rem"
    >
      <HStack spacing="1rem" w="100%">
        <Box ml={["1rem", "2rem", "3rem"]} width="33.3%">
          <GoBackLink currentPath={asPath} />
        </Box>
        <Box align="center" width="33.3%"><Img src="/logo.svg" /></Box>
        <Box width="33.3%"></Box>
      </HStack>
    </Flex>
  );
}
