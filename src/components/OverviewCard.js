import { Header2, Column, SetMobileColumnToRow, Image } from "./StandardComponents";

export const OverviewCard = ({ image, alt, title, detail }) => {
    return (
        <SetMobileColumnToRow gap="2rem" alignItems="start">
            <Image src={image}
                alt={alt}
                width="150px"
                height="150px" />
            <Column>
                <Header2>{title}</Header2>
                <p>{detail}</p>
            </Column>
        </SetMobileColumnToRow>
    );
}