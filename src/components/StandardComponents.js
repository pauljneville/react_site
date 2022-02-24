
import styled from '@emotion/styled'

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: ${p => p.alignItems ? p.alignItems : 'start'};
    justify-content: ${p => p.justifyContent ? p.justifyContent : 'start'};
    gap: ${p => p.gap};
    flex-wrap: wrap;
`;
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${p => p.alignItems ? p.alignItems : 'start'};
    justify-content: ${p => p.justifyContent ? p.justifyContent : 'start'};
    min-width: ${p => p.minWidth};
    gap: ${p => p.gap};
`;
export const Fixed = styled.div`
    background-color: white;
    position: fixed;
    width: 100%;
    box-shadow: 0px 1px 3px #c5c5c5;
    top: ${p => p.top ? p.top : '0'};
    left: ${p => p.top ? p.top : '0'};
    bottom: ${p => p.top ? p.top : 'auto'};
    right: ${p => p.top ? p.top : 'auto'};
`;
export const SizedBox = styled.div`
    width: ${p => p.width};
    height: ${p => p.height};
    background-color: ${p => p.color};
    border-radius: ${p => p.borderRadius};
`;
export const ScrollLink = styled.div`
    background-color: #fff;
    font-size: --navbar-font-height;
    font-weight: 500;
    padding: val(--navbar-padding) 0rem;
    cursor: pointer;
`;
export const ScrollRef = styled.div`
    position: relative;
    top: var(--scroll-ref-offset);
`;
export const Image = styled.img`
    width: ${p => p.width ? p.width : '120px'};
    height: ${p => p.height ? p.height : '120px'};
    border-radius: ${p => p.borderRadius ? p.borderRadius : '50%'};
    box-shadow: ${p => p.boxShadow ? p.boxShadow : '1px 1px 6px #777'};
`;
export const Header1 = styled.h1`
    padding: ${p => p.padding ? p.padding : '0px 0px'};
    font-size: ${p => p.textSize ? p.textSize : '2.4em'};
    font-weight: ${p => p.fontWeight ? p.fontWeight : '500'};
`;
export const Header2 = styled.h2`
    padding: ${p => p.padding ? p.padding : '0px 0px'};
    font-size: ${p => p.textSize ? p.textSize : '1.2em'};
    font-weight: ${p => p.fontWeight ? p.fontWeight : '600'};
`;
export const Header3 = styled.h3`
    padding: ${p => p.padding ? p.padding : '0px 0px'};
    font-size: ${p => p.textSize ? p.textSize : '1.2em'};
    font-weight: ${p => p.fontWeight ? p.fontWeight : '500'};
`;

export const Chip = ({ label, color }) => {
    return (
        <Row gap="0.5em" alignItems='center'>
            <SizedBox width="0.5rem" height="0.5rem" color={color} borderRadius="40%" />
            <Header3>{label}</Header3>
        </Row>
    );
}