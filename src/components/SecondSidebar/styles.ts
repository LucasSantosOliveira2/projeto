import styled from "styled-components";
import { Link } from 'react-router-dom';
import { HiMiniBackspace } from "react-icons/hi2";

type WrapperProps = {
  $visible: boolean;
}

export const Wrapper = styled.aside<WrapperProps>`
  position: absolute;
  top: 0;
  width: 300px;
  height: 100vh;
  background-color: #111C44;
  padding-top: 40px;
  border-right: 1px solid white;
  transition: all 0.2s;
  transform: translateX(${(props) => (props.$visible ? '0' : '-100%')});
  @media screen and (max-width: 1200px) {
    display: none;
  }
`

export const ContainerButton = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 10px 15px;
    color: white;
`
export const IconBack = styled(HiMiniBackspace)`
  font-size: 1.5rem;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 1.625rem;
    line-height: 1.6rem;
    font-weight: 700;
    color:${(props) => props.theme.colors.white};
    padding-bottom: 30px;
`

export const Separator = styled.div`
  width: 100%;
  height: 1px; 
  background: rgba(255, 255, 255, 0.10);
    margin: 10px 0; 
`

export const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit;
`
