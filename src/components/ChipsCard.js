import { GridColumns, Column, Header2, Chip } from "./StandardComponents";

export const ChipsCard = ({ title, chips }) => {
    return (
        <Column>
            <Header2>{title}</Header2>
            <GridColumns>
                {/* <Row gap="1rem"> */}
                {chips.map((chip, index) => {
                    return (
                        <Chip key={index}
                            label={chip.label}
                            color={chip.color}
                        />
                    );
                })}
                {/* </Row> */}
            </GridColumns>
        </Column>
    );
}