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
            <Fixed opacity="0.96"
                height="var(--navbar-height)"
                top='0'
                left='0'
            >
                <Row justifyContent='space-around'
                    alignItems="center"
                    height="var(--navbar-height)"
                >
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

