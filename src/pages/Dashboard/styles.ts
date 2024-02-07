import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  background-color: #0b1437;
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
  gap: 15px;
  padding: 0px 10px;
  margin-top: 185px;
  @media screen and (min-width: 768px) {
    margin-top: 130px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 160px;
  }
  `

export const GraphicWrapper = styled.div`
  max-width: 389px;
  width: 100%;
  height: 345px;
  border-radius: 20px;
  background: #111C44;
  display: flex;
  padding: 20px;
  align-items: center;
  flex-direction: column;
`

export const GraphicWrapper2 = styled.div`
  max-width: 778px;
  width: 100%;
  height: 345px;
  border-radius: 20px;
  background: #111C44;
  display: flex;
  padding: 20px;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.75rem;
  color: white;
`

export const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const CustomSelect = styled.div`
    width: 250px;
    padding: 10px 20px;
    /* margin-top: 0.2%; */
    z-index: 2;
    background: #111C44;
    border-radius: 16px;
    height: 70px;
`;

export const Label = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  color: #A3AED0;
  padding: 0 8px;
`