
import styled from "@emotion/styled";

const TextSet = styled.div`
    border-radius: 1em;
    box-shadow: 0px 1px 4px #c5c5c5;
    background-color: white;
    padding: 1.6rem 2rem;
    p {
        padding: 0.3rem 0rem;
        font-weight: 600;
        font-size: 0.9rem;
    }
`;

export const TextCard = () => {
    return (
        <TextSet>
            <p>
                Uses full stack development skills to build web and mobile applications and utilise technology to support business growth and opportunities.
            </p>
            <p>
                Experience in UI and UX design, graphic design, web, mobile and server side technologies, prioritising clean, modular code that is aimed at ease of understanding and communication with other team members.
            </p>
            <p>
                I enjoy creating tutorials and other learning content to help others grow and understand processes and technologies. I regularly explore new technologies to implement features and concepts.
            </p>
        </TextSet>
    );
};