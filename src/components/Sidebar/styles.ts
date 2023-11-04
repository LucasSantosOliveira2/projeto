import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Wrapper = styled.aside`
    width: 300px;
    height: 100%;
    background-color:#111C44;
    padding-top: 40px;
    border-right: 1px solid white;
    transition: all 0.2s;
    @media screen and (max-width: 1200px) {
        display: none;
    }
`
export const ButtonCreateProject = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 16px;
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  background: #7551FF;
  border: none;
  margin-left: 75px;
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover{
      transform: scale(1.1);
    }
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
`;

export const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit;
`;