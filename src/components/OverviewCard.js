import { Header2, Column, SetMobileColumnToRow, Image } from "./StandardComponents";

export const OverviewCard = ({ image, alt, title, details, url }) => {
    return (
        <SetMobileColumnToRow gap="2rem" alignItems="start">
            <Image src={image}
                alt={alt}
                width="150px"
                height="150px" />
            <Column>
                <Header2>{title}</Header2>
                {details.map((detail) => (
                    <p>{detail}</p>
                ))}
                {url && <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>}
            </Column>
        </SetMobileColumnToRow>
    );
}