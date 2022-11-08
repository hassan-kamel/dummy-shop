import styled from 'styled-components';

export default styled.button`
  margin-block: 0.5em;
  padding: 0.5em 1em;
  /* border: ; */
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  box-shadow: -0.1rem -0.1rem 0.3rem rgba(0, 0, 0, 0.5);

  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.5);
  }
  transition: box-shadow 0.1s ease;
  cursor: pointer;
  background-image: linear-gradient(
    120deg,
    ${(props) => props.theme.colors.eight},
    ${(props) => props.theme.colors.six}
  );
  color: ${(props) => props.theme.colors.ten};
  font-size: 1em;
`;
