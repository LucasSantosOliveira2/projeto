import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
   max-width: 1050px;
   width: 90%;
   height: 64px;
   display: flex;
   padding: 20px 20px;
   align-items: center;
   justify-content: space-between;
   border-radius: 20px;
   background-color: #1B254B;
   @media screen and (max-width: 768px) {
   flex-direction: column;
   height: 100%;
   gap: 30px;
   align-items: flex-start;
  }

`
export const InfoTitle = styled.h1`
   color: white;
   font-size: 1rem;
   font-weight: 500;
   line-height: 1rem; 
`
export const InfoNumber = styled.h1`
   font-size: 0.875rem;
   font-weight: 500;
   line-height: 1.25rem; 
   color: var(--secondary-grey-600, #A3AED0);
`

export const NumberContainer = styled.div`
  width: 30px;
  height: 30px;
  padding: 4px;
  border-radius: 50%;
  background: #7551FF;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  color: white;
`

export const ContentContainer = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
  gap: 20px;
`

export const OptionContainer = styled.div`
   display: flex;
   width: 100%;
   align-items: center;
   justify-content: flex-end;
   align-items: center;
   gap: 40px;
`

export const Option = styled.h1`
   display: flex;
   align-items: center;
   gap: 5px;
   font-size: 1rem;
   font-weight:500;
   color:white;
   cursor: pointer;
   &:hover{
      color: var(--secondary-grey-600, #A3AED0);
   }
`
export const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit;
`
