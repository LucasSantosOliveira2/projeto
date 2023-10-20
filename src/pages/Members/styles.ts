import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: #3B3B3B;
    width: 100%;
    display: flex;
    padding: 10px 40px;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`
export const ContainerType = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: white;
    text-align: center;
    padding: 40px 0;
    @media screen and (min-width: 768px) {
        font-size: 2.4rem;

    }
    @media screen and (min-width: 1024px) {
        font-size: 2.8rem;

    }
`

export const ContainerCard = styled.div`
    width: 280px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    grid-gap: 20px;
    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        width: 620px;
    }
    @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 40px;
        width: 1000px;
    }
    @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    width: 1400px;
    }
`
export const Type = styled.h1`
    font-size: 1.1rem;
    font-weight: 700;
    color: white;
    text-align: left;
`
export const Separator = styled.div`
  width: 100%;
  height: 1px; 
  background: white;
`;

