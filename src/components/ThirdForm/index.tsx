import * as S from "./styles";
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type ThirdFormProps = {
    switchToSecondForm: () => void
}

type ThirdForm = z.infer<typeof SchemaForm>

const SchemaForm = z.object({
    description: z.object({
        participantAnalysis: z.string().min(1, 'Informe sua opinião'),
    })
});

export const ThirdForm = (props: ThirdFormProps) => {
    const { handleSubmit, register, formState: { errors } } = useForm<ThirdForm>({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(SchemaForm),
        defaultValues: {
            description: {
                participantAnalysis: "",
            }
        }
    });
    const handleFormSubmit = (data: ThirdForm) => {
        console.log(data);
    }


    return (
        <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
            <S.FormContainer>
                <S.Title>Informações sobre as tarefas</S.Title>
                <S.FieldContainer>
                    <S.Label> Participante</S.Label>
                    <S.TextArea
                        placeholder="Descreva sua opinião"
                        {...register('description.participantAnalysis')}
                    />
                    {errors.description?.participantAnalysis?.message && (
                        <S.Error>{errors.description?.participantAnalysis?.message}</S.Error>
                    )}
                </S.FieldContainer>
                <S.ButtonContainer>
                    <S.ButtonSave onClick={props.switchToSecondForm}>Voltar</S.ButtonSave>
                    <S.ButtonSave type="submit">Finalizar</S.ButtonSave>
                </S.ButtonContainer>
            </S.FormContainer>
        </S.Form >
    )
}