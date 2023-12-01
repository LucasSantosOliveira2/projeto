import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #0B1437;
    padding: 30px 20px;
    z-index: 100; 
    @media screen and (min-width: 1200px) {
        margin-left: 320px;

    }
`
export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
    @media screen and (min-width: 1200px) {
        margin-right: 340px;
    }

`
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const InfoPage = styled.p`
    font-size: 0.875rem;
    color: white;
    font-weight: 500;
    line-height: 1.5rem;
`
export const CurrentPage = styled.h1`
    font-size: 2rem;
    color: white;
    font-weight: 700;
    line-height: 3rem;
`
export const Menu = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px 10px;
    width: 60px;
    background-color:#111C44;
    color: white;
    height: 61px;
    border-radius: 32px;
    @media screen and (max-width: 768px) {
        width:100%;
    }

`
export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    color: white;
    height: 41px;
    gap: 10px;
    padding-left: 20px;
    background-color: #0B1437;
    border-radius: 32px;
`

export const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    background-color: #0B1437;
    font-size: 0.875rem;
    font-weight: 500;
    color: white;
`

export const BurguerMenu = styled.div`
    cursor: pointer;
    @media screen and (min-width: 1200px) {
        display: none;
    }

`
export const ProfileImage = styled.div`
    background-size: cover;
    background-position: center;
    width: 41px; 
    height: 41px;
    border-radius: 50%;
`
export const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit;
`;

