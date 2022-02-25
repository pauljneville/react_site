import { Header2, Column, Row, Image } from "./StandardComponents";

export const OverviewCard = ({ image, alt, title, detail }) => {
    return (
        <Row gap="2rem" alignItems="start">
            <Image src={image}
                alt={alt}
                width="150px"
                height="150px" />
            <Column>
                <Header2>{title}</Header2>
                <p>{detail}</p>
            </Column>
        </Row>
    );
}