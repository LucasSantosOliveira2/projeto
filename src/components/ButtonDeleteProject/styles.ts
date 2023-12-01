import styled from "styled-components"

export const ButtonOptionProject = styled.button`
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    border-radius: 16px;
    background-color: #7551FF;
    color: ${(props) => props.theme.colors.white};
    border: none;
    cursor:pointer;
    &:hover{
        transform: scale(1.1);
    }
`