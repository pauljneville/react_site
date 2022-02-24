import { Column, Row, Header2, Chip } from "./StandardComponents";

export const ChipsCard = ({ title, chips }) => {
    return (
        <Column gap='0.5rem'>
            <Header2>{title}</Header2>
            <Row gap="1rem">
                {chips.map((chip, index) => {
                    return (
                        <Chip key={index}
                            label={chip.label}
                            color={chip.color}
                        />
                    );
                })}
            </Row>
        </Column>
    );
}