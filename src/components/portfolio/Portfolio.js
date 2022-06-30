
import { React, useRef } from 'react';
import styled from '@emotion/styled'

import GitHubLogo from '../../assets/portfolio/github.svg';
import LinkedInLogo from '../../assets/portfolio/linkedin.svg';

import { Helmet } from 'react-helmet-async';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

import PortfolioNavBar from "./PortfolioNavBar";
import TitleCard from "./TitleCard";
// SizedBox, Column, Row, Header1, ScrollRef, LiftHover, EndScroll
import SizedBox from '../general/SizedBox';
import Column from '../general/Column';
import Row from '../general/Row';
import Header1 from '../general/Header1';
import ScrollRef from '../general/ScrollRef';
import LiftHover from '../general/LiftHover';
import EndScroll from '../general/EndScroll';

import TextCard from "./TextCard";
import ChipsCard from './ChipsCard';
import ProjectCard from './ProjectCard';
import OverviewCard from './OverviewCard';
// import ExpansionCard from './ExpansionCard';
// import { FeatureCard } from './FeatureCard';
import ScrollToTop from '../general/ScrollToTop';

import cdtLogo from '../../assets/portfolio/cdt-overview.png';
import cdtWebsite from '../../assets/portfolio/cdt-website.png';
import cdtScheduler from '../../assets/portfolio/cdt-scheduler.png';
import cdtGraphicDesign from '../../assets/portfolio/cdt-graphic-design.png';
import cdtMockup from '../../assets/portfolio/cdt-mockup.png';
import cdtIPhone from '../../assets/portfolio/cdt-iphone.png';
import cdtDigitalProcesses from '../../assets/portfolio/cdt-digital-processes.png';
import cdtStaffTraining from '../../assets/portfolio/cdt-staff-training.png';
import supermarketShot from '../../assets/portfolio/supermarket.png';
import dogblogShot from '../../assets/portfolio/dogblog.png';
import bugtrackerShot from '../../assets/portfolio/bugtracker.png';
import Card from './Card';
import ScrollToTopOnLoad from '../general/ScrollToTopOnLoad';

