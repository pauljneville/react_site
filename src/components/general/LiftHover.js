
import styled from '@emotion/styled'

const LiftHover = styled.div`
    box-shadow: 0px 0px 0px #777;
    bottom: 0rem;
    border-radius: 0%;
    transition: all 0.5s ease-out;
    padding: 0.5em 1em;
    &:hover {
        box-shadow: 1px 1px 6px #ccc;
        position: relative;
        bottom: 0.25rem;
        border-radius: 2%;
        padding: 0.5em 1em;
    }
`;

export default LiftHover;