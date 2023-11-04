import styled from "styled-components";


export const Wrapper = styled.section`
  display: flex;
  background-color: #0B1437;
  width: 100%;
`

export const SidebarContainer = styled.div`
  flex: 1;
`

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
`
export const FieldContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`
