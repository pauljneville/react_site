
import Row from "../general/Row";
import Column from "../general/Column";
import Fixed from "../general/Fixed";
import SizedBox from "../general/SizedBox";
import ScrollLink from "../general/ScrollLink";

const PortfolioNavBar = ({ navItems }) => {

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
                <Row alignItems="center"
                    height="var(--navbar-height)"
                    gap="3rem"
                    padding="0 0 0 1.5rem"
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

export default PortfolioNavBar;