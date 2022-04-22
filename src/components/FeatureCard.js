import { Column, SetMobileColumnToRow, HoverImage, Image, Header3, SizedBox } from "./StandardComponents";

export const FeatureCard = ({ image, alt, title, details, url }) => {
    return (<HoverImage src={image}
        alt={alt}
        width="300px"
        height="155px"
    >
        <SetMobileColumnToRow gap="2rem">
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
                {details.map((detail) => (
                    <p>{detail}</p>
                ))}
                {url && <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>}
            </Column>
        </SetMobileColumnToRow>
        <SizedBox width="20px" height="20px" />
    </HoverImage>
    );
};