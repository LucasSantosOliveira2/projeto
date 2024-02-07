import styled from "styled-components"


export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 340px;
    height: 496px;
    width: 100%;
    background: #111C44;
    border-radius: 20px;
    gap: 20px;
    justify-content: center;
    &:hover{
        transform: scale(1.1);
    }
    
`

export const Image = styled.div`
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const Name = styled.h1`
    font-size: 1.8rem;
    font-weight: 600;
    color: white;
`