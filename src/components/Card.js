import { Row } from "./StandardComponents";


export const Card = (props) => {
    return (
        <>
            <Row gap="1rem">
                {props.children}
            </Row>
        </>
    );
};