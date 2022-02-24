
import { React, useRef } from 'react';
import styled from '@emotion/styled'

import { Helmet } from 'react-helmet-async';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

import { PortfolioNavBar } from "./PortfolioNavBar";
import { TitleCard } from "./TitleCard";
import { SizedBox, Column, Row, Header1, ScrollRef } from './StandardComponents';
import { TextCard } from "./TextCard";
import { ChipsCard } from './ChipsCard';

export const Portfolio = () => {
    const Helmeted = () => {
        return (
            <Helmet>
                <title>Paul Neville</title>
                <link rel="icon" href="../assets/favicon.ico" />
                <meta property="og:title" name="title" content="Paul Neville" />
                <meta property="og:description" name="description" content="Portfolio and resume of Paul Neville" />
                <meta property="og:url" name="canonical" content="%PUBLIC_URL%/" />
            </Helmet>
        )
    };

    SwiperCore.use([Autoplay, Pagination, Navigation]);

    const Wrapper = styled.div`
        padding-top: 1.2rem;
        justify-self: center;
        width: 60vw;
        min-width: 800px;
        height: calc(100vh - 1.2rem);
        background-color: #efefef;
    `;

    const skillsTitleRef = useRef(null);
    const experienceTitleRef = useRef(null);
    const projectsTitleRef = useRef(null);
    const educationTitleRef = useRef(null);
    const contactTitleRef = useRef(null);
    const navItems = [
        {
            title: 'Skills',
            ref: skillsTitleRef,
            content: <ChipsCard title='Languages / Frameworks' />
        },
        { title: 'Experience', ref: experienceTitleRef, content: <SizedBox height="1000px" /> },
        { title: 'Projects', ref: projectsTitleRef, content: <SizedBox height="1000px" /> },
        { title: 'Education', ref: educationTitleRef, content: <SizedBox height="1000px" /> },
        { title: 'Contact', ref: contactTitleRef, content: <SizedBox height="1000px" /> },
    ];
    const skillItems = [
        { label: 'C, C++', color: 'black' },
        { label: 'C#, Java', color: 'black' },
        { label: 'Dart, Flutter', color: 'black' },
        { label: 'Javascript, React', color: 'black' },
        { label: 'HTML, CSS, Emotion', color: 'black' },
        { label: 'Velocity, Markdown, Handlebars', color: 'black' },
        { label: 'SQL', color: 'black' },
        { label: 'noSQL', color: 'black' },
        { label: 'Node, Express', color: 'black' },
        { label: 'Python', color: 'black' },
        { label: 'Jest', color: 'black' },
        { label: 'UI/UX, Accessibility', color: 'black' },
    ];
    const toolItems = [
        { label: 'Unity', color: 'black' },
        { label: 'Firebase', color: 'black' },
        { label: 'Google Cloud Platform', color: 'black' },
        { label: 'Git, MEGA', color: 'black' },
        { label: 'PDF forms', color: 'black' },
        { label: 'Notion, Trello', color: 'black' },
        { label: 'Wordpress', color: 'black' },
        { label: 'CI/CD', color: 'black' },
        { label: 'Graphic Design', color: 'black' },
        { label: 'Figma, SVG, icons', color: 'black' },
        { label: 'Google Business, Admin, SEO', color: 'black' },
        { label: 'Postman', color: 'black' },
        { label: 'RestAPI', color: 'black' },
    ];

    return (
        <Wrapper>
            <Helmeted />
            <PortfolioNavBar navItems={navItems} />
            <Column alignItems='center' gap='2rem'>
                <TitleCard />
                <SizedBox width='80%'>
                    <TextCard />
                </SizedBox>
                <Column justifyContent='space-around' alignItems='center'>
                    <Row alignItems="center">
                        <ScrollRef ref={skillsTitleRef} />
                        <Header1>Skills</Header1>
                    </Row>
                    <Column gap='1rem'>
                        <ChipsCard title='Languages / Frameworks'
                            chips={skillItems}
                        />
                        <ChipsCard title='Tools / Services'
                            chips={toolItems}
                        />
                    </Column>
                </Column>
            </Column>
        </Wrapper>
    );
}





