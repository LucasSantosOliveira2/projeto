import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  background-color: #0B1437;
  width: 100%;
  height: 100vh;
`;

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

export const ContainerItems = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px;
`