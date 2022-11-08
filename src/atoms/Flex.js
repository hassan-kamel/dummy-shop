import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: ${(props) => props.justifay || 'center'};
  align-items: ${(props) => props.align || 'center'};
  height: ${(props) => props.height || 'initial'};
  gap: 2em;
  & > * {
    flex: 1;
  }

  @media (max-width: 76.8rem) {
    flex-direction: column;
  }
`;
