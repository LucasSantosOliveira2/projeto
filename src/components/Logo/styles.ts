import { styled } from "styled-components"
import { Link } from "react-router-dom"

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
 `
export const LogoTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;   
    color: ${(props) => props.theme.colors.white};
`

export const StyledLink = styled(Link)`
    text-decoration: none;
`