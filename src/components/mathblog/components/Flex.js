import styled from "@emotion/styled";

export const Flex = styled.div`
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