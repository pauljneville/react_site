import styled from '@emotion/styled'
import GridColumns from '../general/GridColumns';
import Column from '../general/Column';
import Header2 from '../general/Header2';
import Chip from '../general/Chip';

const ChipsCard = ({ title, chips }) => {

    const Mobile2to3GridColumns = styled(GridColumns)`
    grid-template-columns: repeat(${p => p.columnCount ? p.columnCount : 2}, 1fr);

        @media screen and (min-width: 800px) {
            grid-template-columns: repeat(${p => p.columnCount ? p.columnCount : 3}, 1fr);
        }
    `;
    return (
        <Column>
            <Header2>{title}</Header2>
            <Mobile2to3GridColumns>
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
            </Mobile2to3GridColumns>
        </Column>
    );
}

export default ChipsCard;