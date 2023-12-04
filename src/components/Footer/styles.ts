import styled from "styled-components"
import { Link } from 'react-router-dom';

export const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #111C44;
    padding: 15px 24px;
    justify-content: space-around;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        padding: 30px 100px;
        align-items: flex-start;

    }
`
export const BottomBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
    font-size: 1.1rem;
    align-items: center;
    li a {
            text-decoration: none;
            outline: none;
            color:${(props) => props.theme.colors.white};
        }
        li:hover{
            cursor: pointer;
            transform: scale(1.2);
            color:${(props) => props.theme.colors.primary};
        }
`
export const Title = styled.h1`
    font-size: 1.3rem;
    font-weight: 700;
    color:${(props) => props.theme.colors.white};

`
export const Title2 = styled.h1`
    font-size: 0.90rem;
    font-weight: 700;
    color:${(props) => props.theme.colors.white};

`

export const ContainerSocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;   
`

export const ContainerLinks = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
    cursor: pointer;
`
export const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit;
  padding: 5px;
`