
import Header2 from "../general/Header2";
import Column from "../general/Column";
import SetMobileColumnToRow from "../general/SetMobileColumnToRow";
import Image from "../general/Image";

const OverviewCard = ({ image, alt, title, details, url }) => {
    return (
        <SetMobileColumnToRow gap="2rem" alignItems="start">
            <Image src={image}
                alt={alt}
                width="300px"
                height="186px"
                mobileWidth="300px"
                mobileHeight="186px" />
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

export default OverviewCard;