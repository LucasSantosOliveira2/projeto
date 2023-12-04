import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';

interface ContainerProps {
    isVisible: boolean;
}
export const Container = styled.div<ContainerProps>`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  color:white;
  transition: .5s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;
    margin-top: 100px;
    height: 100%;
    color: white;
    a{
    text-decoration: none; 
    color: white;  
    }
  }

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    > svg {
      transform: rotate(0deg);
    }

    nav {
      transform: scale(1);
    }
  `}
`

export const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit;
`