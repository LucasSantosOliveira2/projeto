import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 12px;
    font-size: 1.1rem;
    padding: 10px 30px;
    line-height: 1.8rem;
    font-weight: 500;
    color:${(props) => props.theme.colors.white};
`