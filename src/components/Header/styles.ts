import styled from "styled-components"
import { Link } from 'react-router-dom';


export const Wrapper = styled.header`
    display: flex;
    padding: 15px 24px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: ${(props) => props.theme.colors.dark};
    color:${(props) => props.theme.colors.white};
    @media screen and (min-width: 768px) {
        padding: 30px 100px;
    }
`
export const LoginButton = styled.button`
    width: 80px;
    height: 48px;
    border-radius: 16px;
    color: ${(props) => props.theme.colors.white};
    font-size: 1rem;
    font-weight: 700;
    border: none;
    outline:none;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.purple};
        @media screen and (min-width: 768px) {
            width: 120px;
        }
        &:hover{
            transform: scale(1.2);
        }
`

export const Menu = styled.ul`
    display: none;
    @media screen and (min-width: 768px) {
        list-style: none;
        margin: 0;
        padding: 0 5%;
        width: 100%;
        justify-content: space-evenly;
        display: flex;
        overflow: hidden;
        font-size: 1.1rem;
        font-weight: 600;
        li a {
            display: block;
            text-align: center;
            text-decoration: none;
            outline: none;
            color:${(props) => props.theme.colors.white};
        }
        li:hover{
            cursor: pointer;
            transform: scale(1.2);
            color:${(props) => props.theme.colors.primary};
        }
    }
`

export const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit;
`