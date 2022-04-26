
import styled from '@emotion/styled'

const Header2 = styled.h2`
    padding: ${p => p.padding ? p.padding : '0px 0px'};
    font-size: ${p => p.textSize ? p.textSize : '1.4em'};
    font-weight: ${p => p.fontWeight ? p.fontWeight : '600'};
    
    @media screen and (min-width: 800px) {
        padding: ${p => p.padding ? p.padding : '0px 0px'};
        font-size: ${p => p.textSize ? p.textSize : '1.6em'};
        font-weight: ${p => p.fontWeight ? p.fontWeight : '600'};
    }
`;

export default Header2;