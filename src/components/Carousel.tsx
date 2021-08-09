import { Flex, Heading, Text } from '@chakra-ui/react';

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, A11y]);

export function Carousel() {
  return(
    <Flex w="100%" align="center" justify="center" mx="auto" pb="50px">
      <Flex justify="center" w="90%">
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          style={{width: '100%', flex: '1'}}
        >
          <SwiperSlide>
            <Flex justify="center">
              <Flex
                w="100%"
                h="450px"
                align="center"
                justify="center"
                direction="column"
                bgImage="url('/europe.svg')"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                textAlign="center"
              >
                <Heading color="gray.100" fontWeight="700" fontSize="48px" pb="16px">Europa</Heading>
                <Text color="gray.100" fontWeight="700" fontSize="24px">O continente mais antigo</Text>
              </Flex>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex justify="center">
              <Flex
                w="100%"
                h="450px"
                align="center"
                justify="center"
                direction="column"
                bgImage="url('/africa.jpg')"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                textAlign="center"
              >
                <Heading color="gray.100" fontWeight="700" fontSize="48px" pb="16px">Africa</Heading>
                <Text color="gray.100" fontWeight="700" fontSize="24px">A maior espetáculo de vida selvagem no mundo</Text>
              </Flex>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex justify="center">
              <Flex
                w="100%"
                h="450px"
                align="center"
                justify="center"
                direction="column"
                bgImage="url('/asia.jpg')"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                textAlign="center"
              >
                <Heading color="gray.100" fontWeight="700" fontSize="48px" pb="16px">Ásia</Heading>
                <Text color="gray.100" fontWeight="700" fontSize="24px">Das estepes nômades do Cazaquistão às ruas frenéticas de Hanoi</Text>
              </Flex>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex justify="center">
              <Flex
                w="100%"
                h="450px"
                align="center"
                justify="center"
                direction="column"
                bgImage="url('/northAmerica.jpg')"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                textAlign="center"
              >
                <Heading color="gray.100" fontWeight="700" fontSize="48px" pb="16px">América do Norte</Heading>
                <Text color="gray.100" fontWeight="700" fontSize="24px">Florestas majestosas, desertos e metrópoles pulsantes</Text>
              </Flex>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex justify="center">
              <Flex
                w="100%"
                h="450px"
                align="center"
                justify="center"
                direction="column"
                bgImage="url('/southAmerica.jpg')"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                textAlign="center"
              >
                <Heading color="gray.100" fontWeight="700" fontSize="48px" pb="16px">América do Sul</Heading>
                <Text color="gray.100" fontWeight="700" fontSize="24px">Picos Andinos, floresta amazônica, geleiras da Patagônia, ruínas incas</Text>
              </Flex>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex justify="center">
              <Flex
                w="100%"
                h="450px"
                align="center"
                justify="center"
                direction="column"
                bgImage="url('/oceania.jpg')"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                textAlign="center"
              >
                <Heading color="gray.100" fontWeight="700" fontSize="48px" pb="16px">Oceania</Heading>
                <Text color="gray.100" fontWeight="700" fontSize="24px">Remota, bela e amigável</Text>
              </Flex>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Flex>
  );
}
