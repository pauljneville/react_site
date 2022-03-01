
import { React, useRef } from 'react';
import styled from '@emotion/styled'

import { Helmet } from 'react-helmet-async';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

import { PortfolioNavBar } from "./PortfolioNavBar";
import { TitleCard } from "./TitleCard";
import { SizedBox, Column, Row, Header1, ScrollRef } from './StandardComponents';
import { TextCard } from "./TextCard";
import { ChipsCard } from './ChipsCard';
import { ProjectCard } from './ProjectCard';
import { OverviewCard } from './OverviewCard';
import { ExpansionCard } from './ExpansionCard';
import { FeatureCard } from './FeatureCard';

import cdtLogo from '../assets/portfolio/cdt-logo.png';
import cdtWebsite from '../assets/portfolio/cdt-website.png';
import cdtScheduler from '../assets/portfolio/cdt-scheduler.png';
import cdtGraphicDesign from '../assets/portfolio/cdt-graphic-design.png';
import cdtMockup from '../assets/portfolio/cdt-mockup.png';
import cdtIPhone from '../assets/portfolio/cdt-iphone.png';
import cdtDigitalProcesses from '../assets/portfolio/cdt-digital-processes.png';
import cdtStaffTraining from '../assets/portfolio/cdt-staff-training.png';
import supermarketShot from '../assets/portfolio/supermarket.png';
import { Card } from './Card';

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
        height: calc(100vh - 1.2rem);
        background-color: #fff;
        width: 90vw;

        @media screen and (min-width: 800px) {
            width: 60vw;
            max-width: var(--body-max-width);
        }
    `;

    const skillsTitleRef = useRef(null);
    const projectsTitleRef = useRef(null);
    const contactTitleRef = useRef(null);
    const navItems = [
        {
            title: 'Skills',
            ref: skillsTitleRef,
            content: <ChipsCard title='Languages / Frameworks' />
        },
        { title: 'Projects', ref: projectsTitleRef, content: <SizedBox height="1000px" /> },
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
        title: "Dog Training, Walking and Pet Sitting",
        image: cdtLogo,
        alt: "logo for chevron dog training",
        detail: `Chevron Dog Training was established 2 years ago; operating in the Illawarra area. 
                Scheduling appointments was manual, as was invoicing and client management, 
                preventing further growth. Web presence was limited to Facebook and Instagram. 
                Client information was recorded and filed on paper forms.`,
        features: [
            {
                image: cdtWebsite,
                alt: "screenshot of chevron dog training website",
                title: "Responsive Website",
                detail: `Developed a website to create a desktop and mobile experience to clients 
                        seeking information about staff and services offered, schedule calls and 
                        book appointments. 
                        Design elements created to provide consistent branding across platforms.`,
            },
            {
                image: cdtScheduler,
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
                image: cdtDigitalProcesses,
                alt: "logo for chevron dog training",
                title: "Digital Processes",
                detail: `Client information and appointment details recorded on touch devices.
                        Backed-up and shared between staff using cloud services.
                        Data exported for use in aggragation, statistics, and marketing purposes.`,
            },
            {
                image: cdtIPhone,
                alt: "logo for chevron dog training",
                title: "Google Play / iPhone App",
                detail: `Education app to provide supplementary information to clients and 
                        to provide example audio content to demonstrate key behaviours.`,
            },
            {
                image: cdtStaffTraining,
                alt: "logo for chevron dog training",
                title: "Staff Training Content",
                detail: `Video content and documentation created to provide effective staff 
                        training regarding scheduling system features, website content, client 
                        form and Google Suite features.
                        OBS, Carnac, Steps Recorder`,
            },
            {
                image: cdtGraphicDesign,
                alt: "logo for chevron dog training",
                title: "Graphic Design",
                detail: `Provided graphic design elements and iconography for use throughout 
                        the website, google services and scheduling system to maintain a 
                        consistent branding across various platforms.`,
            },
            {
                image: cdtMockup,
                alt: "logo for chevron dog training",
                title: "Mockup",
                detail: `User interface mockup created using Figma to demonstrate website 
                        look and feel to stakeholders prior to commencing website build.
                        Used to visualise client requirements and meet requested outcomes.`,
            },
        ],
    };
    const supermarket = {
        name: "Super Click and Collect",
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
            <Column alignItems='center' justifyContent='center' gap='2rem'>
                <TitleCard />
                <SizedBox width='80%'>
                    <TextCard />
                </SizedBox>
                <Column justifyContent='space-around' alignItems='center' width='80%'>
                    <Row justifyContent="center">
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
                    <Row justifyContent="center">
                        <ScrollRef ref={projectsTitleRef} />
                        <Header1>Projects</Header1>
                    </Row>
                    <SizedBox width="20px" height="20px" />
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
                <Column justifyContent='space-around' alignItems='center' width='80%'>
                    <Row justifyContent="center">
                        <ScrollRef ref={contactTitleRef} />
                        <Header1>Contact</Header1>
                    </Row>
                    <Column gap='2rem'>
                        <Card></Card>
                    </Column>
                </Column>
                <SizedBox height="100vh" />
                <Row justifyContent="center"
                    backgroundColor="#fff"
                    color="#000"
                >
                    Made with React
                </Row>
            </Column>
        </Wrapper>
    );
}





