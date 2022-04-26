import Row from "./Row";
import SizedBox from "./SizedBox";
import LiftHover from "./LiftHover";
import Header3 from './Header3';

const Chip = ({ label, color }) => {
    return (
        <Row gap="0em" alignItems='start'>
            <SizedBox
                width="0.5rem"
                height="0.5rem"
                color={color}
                borderRadius="40%"
                marginTop="1.0rem"
            />
            <LiftHover>
                <Header3>{label}</Header3>
            </LiftHover>
        </Row>
    );
}

export default Chip;