import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6"


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: inherit;
  width: 80%;
  gap: 20px;
  padding: 20px 20px;
  background-color:#111C44;
  border-radius: 16px;
  margin-bottom: 20px;
  min-height: 100vh;
  height: auto;
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
export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 10px;
  border-radius: 8px;
  border: none;
  outline: none;
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 104px;
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
export const InfoContainer = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
`
export const AnalitcsContainer = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  gap: 10px;
  background-color: white;
  align-items: center;
  padding-right: 10px;
  border-radius: 8px;
 
`
export const CustomIcon = styled(FaDeleteLeft)`
  font-size: 1.2rem; 
  color: #7551FF;       
`
export const ButtonAnalyst = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 16px;
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  background: #7551FF;
  border: none;
  padding: 10px 10px;
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
export const Number = styled.h1`
    font-size: 1.25rem;
    color: white;
    font-weight: 500;

`
export const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none; 
  color: inherit;
`
export const TaskContainer = styled(AnalitcsContainer)`
`
export const Error = styled.p`
 font-size: 0.875rem;
 color: white;
 font-weight: 500;
`
export const InputNumber = styled.input`
  max-width: 80px;
  width: 100%;
  padding: 10px 10px;
  border-radius: 8px;
  height: 30px;
  outline:none;
  font-size: 0.875rem;
  text-align: center;
  font-weight: 500;
  border: none;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
  }
  `
export const Required = styled.span`
  font-size: 1.2rem;
  color: #7551FF;
  font-weight: 500;
  `
export const ButtonContainer = styled.div`
display: flex;
align-items: center;
gap: 10px;
width: 100%;
max-width: 480px;
justify-content: space-evenly;
`
export const CheckboxContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
`
export const ContainerFeelings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 480px;
  gap: 8px;
`

export const Feelings = styled.label`
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
`