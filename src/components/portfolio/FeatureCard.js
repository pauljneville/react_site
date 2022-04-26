import SetMobileColumnToRow from '../general/SetMobileColumnToRow';
import SizedBox from '../general/SizedBox';
import Image from '../general/Image';
import Column from '../general/Column';
import Header3 from '../general/Header3';

const FeatureCard = ({ image, alt, title, details, url }) => {
    return (
        <>
            <SetMobileColumnToRow gap="2rem">
                <SizedBox
                    width="400px"
                    height="248px"
                    mobileWidth="300px"
                    mobileHeight="186px"
                >
                    <Image src={image}
                        alt={alt}
                        width="300px"
                        height="186px"
                        mobileWidth="300px"
                        mobileHeight="186px"
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
        </>
    );
};

export default FeatureCard;