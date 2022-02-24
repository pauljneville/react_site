
import {
    Header1,
    Row,
    Column,
    ScrollRef,
} from "./StandardComponents";

export const Sections = ({ navItems }) => {
    return (
        <Column>
            {navItems.map((item, index) => {
                return (
                    <Row key={index}>
                        <ScrollRef ref={item.ref} />
                        <Header1>{item.title}</Header1>
                        {item.content}
                    </Row>
                );
            })}
        </Column>
    );
}