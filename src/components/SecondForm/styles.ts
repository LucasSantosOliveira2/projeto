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
`
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`
export const Label = styled.label`
    font-size: 1.4rem;
    color: white;
    font-weight: 500;
    text-align: left;
`

export const FieldContainer = styled.div`
    width: 100%;
    max-width: 480px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
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