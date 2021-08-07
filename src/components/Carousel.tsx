import { Flex, Heading, Text } from '@chakra-ui/react';

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, A11y]);

export function Carousel() {
  return(
    <Flex w="100%" align="center" justify="center" h="450px" mx="auto" pb="100px">
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
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
      </Flex>
    </Flex>
  );
}
