import styled from "styled-components"
import { Link } from 'react-router-dom';


export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 50px 30px;
    background-color: #0B1437;
    @media screen and (min-width: 768px) {
        padding: 50px 100px;
        gap: 40px;
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    margin-top: 120px
    
`
export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    @media screen and (min-width: 768px) {
        font-size: 2.5rem;
    }
    @media screen and (min-width: 1024px) {
        font-size: 3.5rem;
        font-weight: 500;
    }
`
export const Description = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
    color: white;
    @media screen and (min-width: 768px) {
        font-size: 2rem;
    }
`

export const Image = styled.img`
    max-width: 100%; 
    height: auto;
    
`
export const ContainerImage = styled.div`
    width: 98.7vw;
    border-radius: 16px;
    max-width: none;
    padding: 0; 
    overflow: hidden;
    height: auto;
    @media screen and (min-width: 768px) {
        height: 520px;
    }
    @media screen and (min-width: 1620px) {
        height: 680px;
    }
    @media screen and (min-width: 1920px) {
        height: 780px;
    }
    margin-top: 140px;
`
export const ContainerAbout = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
export const DescriptionAbout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    gap: 50px;
    align-items: center;
    padding-top: 30px;

`
export const TitleAbout = styled.h1`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2rem;
    color: white;
    @media screen and (min-width: 768px) {
        font-size: 2rem;
    }
    @media screen and (min-width: 1024px) {
        font-size: 2.5rem;
    }
`
export const TextAbout = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    text-align: justify;
    color: white;
    @media screen and (max-width: 768px) {
        font-size: 1.1rem;
    }
    @media screen and (min-width: 1400px) {
        font-size: 1.5rem;
    }
`
export const ImageAbout = styled.div`
    width: 100%;
    border-radius: 8px;
    height: auto;
`

export const ContainerCard = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    grid-gap:30px;
    align-items: center;
    justify-items: center;
    @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 1250px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
`

export const TitleCard = styled.h1`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2rem;
    color: white;

`
export const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit;
  width: 100%;
`