
import { Header1, Header2, Row, Column, Image } from "./StandardComponents";
import profile from "../assets/profile/profile.jpg";

export const TitleCard = () => {
    return (
        <Row justifyContent='center' alignItems='center' gap='2em'>
            <Image src={profile} alt={"photo of paul"} />
            <Column alignItems='center'>
                <Header1>Paul Neville</Header1>
                <Header2>Software Development</Header2>
                <Header2>Business Development</Header2>
            </Column>
        </Row>
    );
}