
import { React, useRef } from 'react';
import styled from '@emotion/styled'

import { Helmet } from 'react-helmet-async';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

import { PortfolioNavBar } from "./PortfolioNavBar";
import { TitleCard } from "./TitleCard";
import { SizedBox, Column, Row, Header1, ScrollRef, Fixed } from './StandardComponents';
import { TextCard } from "./TextCard";
import { ChipsCard } from './ChipsCard';
import { ProjectCard } from './ProjectCard';
import { OverviewCard } from './OverviewCard';
import { ExpansionCard } from './ExpansionCard';
import { FeatureCard } from './FeatureCard';

import cdtLogo from '../assets/portfolio/cdt-logo.png';
import supermarketShot from '../assets/portfolio/supermarket.png';

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
        { label: 'C#', color: 'black' },
        { label: 'Java', color: 'black' },
        { label: 'Dart, Flutter', color: 'black' },
        { label: 'Javascript, React', color: 'black' },
        { label: 'HTML, CSS, Emotion', color: 'black' },
        { label: 'SQL', color: 'black' },
        { label: 'noSQL', color: 'black' },
        { label: 'Node, Express', color: 'black' },
        { label: 'API development', color: 'black' },
        { label: 'Python', color: 'black' },
        { label: 'Jest', color: 'black' },
        { label: 'UI/UX, Accessibility', color: 'black' },
        { label: 'Velocity, Markdown, Handlebars', color: 'black' },
    ];
    const toolItems = [
        { label: 'Firebase', color: 'black' },
        { label: 'Git, CI/CD', color: 'black' },
        { label: 'Notion, Trello', color: 'black' },
        { label: 'Wordpress', color: 'black' },
        { label: 'Graphic Design', color: 'black' },
        { label: 'Figma, SVG, icons', color: 'black' },
        { label: 'PDF forms', color: 'black' },
        { label: 'Unity', color: 'black' },
        { label: 'Postman', color: 'black' },
        { label: 'Twilio', color: 'black' },
        { label: 'Google Cloud Platform', color: 'black' },
        { label: 'Google Business, Admin, SEO', color: 'black' },
    ];
    const cdt = {
        name: "Chevron Dog Training",
        title: "Dog Training, Walking, Pet Sitting",
        image: cdtLogo,
        alt: "logo for chevron dog training",
        detail: `Chevron Dog Training was established 2 years ago; operating in the Illawarra area. 
                Scheduling appointments was manual, as was invoicing and client management, 
                preventing further growth. Web presence was limited to Facebook and Instagram. 
                Client information was recorded and filed on paper forms.`,
        features: [
            {
                image: cdtLogo,
                alt: "logo for chevron dog training",
                title: "Responsive Website",
                detail: `Developed a website to create a desktop and mobile experience to clients 
                        seeking information about staff and services offered, schedule calls and 
                        book appointments. 
                        Design elements created to provide consistent branding across platforms.`,
            },
            {
                image: cdtLogo,
                alt: "logo for chevron dog training",
                title: "Client Scheduling System",
                detail: `Portal for clients to book online.
                        - client profile information
                        - appointment scheduling
                        - invoicing and payments
                        - staff availability
                        - service locations and features
                        - email templates and triggers
                        - policy forms
                        - theme consistency and icon design`,
            },
            {
                image: cdtLogo,
                alt: "logo for chevron dog training",
                title: "Google Business",
                detail: `Google Business profile created and optimised to 
                        improve Google search result to drive customer awareness 
                        and engagement and leave reviews.`,
            },
            {
                image: cdtLogo,
                alt: "logo for chevron dog training",
                title: "Digital Processes",
                detail: `Client information and appointment details recorded on touch devices.
                        Backed-up and shared between staff using cloud services.
                        Data exported for use in aggragation, statistics, and marketing purposes.`,
            },
            {
                image: cdtLogo,
                alt: "logo for chevron dog training",
                title: "Google Play / iPhone App",
                detail: `Education app to provide supplementary information to clients and 
                        to provide example audio content to demonstrate key behaviours.`,
            },
            {
                image: cdtLogo,
                alt: "logo for chevron dog training",
                title: "Staff Training Content",
                detail: `Video content and documentation created to provide effective staff 
                        training regarding scheduling system features, website content, client 
                        form and Google Suite features.
                        OBS, Carnac, Steps Recorder`,
            },
            {
                image: cdtLogo,
                alt: "logo for chevron dog training",
                title: "Graphic Design",
                detail: `Provided graphic design elements and iconography for use through 
                        the website, google services and scheduling system to maintain a 
                        consistent branding across various platforms.`,
            },
            {
                image: cdtLogo,
                alt: "logo for chevron dog training",
                title: "Mockup",
                detail: `User interface mockup created using Figma to demonstrate website 
                        look and feel to stakeholders prior to commencing website build.
                        Used to visualise client requirements and meet requested outcomes.`,
            },
        ],
    };
    const supermarket = {
        name: "Supermarket Click and Collect",
        title: "Game Jam Prototype",
        image: supermarketShot,
        alt: "an character in a supermarket picking groceries",
        detail: `Simple 'Click and Collect' prototype game made in 48 hours to act as a proof 
                of concept for further development.
                The game focused around order fulfillment in a supermarket environment.
                Featured procedurally generated levels and randomised stock items.`,
    }

    return (
        <Wrapper>
            <Helmeted />
            <PortfolioNavBar navItems={navItems} />
            <Column alignItems='center' gap='2rem'>
                <TitleCard />
                <SizedBox width='80%'>
                    <TextCard />
                </SizedBox>
                <Column justifyContent='space-around' alignItems='center' width='80%'>
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
                <Column justifyContent='space-around' alignItems='center' width='80%'>
                    <Row alignItems="center">
                        <ScrollRef ref={experienceTitleRef} />
                        <Header1>Campaigns / Projects</Header1>
                    </Row>
                    <Column gap='2rem'>
                        {/* Chevron Dog Training */}
                        <ProjectCard title={cdt.name}>
                            <OverviewCard
                                image={cdt.image}
                                title={cdt.title}
                                detail={cdt.detail}
                            />
                            <ExpansionCard title="Key Features" items={cdt.features} />
                        </ProjectCard>
                        {/* Supermarket Prototype */}
                        <ProjectCard title={supermarket.name}>
                            <FeatureCard
                                image={supermarket.image}
                                title={supermarket.title}
                                detail={supermarket.detail}
                            />
                        </ProjectCard>
                    </Column>
                </Column>
                <SizedBox height="500px" />
                <Row justifyContent="center"
                    backgroundColor="#000"
                    color="#fff"
                >
                    Paul Neville
                </Row>
            </Column>
        </Wrapper>
    );
}





