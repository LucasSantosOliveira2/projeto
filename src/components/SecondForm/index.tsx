import * as S from "./styles";
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

type SecondFormProps = {
    switchToProjectForm: () => void;
    numParticipants: number;
    tasksNames: string[];
    currentTaskIndex: number;
    switchToNextForm: () => void;
};

const SchemaForm = z.object({
    description: z.object({
        participantAnalysis: z.record(z.string().min(1, 'Informe sua opinião')),
    }),
});

export type SecondFormValues = z.infer<typeof SchemaForm>;

const dataArray: SecondFormValues[] = [];


export const SecondForm = (props: SecondFormProps) => {
    const navigate = useNavigate();


    const { handleSubmit, register, formState: { errors } } = useForm<SecondFormValues>({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(SchemaForm),
        defaultValues: {
            description: {
                participantAnalysis: {},
            },
        },
    })

    const handleFormSubmit = async (data: SecondFormValues) => {
        console.log("Dado atual:", data);

        try {
            await new Promise((resolve) => setTimeout(resolve, 10));
            dataArray.push(data);

            if (props.currentTaskIndex === props.tasksNames.length - 1) {
                console.log("Dados Finais:", dataArray);
                navigate("/dashboard");

            } else {
                props.switchToNextForm();
            }
        } catch (error) {
            console.error("Erro ao enviar o formulário:", error);
        }
    }

    return (
        <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
            <S.FormContainer>
                <S.Title>{props.tasksNames[props.currentTaskIndex]}</S.Title>
                {Array.from({ length: props.numParticipants }, (_, index) => (
                    <S.FieldContainer key={index}>
                        <S.Label>Participante {index + 1}</S.Label>
                        <S.TextArea
                            placeholder={`Opinião do participante ${index + 1}`}
                            {...register(`description.participantAnalysis.${index}` as const, {
                                required: 'Informe sua opinião',
                            })}
                        />
                        {errors.description?.participantAnalysis?.[index]?.message && (
                            <S.Error>{errors.description?.participantAnalysis?.[index]?.message}</S.Error>
                        )}
                    </S.FieldContainer>
                ))}
                <S.ButtonContainer>
                    <S.ButtonSave onClick={props.switchToProjectForm}>Voltar</S.ButtonSave>
                    <S.ButtonSave type="submit">
                        {props.currentTaskIndex === props.tasksNames.length - 1 ? "Finalizar" : "Continuar"}
                    </S.ButtonSave>
                </S.ButtonContainer>
            </S.FormContainer>
        </S.Form>
    );
};
