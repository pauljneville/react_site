import { FeatureCard } from "./FeatureCard";
import { Header2, Row } from "./StandardComponents";
import styled from '@emotion/styled';
import { useState } from "react";
import expansionArrow from "../assets/portfolio/expansion-arrow.svg";

export const ExpansionCard = ({ title, items }) => {
    const [isExpanded, setExpanded] = useState(false);
    const toggleExpanded = () => {
        return isExpanded ? setExpanded(false) : setExpanded(true);
    };

    const Collapsible = styled.div`
        color: #444;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
    `;
    const Arrow = styled.div`
        transition: all 1s ease-in;
        transform: rotate(${p => p.rotate ? p.rotate : 0});
    `;

    return (
        <>
            <Collapsible>
                <Row alignItems="center" gap="1rem" onClick={toggleExpanded}>
                    <Arrow rotate={isExpanded ? "0deg" : "-90deg"}><img src={expansionArrow} alt="expansion arrow" /></Arrow>
                    <Header2>{title}</Header2>
                </Row>
            </Collapsible>
            {isExpanded ? items.map((item, index) => {
                return (
                    <FeatureCard
                        key={index}
                        image={item.image}
                        alt={item.alt}
                        title={item.title}
                        detail={item.detail}
                    />
                );
            }) : <></>}
        </>
    );
};