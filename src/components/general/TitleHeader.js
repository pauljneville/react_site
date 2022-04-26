
import styled from '@emotion/styled'

const TitleHeader = styled.h1`
    padding: ${p => p.padding ? p.padding : '0px 0px'};
    font-size: ${p => p.textSize ? p.textSize : '2.4em'};
    font-weight: ${p => p.fontWeight ? p.fontWeight : '500'};
@media screen and (min-width: 800px) {
    padding: ${p => p.padding ? p.padding : '0px 0px'};
    font-size: ${p => p.textSize ? p.textSize : '2.4em'};
    font-weight: ${p => p.fontWeight ? p.fontWeight : '500'};
}
`;

export default TitleHeader;