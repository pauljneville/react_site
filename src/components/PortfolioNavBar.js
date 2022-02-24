import {
    Row,
    Column,
    Fixed,
    SizedBox,
    ScrollLink,
} from "./StandardComponents";

export const PortfolioNavBar = ({ navItems }) => {

    const onLinkClick = (itemRef) => {
        itemRef.current.scrollIntoView();
    };

    return (
        <Column>
            <Fixed>
                <Row justifyContent='space-around'>
                    {navItems.map((item, index) => {
                        return (
                            <ScrollLink key={index} onClick={() => onLinkClick(item.ref)}>
                                {item.title}
                            </ScrollLink>
                        );
                    })}
                </Row>
            </Fixed>
            <SizedBox height="calc(var(--navbar-height))" />
        </Column>
    );
}

