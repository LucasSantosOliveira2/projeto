import * as S from "./styles";
import { Checkbox } from "../CheckBox";


type SecondFormProps = {
    switchToProjectForm: () => void;
}


export const SecondForm = (props: SecondFormProps) => {
    return (
        <S.Form>
            <S.FormContainer>
                <S.Title> Informações adicionais do projeto</S.Title>
                <S.FieldContainer>
                    <S.Label>Escolha o tipo</S.Label>
                    <Checkbox name="Video" />
                    <Checkbox name="Texto" />
                    <Checkbox name="Voz" />
                    <Checkbox name="Mousetrack" />
                </S.FieldContainer>

                <S.FieldContainer>
                    <S.Label>Sentimentos</S.Label>
                    <Checkbox name="Outros" />
                    <Checkbox name="Nojo" />
                    <Checkbox name="Alegria" />
                    <Checkbox name="Tristeza" />
                    <Checkbox name="Medo" />
                    <Checkbox name="Surpresa" />
                    <Checkbox name="Raiva" />

                </S.FieldContainer>
                <S.ButtonContainer>
                    <S.ButtonSave onClick={props.switchToProjectForm}>Voltar</S.ButtonSave>
                    <S.ButtonSave type="submit">Continuar</S.ButtonSave>
                </S.ButtonContainer>
            </S.FormContainer >
        </S.Form>
    );

}