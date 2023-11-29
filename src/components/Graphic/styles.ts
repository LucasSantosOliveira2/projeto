import styled from "styled-components";

export const Wrapper = styled.footer`
  max-width: 900px;
  width: 90%;
  height: 900px;
  display: flex;
  gap: 5px;
  padding: 23px 0px 29px 22px;
  align-items: flex-start;
  border-radius: 20px;
  flex-direction: column;
  background-color: #0B1437;
`;
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 25px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 20px;
  }
`;
