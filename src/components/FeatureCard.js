import { Column, Row, Image, Header3 } from "./StandardComponents";

export const FeatureCard = ({ image, alt, title, detail }) => {
    return (
        <Row gap="2rem">
            <Image src={image} alt={alt} width="300px" height="155px" />
            <Column>
                <Header3>{title}</Header3>
                <p>{detail}</p>
            </Column>
        </Row>
    );
};