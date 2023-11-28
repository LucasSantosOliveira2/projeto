import * as S from "./styles";
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect, useRef } from "react";

type SecondFormProps = {
    switchToProjectForm: () => void;
    numParticipants: number;
    tasksNames: string[];
    currentTaskIndex: number;
    switchToNextForm: () => void;
    finishForm: () => void; // Função para finalizar o formulário
};

const SchemaForm = z.object({
    description: z.object({
        participantAnalysis: z.record(z.string().min(1, 'Informe sua opinião')),
    }),
});

type SecondFormValues = z.infer<typeof SchemaForm>;

export const SecondForm = (props: SecondFormProps) => {
    const [submittedData, setSubmittedData] = useState<Array<SecondFormValues>>(
        Array.from({ length: props.tasksNames.length }, () => ({ description: { participantAnalysis: {} } }))
    );
    const submittedDataRef = useRef<Array<SecondFormValues>>(submittedData);

    const { handleSubmit, register, formState: { errors }, reset } = useForm<SecondFormValues>({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(SchemaForm),
        defaultValues: {
            description: {
                participantAnalysis: {},
            },
        },
    });

    useEffect(() => {
        const latestData = submittedDataRef.current;
        console.log("submittedDataRef.current:", latestData);
        // Faça outras ações conforme necessário com os dados atualizados
    }, [submittedDataRef.current]);

    const handleFormSubmit: SubmitHandler<SecondFormValues> = async (data) => {
        console.log("Submitted Data:", data);

        setSubmittedData((prevData) => {
            const newData = [...prevData];
            newData[props.currentTaskIndex] = data;
            submittedDataRef.current = newData; // Atualiza o ref em tempo real
            console.log("Submitted Data:", newData);
            console.log("Submitted :", submittedDataRef.current);
            return newData;
        });

        try {
            // Simule uma operação assíncrona, como uma chamada de API
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Limpe o formulário após o envio bem-sucedido.
            reset();

            if (props.currentTaskIndex === props.tasksNames.length - 1) {
                console.log('finish');
            } else {
                // Caso contrário, prossiga para o próximo formulário
                props.switchToNextForm();
            }
        } catch (error) {
            console.error("Erro ao enviar o formulário:", error);
            // Lide com erros de envio, se necessário.
        }
    };

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
