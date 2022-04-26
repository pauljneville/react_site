
import styled from '@emotion/styled'

const HoverImage = styled.div`
    @media screen and (min-width: 800px) {
        &:hover {
            z-index: 11;
            img {
                background-color: white;
                position: relative;
                width: calc(${p => p.width} * 2);
                height: calc(${p => p.height} * 2);
            }
            .detail-card {
                background-color: white;
                opacity: 0;
            }
        }
    }
`;

export default HoverImage;