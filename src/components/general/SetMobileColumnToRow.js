
import styled from '@emotion/styled'
import SetList from "./SetList";

const SetMobileColumnToRow = styled(SetList)`
    flex-direction: column;

    @media screen and (min-width: 1000px) {
        flex-direction: row;
    }
`;

export default SetMobileColumnToRow;