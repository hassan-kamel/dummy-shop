import styled from 'styled-components';

export default styled.div`
  height: ${(props) => `${props.height}px` || 'auto'};
`;
