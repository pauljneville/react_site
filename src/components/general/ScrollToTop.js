
import ToTopArrow from "../../assets/portfolio/arrow-stem-black.svg";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const ScrollToTop = () => {
    const [buttonOpacity, setButtonOpacity] = useState(0);
    // const [buttonDisplay, setButtonDisplay] = useState("none");

    const listenToScroll = () => {
        if (window.scrollY > 300) {
            setButtonOpacity(1);
        } else {
            setButtonOpacity(0);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, []);

    const BottomRight = styled.div`
        position: fixed;
        bottom: 20px;
        right: 20px;
        transition: 1s;
        z-index: 10;
    `;

    return (
        <BottomRight>
            <button onClick={() => { window.scrollTo(0, 0); }}
                style={{
                    opacity: buttonOpacity,
                    pointerEvents: buttonOpacity ? "auto" : "none",
                }}
            >
                <img src={ToTopArrow} alt="scroll to top" width="50px" height="50px" />
            </button>
        </BottomRight>
    );
}

export default ScrollToTop;