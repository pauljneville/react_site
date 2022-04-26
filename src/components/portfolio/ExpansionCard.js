import FeatureCard from "./FeatureCard";
import Header2 from "../general/Header2";
import Row from "../general/Row";

import styled from '@emotion/styled';
import { useState } from "react";
import expansionArrow from "../../assets/portfolio/expansion-arrow.svg";

const ExpansionCard = ({ title, items }) => {
    const [isExpanded, setExpanded] = useState(false);
    const [rotation, setRotation] = useState(-90);

    const toggleExpanded = () => {
        if (isExpanded) {
            setExpanded(false);
            setRotation(-90);
        } else {
            setExpanded(true);
            setRotation(0);
        }
    };

    const Collapsible = styled.div`
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        user-select: none;
    `;
    const Arrow = styled.div`
        transition: transform 1s ease-in;
        transform: rotate(${p => p.degrees}deg);
    `;

    return (
        <>
            <Collapsible>
                <Row alignItems="center" gap="1rem" onClick={toggleExpanded}>
                    <Arrow degrees={rotation} >
                        <img src={expansionArrow} alt="expansion arrow" />
                    </Arrow>
                    <Header2>{title}</Header2>
                </Row>
            </Collapsible>
            {
                isExpanded ? items.map((item, index) => {
                    return (
                        <FeatureCard
                            key={index}
                            image={item.image}
                            alt={item.alt}
                            title={item.title}
                            details={item.details}
                        />
                    );
                }) : <></>
            }
        </>
    );
};

export default ExpansionCard;