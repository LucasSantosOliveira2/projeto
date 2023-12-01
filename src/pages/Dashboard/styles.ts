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
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  width: 75%;
  margin-top: 185px;
  @media screen and (min-width: 768px) {
    margin-top: 130px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 125px;
  }
  margin-left: 10%;
`;


export const GraphicWrapper = styled.div`
  width: calc(33.33% - 20px); /* Defina a largura fixa com base na porcentagem desejada */
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px; /* Adicione espaço abaixo de cada GraphicWrapper */
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
