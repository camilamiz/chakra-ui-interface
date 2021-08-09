import { Box, Flex, Img, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

import { GoBackLink } from './GoBackLink';

export function Header() {
  const { asPath } = useRouter();

  return(
    <Flex
      as="header"
      w="100%"
      h="24"
      align="center"
      bg="gray.50"
      mx="auto"
    >
      <SimpleGrid columns={3} spacing={10} w="100%">
        <Box ml="8.75rem" align="left" pt="0.5rem">
          <GoBackLink currentPath={asPath} />
        </Box>
        <Box align="center"><Img src="/logo.svg" /></Box>
        <Box></Box>
      </SimpleGrid>
    </Flex>
  );
}
