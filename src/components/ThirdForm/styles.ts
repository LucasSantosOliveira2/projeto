import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: inherit;
  width: 80%;
  padding: 20px 20px;
  background-color:#111C44;
  border-radius: 16px;
  margin-bottom: 30px;
  min-height: 100vh;
  height: 100%;
  overflow-y: auto;
`
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`
export const Label = styled.label`
    font-size: 1.2rem;
    color: white;
    font-weight: 500;
`
export const FieldContainer = styled.div`
    width: 100%;
    max-width: 480px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  resize: none;
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: white;
`

export const ButtonSave = styled.button`
  width: 100%;
  max-width: 180px;
  height: 40px;
  border-radius: 16px;
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  background: #7551FF;
  border: none;
  padding: 10px 10px;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 480px;
  justify-content: space-evenly;
`