import styled from 'styled-components';

export default styled.a`
  text-decoration: none !important;
  color: ${(props) => props.theme.colors.one};
  text-transform: capitalize;
  font-style: italic;
  font-size: 2rem;
  font-weight: 300;
  position: relative;
  cursor: pointer;
  &:hover {
    &::after {
      transform: scale(1);
    }
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 120%;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: ${(props) => props.theme.colors.one};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
`;
