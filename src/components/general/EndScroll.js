
import styled from '@emotion/styled';
import SizedBox from './SizedBox';

const EndScroll = styled(SizedBox)`
    min-height: calc(${p => p.height} - 24rem);
    height: calc(${p => p.height} - 24rem);
    max-height: calc(${p => p.height} - 24rem);
`;

export default EndScroll;