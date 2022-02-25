import { Column, Row, HoverImage, Image, Header3, SizedBox } from "./StandardComponents";

export const FeatureCard = ({ image, alt, title, detail }) => {
    return (<HoverImage src={image}
        alt={alt}
        width="300px"
        height="155px"
    >
        <Row gap="2rem">
            <SizedBox
                width="300px"
                height="155px"
            >
                <Image src={image}
                    alt={alt}
                    width="300px"
                    height="155px"
                ></Image>
            </SizedBox>
            <Column className="detail-card">
                <Header3>{title}</Header3>
                <p>{detail}</p>
            </Column>
        </Row>
    </HoverImage>
    );
};