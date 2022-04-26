
import { useRef } from 'react';
import styled from '@emotion/styled';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { ReactComponent as Arrow } from "../assets/portfolio/arrow.svg";

export const Carousel = ({ list, slide, slidesPerView }) => {
    // <Carousel list={emojiList} slide={EmojiSlide} slidesPerView={1} />
    // <Carousel list={carouselProjects} slide={ProjectSlide} />
    const SwiperPagination = styled.div`
        .swiper-container-horizontal>.swiper-pagination-bullets,
        .swiper-pagination-custom,
        .swiper-pagination-fraction {
            bottom: 0px;
            left: 0%;
            width: 100%;
        }
        .swiper-pagination-bullet {
            background-color: #000007;
            border: 2px solid #fff;
        }
        cursor: grab;
        &:active {
            cursor: grabbing;
        }
        
    `;
    const SwiperPrevNavigation = styled.div`
        display: flex;
        align-items: center;
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
        cursor: pointer;
        transform: rotateY(180deg);
        svg {
            cursor: pointer;
            fill: #fff;
        }
        & svg:hover {
            fill: #000;
            stroke: #fff;
            stroke-width: 2;
        }
    `;
    const SwiperNextNavigation = styled.div`
        display: flex;
        align-items: center;
        position: relative;
        top: 0;
        bottom: 0;
        right: 0;
        cursor: pointer;
        svg {
            cursor: pointer;
            fill: #fff;
        }
        & svg:hover {
            fill: #000;
            stroke: #fff;
            stroke-width: 2;
        }
    `;
    const Row = styled.div`
        display: flex;
        justify-content: space-between;
    `;
    const Column = styled.div`
        display: flex;
        flex-direction: column;
        align-items: ${p => p.alignItems};
    `;
    const swiperRef = useRef(null);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <Column alignItems="space-between">
            <Row>
                <SwiperPrevNavigation ref={navigationPrevRef}> {/*class="swiper-button-prev"*/}
                    <Arrow />
                </SwiperPrevNavigation>
                <SwiperNextNavigation ref={navigationNextRef}> {/*class="swiper-button-next"*/}
                    <Arrow />
                </SwiperNextNavigation>
            </Row>
            <SwiperPagination
                onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
                onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
            >
                <Swiper
                    ref={swiperRef}
                    slidesPerView={slidesPerView ? slidesPerView : 2}
                    onSlideChange={() => { }}
                    onSwiper={() => { }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    speed={1000}
                    pagination={{ clickable: true }}
                    // navigation={{
                    //     prevEl: navigationPrevRef.current,
                    //     nextEl: navigationNextRef.current,
                    // }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                >
                    {list.map((object, index) =>
                        slide(object, index)
                    )}
                </Swiper>
            </SwiperPagination >
        </Column>
    );
}

export const EmojiSlide = (object, index) => {
    const Emoji = styled.div`
        font-size: 4rem;
    `;
    return (
        <SwiperSlide key={index}>
            <Emoji>{object}</Emoji>
        </SwiperSlide>);
}

export const ProjectSlide = (object, index) => {
    const Header = styled.h1`
        padding: 8px 8px;
        font-size: ${p => p.textSize};
    `;
    const Image = styled.img`
        /*width: 80vw;*/
        max-width: 500px;
        /*align-self: center;*/
        border-radius: 4px;
        box-shadow: 1px 1px 6px #777;
    `;
    return (
        <SwiperSlide key={index}>
            <Header>{object.title}</Header>
            <Image src={object.image} alt={`pic-${index}`} />
        </SwiperSlide >
    );
}