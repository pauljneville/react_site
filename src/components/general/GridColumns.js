
import styled from '@emotion/styled'

const GridColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(${p => p.columnCount ? p.columnCount : 3}, 1fr);
    width: var(--boady-max-width);
    gap: ${p => p.gap};
`;

export default GridColumns;