import styled from 'styled-components';

export default styled.input`
  margin-block: 0.5em;
  padding: 0.5em 1em;
  /* border: ; */
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  /* box-shadow: -0.1rem -0.1rem 0.3rem rgba(0, 0, 0, 0.5); */
  &:focus {
    outline: 0.1rem solid ${(props) => props.theme.colors.eleven};
  }
  font-size: 1em;
`;
