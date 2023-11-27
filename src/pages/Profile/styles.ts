import styled from "styled-components";

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
  gap: 20px;
  width: 100%;
  margin-top: 185px;
  @media screen and (min-width: 768px) {
    margin-top: 130px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 125px;
  }
`

export const MediumProfile = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 80%;
    background-color: #111C44;
    border-radius: 16px;
    margin-top: 20px;    
`
export const BackgroundImage = styled.div`
    background-size: cover;
    background-position: center;
    width: 90%; 
    height: 131px;
    border-radius: 16px;
    margin-top: 30px;
    margin-bottom: 120px;
    position: relative;
`
export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    position: absolute;
    transform: translateY(85%);
`
export const ProfileImage = styled.div`
    background-size: cover;
    background-position: center;
    width: 87px;
    height: 87px;
    border-radius: 50%;
    border: 5px solid #0B1437;
`
export const ProfileName = styled.h1`
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 2rem;
    color: white;
`
export const Title = styled.h1`
    font-size: 1rem;
    font-weight: 700;
    line-height: 2rem;
    color : white;
    @media screen and (min-width: 281px) {
      font-size: 1.5rem;
    }
`

export const InfoContent = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    justify-items: center; 
    width: 100%;
    align-items: center;
    @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
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
