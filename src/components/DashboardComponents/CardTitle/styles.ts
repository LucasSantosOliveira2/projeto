// styles.ts
import styled from "styled-components";

export interface CardTitleProps {
  title: string;
  width: string;
}

export const StyledCardTitle = styled.div`
  font-size: 1rem;
  line-height: 1.2rem;
  border-radius: 16px;
  background-color: #111C44;
  color: ${(props) => props.theme.colors.white};
  border: none;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  height: 70px;
`;

export const Icon = styled.span``;

export const DivIcon = styled.div`
  border-radius: 50%;
  background-color: #1b254b;
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
