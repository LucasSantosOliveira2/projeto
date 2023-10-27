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
  margin-top: 185px;
  @media screen and (min-width: 768px) {
    margin-top: 150px;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 145px;
  }
`

export const ChatContainer = styled.div`
    width: 100%;
    border-radius: 8px;
    padding: 10px;
`

export const ChatInputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color:#111C44;
    border-radius: 16px;
    padding: 10px 10px;
`

export const ChatMessages = styled.div`
    height: 400px;
    width: 100%;
    overflow-x: auto;
    white-space: pre-wrap;
    color: white;
    margin-bottom: 10px;
    padding: 10px;
    overflow: hidden;
`

export const ChatInput = styled.textarea`
    width: 100%;
    min-height: 50px;
    overflow: hidden;
    outline: none;
    color: white;
    border: none;
    background-color:#111C44;
    border-radius: 16px;
    padding: 10px;
    font-size: 16px;
    resize: vertical;
    &::placeholder {
    color: white;
  }
`

export const SendButton = styled.button`
    padding: 10px;
    background-color: #7551FF;
    align-self: center;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`