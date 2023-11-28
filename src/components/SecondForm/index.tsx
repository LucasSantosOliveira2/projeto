import * as S from "./styles";
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect, useRef } from "react";

type SecondFormProps = {
    switchToProjectForm: () => void;
    numParticipants: number;
    tasksNames: string[];
    currentTaskIndex: number;
    switchToNextForm: () => void;
}

type SecondForm = z.infer<typeof SchemaForm>

const SchemaForm = z.object({
    description: z.object({
        participantAnalysis: z.record(z.string().min(1, 'Informe sua opinião')),
    })
});

export const SecondForm = (props: SecondFormProps) => {
    const [submittedData, setSubmittedData] = useState<Array<SecondForm>>([]);
    const submittedDataRef = useRef<Array<SecondForm>>(submittedData);


    const { handleSubmit, register, formState: { errors } } = useForm<SecondForm>({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(SchemaForm),
        defaultValues: {
            description: {
                participantAnalysis: {},
            }
        }
    });

    const handleFormSubmit = (data: SecondForm) => {
        setSubmittedData((prevData) => {
            const newData = [...prevData];
            newData[props.currentTaskIndex] = data;
            submittedDataRef.current = newData; // Atualiza o ref em tempo real
            return newData;
        });

    };
    //console.log("teste", newData[props.currentTaskIndex]); // Use aqui
    //console.log(newData);
    //console.log(props.currentTaskIndex);


    const switchToNextForm = () => {
        props.switchToNextForm();
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
                    {props.currentTaskIndex < props.tasksNames.length - 1 ? (
                        <S.ButtonSave type="submit" onClick={switchToNextForm}>
                            Continuar
                        </S.ButtonSave>
                    ) : (
                        <S.ButtonSave type="submit">
                            Finalizar
                        </S.ButtonSave>
                    )}
                </S.ButtonContainer>

            </S.FormContainer>
        </S.Form >
    );
};