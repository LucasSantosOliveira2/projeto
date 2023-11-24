import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 300px;
    width: 90%;
    height: 100px;
    display: flex;
    gap: 5px;
    padding: 23px 0px 29px 22px;
    align-items: flex-start;
    border-radius: 20px;
    flex-direction: column;
    background-color: #1B254B;
  
`
export const InfoType = styled.h1`
   color: var(--secondary-grey-600, #A3AED0);
   font-size: 0.7rem;
   font-weight: 500;
   line-height: 1.25rem; 
   @media screen and (min-width: 480px) {
   font-size: 0.875rem;
   }
   @media screen and (min-width: 340px) {
   font-size: 0.8rem;
   }
`
export const InfoName = styled.h1`
   font-size: 0.70rem;
   font-weight: 500;
   line-height: 1rem;
   color: white;
   @media screen and (min-width: 480px) {
   font-size: 1rem;
   }
   @media screen and (min-width: 340px) {
   font-size: 0.875rem;
   }
`