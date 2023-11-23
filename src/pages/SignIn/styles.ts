import styled from "styled-components"
import { Link } from 'react-router-dom';


export const Wrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    background:${(props) => props.theme.colors.background};
    padding: 50px 0px 0px;
    @media screen and (min-width: 768px) {
        justify-content: center;
    }
`
export const Container = styled.div`
    width: 100%;
    max-width: 768px;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    padding: 0px 25px;
    gap: 25px;
    margin-bottom: 25px;
    border-radius: 16px;
    @media screen and (min-width: 768px) {
        border-radius: 16px;
        padding: 40px 25px;
        border: 1px solid ${(props) => props.theme.colors.primary};
        max-width: 410px;
    }
`
export const Headline = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
`
export const ButtonBack = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

`
export const TextDashborder = styled.p`
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
    line-height: 1.875rem; 
    cursor: pointer;
`

export const Title = styled.h2`
    color: ${(props) => props.theme.colors.white};
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 3.5rem;
`
export const Text = styled.p`
    color: ${(props) => props.theme.colors.primary};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
`
export const ButtonGoogle = styled.button`
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    gap: 10px;
    justify-content: center;
    border-radius: 16px;
    background: #1B254B;
    border: none;
    color: ${(props) => props.theme.colors.white};
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    cursor: pointer;
        &:hover {
        background: #2c3a6a; 
    }
`
export const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit;
  width: 100%;
`