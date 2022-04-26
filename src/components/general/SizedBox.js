
import styled from '@emotion/styled'

const SizedBox = styled.div`
    filter: blur(${p => p.blur ? p.blur : 0});
    width: ${p => p.mobileWidth};
    height: ${p => p.mobileHeight};
    min-width: ${p => p.mobileWidth};
    min-height: ${p => p.mobileHeight};
    background-color: ${p => p.color};
    border-radius: ${p => p.borderRadius};
    margin-top: ${p => p.marginTop};
    box-shadow: ${p => p.boxShadow};

    @media screen and (min-width: 500px) {
        width: ${p => p.width};
        height: ${p => p.height};
    }
`;

export default SizedBox;