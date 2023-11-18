import * as S from './styles';
import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Checkbox } from "../CheckBox";


const SchemaForm = z.object({
    type: z.object({
        video: z.boolean(),
        texto: z.boolean(),
        voz: z.boolean(),
        mousetrack: z.boolean(),
    }).refine(data => {
        const { video, texto, voz, mousetrack } = data;
        return video || texto || voz || mousetrack;
    }, {
        message: 'Selecione pelo menos uma opção',
    }),
    feelings: z.object({
        outros: z.boolean(),
        nojo: z.boolean(),
        alegria: z.boolean(),
        tristeza: z.boolean(),
        medo: z.boolean(),
        surpresa: z.boolean(),
        raiva: z.boolean(),
    }),
});

type SecondFormProps = {
    switchToProjectForm: () => void;
    switchToThirdForm: () => void;
}

type SecondForm = z.infer<typeof SchemaForm>


export const SecondForm = (props: SecondFormProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(SchemaForm),
        defaultValues: {
            type: {
                video: false,
                texto: false,
                voz: false,
                mousetrack: false,
            },
            feelings: {
                outros: false,
                nojo: false,
                alegria: false,
                tristeza: false,
                medo: false,
                surpresa: false,
                raiva: false,
            }
        },
    });

    const [typeState, setTypeState] = useState({
        video: false,
        texto: false,
        voz: false,
        mousetrack: false,
    });

    const handleFormSubmit: SubmitHandler<SecondForm> = (data) => {
        console.log(data);
        props.switchToThirdForm();

    }

    const handleTypeCheckboxChange = (type: keyof typeof typeState) => {
        setTypeState((prevState) => ({
            ...prevState,
            [type]: !prevState[type],
        }));
    };

    return (
        <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
            <S.FormContainer>
                <S.Title> Informações adicionais do projeto</S.Title>
                <S.FieldContainer>
                    <S.Label>Escolha o tipo</S.Label>
                    <Checkbox checkboxType="type.video" checkboxName='Video' register={register} onChange={() => handleTypeCheckboxChange('video')} />
                    <Checkbox checkboxType="type.texto" checkboxName='Texto' register={register} onChange={() => handleTypeCheckboxChange('texto')} />
                    <Checkbox checkboxType="type.voz" checkboxName='Voz' register={register} onChange={() => handleTypeCheckboxChange('voz')} />
                    <Checkbox checkboxType="type.mousetrack" checkboxName='Mousetrack' register={register} onChange={() => handleTypeCheckboxChange('mousetrack')} />
                    {errors.type && Object.values(typeState).every((value) => !value) && (
                        <S.Error>{errors.type.root?.message}</S.Error>
                    )}
                </S.FieldContainer>


                <S.FieldContainer>
                    <S.Label>Sentimentos</S.Label>
                    <Checkbox checkboxType="feelings.outros" checkboxName="Outros" register={register} />
                    <Checkbox checkboxType="feelings.nojo" checkboxName="Nojo" register={register} />
                    <Checkbox checkboxType="feelings.alegria" checkboxName="Alegria" register={register} />
                    <Checkbox checkboxType="feelings.tristeza" checkboxName="Tristeza" register={register} />
                    <Checkbox checkboxType="feelings.medo" checkboxName="Medo" register={register} />
                    <Checkbox checkboxType="feelings.surpresa" checkboxName="Surpresa" register={register} />
                    <Checkbox checkboxType="feelings.raiva" checkboxName="Raiva" register={register} />
                </S.FieldContainer>
                <S.ButtonContainer>
                    <S.ButtonSave onClick={props.switchToProjectForm}>Voltar</S.ButtonSave>
                    <S.ButtonSave type="submit">Continuar</S.ButtonSave>
                </S.ButtonContainer>
            </S.FormContainer>
        </S.Form>
    );
}