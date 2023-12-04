import styled from "styled-components";

export const Wrapper = styled.div`
 max-width: 389px;
  width: 100%;
  height: 345px;
  border-radius: 20px;
  background: #111C44;
  display: flex;
  padding: 20px;
  gap: 40px;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.75rem;
  color: white;
`

export const Emoji = styled.div`
    width: 154.711px;
    height: 166.178px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
  & {
    filter: invert(100%) brightness(100%) sepia(0%) saturate(0%) hue-rotate(0deg);
  }
`

export const Emotion = styled.h1`
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.75rem;
    color: white;
    span{
        color: #7551FF;
    }
`
export const ContainerContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 10px;
`