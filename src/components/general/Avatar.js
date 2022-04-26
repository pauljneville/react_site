
import styled from '@emotion/styled'

const Avatar = styled.img`
    width: ${p => p.width ? p.width : '120px'};
    height: ${p => p.height ? p.height : '120px'};
    alt: ${p => p.alt ? p.alt : 'avatar'};
    border-radius: ${p => p.borderRadius ? p.borderRadius : '50%'};
    box-shadow: ${p => p.boxShadow ? p.boxShadow : '1px 1px 6px #777'};
`;

export default Avatar;