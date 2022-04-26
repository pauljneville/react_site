
import styled from '@emotion/styled'

const Fixed = styled.div`
    background-color: white;
    opacity: ${p => p.opacity};
    filter: blur(${p => p.blur ? p.blur : 0});

    position: fixed;
    z-index: 12;
    width: 100%;
    box-shadow: 0px 1px 3px #c5c5c5;
    top: ${p => p.top};
    left: ${p => p.left};
    bottom: ${p => p.bottom};
    right: ${p => p.right};
`;

export default Fixed;