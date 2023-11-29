import styled from "styled-components";

export const Wrapper = styled.div`
    width: 280px;
    height: 386px;
    align-items: center;
    border-radius: 20px;
    flex-direction: column;
`
export const ProfileImage = styled.div`
    width: 280px;
    height: 245px;
    border-radius: 20px 20px 0px 0px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const Info = styled.div`
    display:flex;
    flex-direction: column;
    width: 280px;
    height: 140px;
    gap:5px;
    border-radius: 0px 0px 20px 20px;
    background: #2B2B2B;
    padding: 5px 20px 0px 20px;
`
export const ProfileName = styled.h1`
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    color: white;
`
export const ProfileDescription = styled.p`
    font-size: 0.8rem;
    font-weight: 400;
    text-align:justify;
    letter-spacing: -0.05em;
    color: white;

`
export const InfoOverlay = styled.div`
  position: absolute;
  width: 280px;
  top: 0; 
  border-radius: 20px;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2B2B2B;
  display: flex;
  padding: 20px;
  color: white;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.7s ease, transform 0.7s ease; 
  transform: translateY(-100%);
  border: 1px solid white;
  transform: scale(1.1);
`;

export const CardContainer = styled.div`
  position: relative;
  width: 280px;
  border-radius: 20px;
  overflow: hidden; 

  &:hover {
    .info-overlay {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }
  }
`;