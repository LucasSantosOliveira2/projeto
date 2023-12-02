import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Wrapper = styled.section`
  display: flex;
  background-color: #0B1437;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin-bottom: 20px;
`

export const SidebarContainer = styled.div`
  flex: 1;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 185px;
  @media screen and (min-width: 768px) {
    margin-top: 130px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 125px;
  }
`
export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
    color : white;
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #111C44;
    width: 80%;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 20px;
    gap: 20px;
    align-items: center;
`

export const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit;
  width: 100%;
`
