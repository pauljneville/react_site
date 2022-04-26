import Row from "../general/Row";

const Card = (props) => {
    return (
        <>
            <Row gap="1rem">
                {props.children}
            </Row>
        </>
    );
};

export default Card;