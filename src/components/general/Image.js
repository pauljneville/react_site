
import styled from '@emotion/styled'

const Image = styled.img`
    width: ${p => p.mobileWidth ? p.mobileWidth : '120px'};
    height: ${p => p.mobileHeight ? p.mobileHeight : '120px'};
    object-fit: contain;
    alt: ${p => p.alt ? p.alt : 'image'};
    border-radius: ${p => p.borderRadius};
    box-shadow: ${p => p.boxShadow};
    border: 1px solid #c5c5c5;
    transition: all 0.5s ease-out;
    background-color: white;

    @media screen and (min-width: 500px) {
        width: ${p => p.width ? p.width : '120px'};
        height: ${p => p.height ? p.height : '120px'};
    }
`;

export default Image;