const Portfolio = () => {
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
        { label: 'HTML, CSS', color: 'black' },
        { label: 'Javascript, Typescript', color: 'black' },
        { label: 'React, Next', color: 'black' },
        { label: 'SQL, NoSQL', color: 'black' },
        { label: 'Node, Express', color: 'black' },
        { label: 'API development', color: 'black' },
        { label: 'Dart, Flutter', color: 'black' },
        { label: 'C, C++', color: 'black' },
        { label: 'C#, Java', color: 'black' },
        { label: 'Python', color: 'black' },
        { label: 'Jest', color: 'black' },
        { label: 'UI/UX, Accessibility', color: 'black' },
    ];
    const toolItems = [
        { label: 'Firebase', color: 'black' },
        { label: 'Git, CI/CD', color: 'black' },
        { label: 'Unity', color: 'black' },
        { label: 'Postman', color: 'black' },
        { label: 'Twilio', color: 'black' },
        { label: 'Google Cloud Platform', color: 'black' },
    ];
    const bugtracker = {
        name: "Bug Tracker",
        title: "Bug / Issue Tracker",
        image: bugtrackerShot,
        alt: "screenshot of bug tracker web app",
        details: [
            "This is a web app to track tasks and issues in a software development",
            "project and to assign users who are governed by user roles that determine",
            "their access to functions.",
        ],
        url: "https://bug-tracker-one.vercel.app/"
    }
    const cdt = {
        name: "Chevron Dog Training",
        title: "Dog Training, Walking and Pet Sitting",
        url: "https://chevrondogtraining.com",
        image: cdtLogo,
        alt: "logo for chevron dog training",
        details: ["Chevron Dog Training was established 2 years ago; operating in the Illawarra area.",
            "Scheduling appointments was manual, as was invoicing and client management, preventing further growth. Web presence was limited to Facebook and Instagram.",
            "Client information was recorded and filed on paper forms.",
        ],
        features: [
            {
                image: cdtWebsite,
                alt: "screenshot of chevron dog training website",
                title: "Responsive Website",
                details: [
                    "Developed a website to create a desktop and mobile experience to clients seeking information about staff and services offered, schedule calls and book appointments.",
                    "Design elements created to provide consistent branding across platforms.",
                ],
            },
            {
                image: cdtScheduler,
                alt: "screenshot of online scheduling system",
                title: "Client Scheduling System",
                details: [
                    "Portal for clients to book  appointments online and manage invoices.",
                    "- client profile information",
                    "- appointment scheduling",
                    "- invoicing and payments",
                    "- staff availability",
                    "- service locations and features",
                    "- email templates and triggers",
                    "- policy forms",
                    "- theme consistency and icon design",
                ],
            },
            {
                image: cdtDigitalProcesses,
                alt: "screenshot of PDF client form",
                title: "Digital Processes",
                details: [
                    "Client information and appointment details recorded on touch devices.",
                    "Backed-up and shared between staff using cloud services.",
                    "Data exported for use in aggragation, statistics, and marketing purposes.",
                ],
            },
            {
                image: cdtIPhone,
                alt: "screenshot of phone application",
                title: "Google Play / iPhone App",
                details: [
                    "Education app to provide supplementary information to clients and to provide example audio content to demonstrate key behaviours.",
                ],
            },
            {
                image: cdtStaffTraining,
                alt: "screenshot of video recording using OBS",
                title: "Staff Training Content",
                details: [
                    "Video content and documentation created to provide effective staff training regarding scheduling system features, website content, client form and Google Suite features. OBS, Carnac, Steps Recorder.",
                ],
            },
            {
                image: cdtGraphicDesign,
                alt: "screenshot of SVG graphic design using Figma",
                title: "Graphic Design",
                details: [
                    "Provided graphic design elements and iconography for use throughout the website, google services and scheduling system to maintain a consistent branding across various platforms.",
                ],
            },
            {
                image: cdtMockup,
                alt: "screenshot of website mockup using Figma",
                title: "Mockup",
                details: [
                    "User interface mockup created using Figma to demonstrate website look and feel to stakeholders prior to commencing website build.",
                    "Used to visualise client requirements and meet requested outcomes.",
                ],
            },
        ],
    };
    const supermarket = {
        name: "Super Click and Collect",
        title: "Game Jam Prototype",
        image: supermarketShot,
        alt: "a character in a supermarket picking groceries",
        details: [
            "Simple 'Click and Collect' prototype game made in 48 hours to act as a proof of concept for further development.",
            "The game focused around order fulfillment in a supermarket environment.",
            "Featured procedurally generated levels and randomised stock items.",
        ],
    }
    const dogblog = {
        name: "Lali's Dog Blog",
        title: "Blog with Profile",
        image: dogblogShot,
        alt: "screenshot of dog blog site",
        details: [
            "An example of a blogging website with Firebase storage, user profiles and authentication.",
            "Blogs can be created and updated. They use markdown with remark and mathjax to display formatting and math symbols.",
            "The website also includes an admin panel for management of posts.",
        ],
        url: "https://paulneville.com.au/dogblog"
    }

    return (
        <ScrollToTopOnLoad>
            <Wrapper>
                <Helmeted />
                <PortfolioNavBar navItems={navItems} />
                <ScrollToTop />
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
                            {/* Bug Tracker */}
                            <ProjectCard title={bugtracker.name}>
                                <OverviewCard
                                    image={bugtracker.image}
                                    title={bugtracker.title}
                                    details={bugtracker.details}
                                    url={bugtracker.url}
                                />
                            </ProjectCard>
                            {/* Chevron Dog Training */}
                            <ProjectCard title={cdt.name}>
                                <OverviewCard
                                    image={cdt.image}
                                    title={cdt.title}
                                    details={cdt.details}
                                    url={cdt.url}
                                />
                                {/* <ExpansionCard title="Key Features" items={cdt.features} /> */}
                            </ProjectCard>
                            {/* Dog Blog */}
                            <ProjectCard title={dogblog.name}>
                                <OverviewCard
                                    image={dogblog.image}
                                    title={dogblog.title}
                                    details={dogblog.details}
                                    url={dogblog.url}
                                />
                            </ProjectCard>
                            {/* Supermarket Prototype */}
                            <ProjectCard title={supermarket.name}>
                                <OverviewCard
                                    image={supermarket.image}
                                    title={supermarket.title}
                                    details={supermarket.details}
                                />
                            </ProjectCard>
                        </Column>
                    </Column>
                    <Column justifyContent='space-around' alignItems='center' width='80%' gap='2rem'>
                        <Column>
                            <ScrollRef ref={contactTitleRef} />
                            <Header1>Contact</Header1>
                        </Column>
                        <Column justifyContent='space-around' alignItems='center' gap='1rem'>
                            <LiftHover>
                                <Card>
                                    <a href="https://github.com/pauljneville" target="_blank"
                                        rel="noopener noreferrer"><img height="40rem" src={GitHubLogo} alt="GitHub logo" /></a>
                                </Card>
                            </LiftHover>
                            <LiftHover>
                                <Card>
                                    <a href="https://www.linkedin.com/in/paul-neville-60598b139/" target="_blank"
                                        rel="noopener noreferrer"><img height="40rem" src={LinkedInLogo} alt="LinkedIn logo" /></a>
                                </Card>
                            </LiftHover>
                        </Column>
                    </Column>
                    <EndScroll height="100vh" />
                    <Row justifyContent="center"
                        backgroundColor="#fff"
                        color="#000"
                    >
                        🏁
                    </Row>
                </Column>
            </Wrapper >
        </ScrollToTopOnLoad>
    );
}

export default Portfolio;