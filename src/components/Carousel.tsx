import { Flex, Heading, Link, Text } from '@chakra-ui/react';

import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export function Carousel() {
  return(
    <Flex w="100%" align="center" justify="center" mx="auto" pb="50px">
      <Flex justify="center" w={["100%", "100%", "90%"]}>
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          style={{width: '100%', flex: '1'}}
        >
          <SwiperSlide>
            <Link href="/continent/europe">
              <Flex justify="center">
                <Flex
                  w="100%"
                  h={["15.5rem", "22rem", "28rem"]}
                  align="center"
                  justify="center"
                  direction="column"
                  bgImage="url('/europe.svg')"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  bgPosition="center"
                  textAlign="center"
                >
                  <Heading color="gray.100" fontWeight="700" fontSize={["1.5rem", "2.25rem", "3rem"]} pb="16px">Europa</Heading>
                  <Text color="gray.100" fontWeight="700" fontSize={["0.875rem", "1.2rem", "1.5rem"]}>O continente mais antigo</Text>
                </Flex>
              </Flex>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/continent/africa">
              <Flex justify="center">
                <Flex
                  w="100%"
                  h={["15.5rem", "22rem", "28rem"]}
                  align="center"
                  justify="center"
                  direction="column"
                  bgImage="url('/africa.jpg')"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  bgPosition="center"
                  textAlign="center"
                >
                  <Heading color="gray.100" fontWeight="700" fontSize={["1.5rem", "2.25rem", "3rem"]} pb="16px">Africa</Heading>
                  <Text color="gray.100" fontWeight="700" fontSize={["0.875rem", "1.2rem", "1.5rem"]}>A maior espetáculo de vida selvagem no mundo</Text>
                </Flex>
              </Flex>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/continent/asia">
              <Flex justify="center">
                <Flex
                  w="100%"
                  h={["15.5rem", "22rem", "28rem"]}
                  align="center"
                  justify="center"
                  direction="column"
                  bgImage="url('/asia.jpg')"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  bgPosition="center"
                  textAlign="center"
                >
                  <Heading color="gray.100" fontWeight="700" fontSize={["1.5rem", "2.25rem", "3rem"]} pb="16px">Ásia</Heading>
                  <Text color="gray.100" fontWeight="700" fontSize={["0.875rem", "1.2rem", "1.5rem"]}>Das estepes nômades do Cazaquistão às ruas frenéticas de Hanoi</Text>
                </Flex>
              </Flex>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/continent/north-america">
              <Flex justify="center">
                <Flex
                  w="100%"
                  h={["15.5rem", "22rem", "28rem"]}
                  align="center"
                  justify="center"
                  direction="column"
                  bgImage="url('/northAmerica.jpg')"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  bgPosition="center"
                  textAlign="center"
                >
                  <Heading color="gray.100" fontWeight="700" fontSize={["1.5rem", "2.25rem", "3rem"]} pb="16px">América do Norte</Heading>
                  <Text color="gray.100" fontWeight="700" fontSize={["0.875rem", "1.2rem", "1.5rem"]}>Florestas majestosas, desertos e metrópoles pulsantes</Text>
                </Flex>
              </Flex>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/continent/south-america">
              <Flex justify="center">
                <Flex
                  w="100%"
                  h={["15.5rem", "22rem", "28rem"]}
                  align="center"
                  justify="center"
                  direction="column"
                  bgImage="url('/southAmerica.jpg')"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  bgPosition="center"
                  textAlign="center"
                >
                  <Heading color="gray.100" fontWeight="700" fontSize={["1.5rem", "2.25rem", "3rem"]} pb="16px">América do Sul</Heading>
                  <Text color="gray.100" fontWeight="700" fontSize={["0.875rem", "1.2rem", "1.5rem"]}>Picos Andinos, floresta amazônica, geleiras da Patagônia, ruínas incas</Text>
                </Flex>
              </Flex>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/continent/australia-and-pacific">
              <Flex justify="center">
                <Flex
                  w="100%"
                  h={["15.5rem", "22rem", "28rem"]}
                  align="center"
                  justify="center"
                  direction="column"
                  bgImage="url('/oceania.jpg')"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  bgPosition="center"
                  textAlign="center"
                >
                  <Heading color="gray.100" fontWeight="700" fontSize={["1.5rem", "2.25rem", "3rem"]} pb="16px">Oceania</Heading>
                  <Text color="gray.100" fontWeight="700" fontSize={["0.875rem", "1.2rem", "1.5rem"]}>Remota, bela e amigável</Text>
                </Flex>
              </Flex>
            </Link>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Flex>
  );
}
