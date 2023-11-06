import * as S from "./styles";


type ThirdFormProps = {
    switchToSecondForm: () => void
}

export const ThirdForm = (props: ThirdFormProps) => {
    return (
        <S.Form>
            <S.FormContainer>
                <S.Title>Informações sobre as tarefas</S.Title>

                <S.FieldContainer>
                    <S.Label> Participante</S.Label>
                    <S.TextArea placeholder="Descreva sua opinião" />
                </S.FieldContainer>
                <S.ButtonContainer>
                    <S.ButtonSave onClick={props.switchToSecondForm}>Voltar</S.ButtonSave>
                    <S.ButtonSave type="submit">Finalizar</S.ButtonSave>
                </S.ButtonContainer>
            </S.FormContainer>
        </S.Form>
    )
}