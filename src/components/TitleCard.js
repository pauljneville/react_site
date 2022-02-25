
import { Header1, Header2, Row, Column, Avatar } from "./StandardComponents";
import profile from "../assets/profile/profile.jpg";

export const TitleCard = () => {
    return (
        <Row justifyContent='center' alignItems='center' gap='2em'>
            <Avatar src={profile} alt={"photo of paul"} />
            <Column alignItems='center'>
                <Header1>Paul Neville</Header1>
                <Header2>Software Development</Header2>
                <Header2>Business Development</Header2>
            </Column>
        </Row>
    );
}