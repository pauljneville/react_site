
import styled from '@emotion/styled'

export const SetList = styled.div`
    display: flex;
    flex-direction: ${p => p.flexDirection ? p.flexDirection : 'row'};
    align-items: ${p => p.alignItems ? p.alignItems : 'start'};
    justify-content: ${p => p.justifyContent ? p.justifyContent : 'start'};
    padding: ${p => p.padding};
    gap: ${p => p.gap};
    
    width: ${p => p.width};
    height: ${p => p.height};
    position: relative;
    top: ${p => p.top}
    right: ${p => p.right}
    bottom: ${p => p.bottom}
    left: ${p => p.left}
    background-color: ${p => p.backgroundColor};
    &>*{
        color: ${p => p.color};
    }
`;
export const Row = styled(SetList)`
    flex-direction: row;
`;
export const Column = styled(SetList)`
    flex-direction: column;
`;
export const GridColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(${p => p.columnCount ? p.columnCount : 3}, 1fr);
    width: var(--boady-max-width);
    gap: ${p => p.gap};
`;
export const Fixed = styled.div`
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
export const SizedBox = styled.div`
    filter: blur(${p => p.blur ? p.blur : 0});
    width: ${p => p.width};
    height: ${p => p.height};
    background-color: ${p => p.color};
    border-radius: ${p => p.borderRadius};
    margin-top: ${p => p.marginTop};
    box-shadow: ${p => p.boxShadow};
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
export const Avatar = styled.img`
    width: ${p => p.width ? p.width : '120px'};
    height: ${p => p.height ? p.height : '120px'};
    alt: ${p => p.alt ? p.alt : 'avatar'};
    border-radius: ${p => p.borderRadius ? p.borderRadius : '50%'};
    box-shadow: ${p => p.boxShadow ? p.boxShadow : '1px 1px 6px #777'};
`;
export const Image = styled.img`
    width: ${p => p.width ? p.width : '120px'};
    height: ${p => p.height ? p.height : '120px'};
    object-fit: contain;
    alt: ${p => p.alt ? p.alt : 'image'};
    border-radius: ${p => p.borderRadius};
    box-shadow: ${p => p.boxShadow};
    border: 1px solid #c5c5c5;
    transition: all 0.5s ease-out;
    background-color: white;
`;
export const HoverImage = styled.div`
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
`;

export const TitleHeader = styled.h1`
    padding: ${p => p.padding ? p.padding : '0px 0px'};
    font-size: ${p => p.textSize ? p.textSize : '2.4em'};
    font-weight: ${p => p.fontWeight ? p.fontWeight : '500'};
@media screen and (min-width: 800px) {
    padding: ${p => p.padding ? p.padding : '0px 0px'};
    font-size: ${p => p.textSize ? p.textSize : '2.4em'};
    font-weight: ${p => p.fontWeight ? p.fontWeight : '500'};
}
`;
export const Header1 = styled.h1`
    padding: ${p => p.padding ? p.padding : '0px 0px'};
    font-size: ${p => p.textSize ? p.textSize : '1.8em'};
    font-weight: ${p => p.fontWeight ? p.fontWeight : '500'};
@media screen and (min-width: 800px) {
    padding: ${p => p.padding ? p.padding : '0px 0px'};
    font-size: ${p => p.textSize ? p.textSize : '2.4em'};
    font-weight: ${p => p.fontWeight ? p.fontWeight : '500'};
}
`;
export const Header2 = styled.h2`
padding: ${p => p.padding ? p.padding : '0px 0px'};
font-size: ${p => p.textSize ? p.textSize : '1.4em'};
font-weight: ${p => p.fontWeight ? p.fontWeight : '600'};
@media screen and (min-width: 800px) {
    padding: ${p => p.padding ? p.padding : '0px 0px'};
    font-size: ${p => p.textSize ? p.textSize : '1.6em'};
    font-weight: ${p => p.fontWeight ? p.fontWeight : '600'};
}
`;
export const Header3 = styled.h3`
padding: ${p => p.padding ? p.padding : '0px 0px'};
font-size: ${p => p.textSize ? p.textSize : '1.2em'};
font-weight: ${p => p.fontWeight ? p.fontWeight : '500'};
@media screen and (min-width: 800px) {
    padding: ${p => p.padding ? p.padding : '0px 0px'};
    font-size: ${p => p.textSize ? p.textSize : '1.2em'};
    font-weight: ${p => p.fontWeight ? p.fontWeight : '500'};
}
`;
export const LiftHover = styled.div`
    box-shadow: 0px 0px 0px #777;
    bottom: 0rem;
    border-radius: 0%;
    transition: all 0.5s ease-out;
    &:hover {
        box-shadow: 1px 1px 6px #ccc;
        bottom: 0.25rem;
        border-radius: 2%;
    }
`;

export const Chip = ({ label, color }) => {
    return (
        <Row gap="0.5em" alignItems='start'>
            <SizedBox
                width="0.5rem"
                height="0.5rem"
                color={color}
                borderRadius="40%"
                marginTop="0.5em"
            />
            <LiftHover>
                <Header3>{label}</Header3>
            </LiftHover>
        </Row>
    );
}

export const SetMobileColumnToRow = styled(SetList)`
    flex-direction: column;

    @media screen and (min-width: 800px) {
        flex-direction: row;
    }
`;
