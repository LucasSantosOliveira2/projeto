import styled from "styled-components"

export const ButtonDashboard = styled.button`
    font-size: 1rem;
    line-height: 1.2rem;
    border-radius: 16px;
    background-color: #111C44;
    color: ${(props) => props.theme.colors.white};
    border: none;
    cursor:pointer;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    height: 70px;
    &:hover{
        //transform: scale(1.1);
        color: #A3AED0;
        cursor: pointer;
    }
`

export const Icon = styled.span`

`

export const DivIcon = styled.div`
    border-radius: 50%;
    background-color: #1B254B;
    color: white;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`