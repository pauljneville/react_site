
import { Header1, Header2, Row, Column, Avatar } from "./StandardComponents";
import profile from "../assets/profile/profile-greyscale.jpg";

export const TitleCard = () => {
    return (
        <Row justifyContent='center' alignItems='center' gap='2em'>
            <Avatar src={profile}
                alt={"photo of paul"}
                width="150px"
                height="150px"
                boxShadow="1px 1px 6px #888"
            />
            <Column alignItems='center'>
                <Header1>Paul Neville</Header1>
                <Header2>Software Development</Header2>
                <Header2>Business Development</Header2>
            </Column>
        </Row>
    );
}