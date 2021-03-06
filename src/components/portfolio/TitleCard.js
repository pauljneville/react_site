
import TitleHeader from "../general/TitleHeader";
import Header2 from "../general/Header2";
import SetMobileColumnToRow from "../general/SetMobileColumnToRow";
import Column from "../general/Column";
import Avatar from "../general/Avatar";

import profile from "../../assets/profile/profile-greyscale.jpg";

const TitleCard = () => {
    return (
        <SetMobileColumnToRow justifyContent='center' alignItems='center' gap='2em'>
            <Avatar src={profile}
                alt={"photo of paul"}
                width="150px"
                height="150px"
                boxShadow="1px 1px 6px #888"
            />
            <Column alignItems='center'>
                <TitleHeader>Paul Neville</TitleHeader>
                <Header2>Software Development</Header2>
                <Header2>Business Development</Header2>
            </Column>
        </SetMobileColumnToRow>
    );
}

export default TitleCard;