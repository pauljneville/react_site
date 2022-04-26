
import styled from '@emotion/styled'

const SizedBox = styled.div`
    filter: blur(${p => p.blur ? p.blur : 0});
    width: ${p => p.width};
    height: ${p => p.height};
    min-width: ${p => p.width};
    min-height: ${p => p.height};
    background-color: ${p => p.color};
    border-radius: ${p => p.borderRadius};
    margin-top: ${p => p.marginTop};
    box-shadow: ${p => p.boxShadow};
`;

export default SizedBox;