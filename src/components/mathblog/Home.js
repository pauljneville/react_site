import { Centered } from "./components/Centered";
import { Helmet } from "react-helmet-async";
import NavBar from "./NavBar";
import { Flex } from "./components/Flex";

const Home = () => {
    const Helmeted = () => {
        return (
            <Helmet>
                <title>Math Blog</title>
                <link rel="icon" href="../assets/mathblog/favicon.ico" />
                <meta property="og:title" name="title" content="Math Blog" />
                <meta property="og:description" name="description" content="Math Blog" />
                <meta property="og:url" name="canonical" content="%PUBLIC_URL%/mathblog" />
                <meta property="og:image" name="image" content="../assets/mathblog/og-image.png" />
            </Helmet>
        );
    };
    return (
        <>
            <Helmeted />
            <Flex flexDirection='column'>
                <h1>Math Blog</h1>
                <NavBar />
                <Centered>
                    <h1>Home</h1>
                </Centered>
            </Flex>
        </>
    );
}

export default Home;