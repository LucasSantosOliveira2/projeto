import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  background-color: #0b1437;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin-bottom: 20px;
`;
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
`;

export const SidebarContainer = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  color: white;
`;
