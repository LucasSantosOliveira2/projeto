import styled from "styled-components"


export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 50px 30px;
    background-color: ${(props) => props.theme.colors.white};
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
    
`
export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.dark};
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
    color: ${(props) => props.theme.colors.dark};
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
`
export const ContainerAbout = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    flex-direction: column;
    color: ${(props) => props.theme.colors.dark};

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`
export const DescriptionAbout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

`
export const TitleAbout = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
    color: ${(props) => props.theme.colors.dark};
    @media screen and (min-width: 768px) {
        font-size: 2rem;
    }
    @media screen and (min-width: 1024px) {
        font-size: 2.5rem;
    }
`
export const TextAbout = styled.p`
    font-size: 1rem;
    font-weight: 400;
    text-align: justify;
    color: ${(props) => props.theme.colors.dark};
    @media screen and (min-width: 768px) {
        font-size: 1.1rem;
    }
`
export const ImageAbout = styled.div`
    width: 100%;
    border-radius: 8px;
    height: auto;
`

export const WorksContainer = styled(ContainerAbout)` 
    gap: 10px;
   @media screen and (min-width: 768px) {
        flex-direction: row-reverse;
    }
`