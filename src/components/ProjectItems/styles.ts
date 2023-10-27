import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color:#111C44;
    display: flex;
    align-items: center;
    padding-left: 20px;
    justify-content: space-between;
    border-radius: 20px;
    @media screen and (min-width: 480px) {
    padding-left: 80px;
  }
    @media screen and (min-width: 768px) {
    padding-left: 100px;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 140px;
  }
    

`
export const Info = styled.h1`
    font-size: 1.1rem;
    font-weight: 500;
    color: white;
    text-align: left;
    width:100%;
`