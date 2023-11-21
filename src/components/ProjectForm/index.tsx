import * as S from "./styles";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "../CheckBox";

type ProjectFormProps = {
  switchToSecondForm: () => void,
}

type FormProps = z.infer<typeof SchemaForm>

const SchemaForm = z.object({
  information: z.object({
    projectName: z.string().min(1, 'Informe o nome do projeto'),
    projectGoal: z.string().min(1, 'Informe o objetivo do projeto'),
    numParticipants: z.number().int().min(1, 'Número de participantes deve ser mínimo 1'),
    analystName: z.record(z.string().min(1, 'Informe o nome do Analista')),
    tasksName: z.record(z.string().min(1, 'Informe a tarefa do projeto'))
  }),
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


function ProjectForm(props: ProjectFormProps) {
  const { handleSubmit, register, formState: { errors } } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(SchemaForm),
    defaultValues: {
      information: {
        projectName: "",
        projectGoal: "",
        numParticipants: 0,
        analystName: {},
        tasksName: {}
      },
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
    }
  });


  const [analystNames, setAnalystNames] = useState(['']);
  const [tasksNames, setTasksNames] = useState(['']);

  const addAnalyst = () => {
    setAnalystNames([...analystNames, '']);
  }

  const removeAnalyst = (index: number) => {
    if (analystNames.length > 1) {
      const updatedAnalystNames = [...analystNames];
      updatedAnalystNames.splice(index, 1);
      setAnalystNames(updatedAnalystNames);
    }
  }

  const addTasks = () => {
    setTasksNames([...tasksNames, '']);
  }

  const removeTasks = (index: number) => {
    if (tasksNames.length > 1) {
      const updatedTasksNames = [...tasksNames];
      updatedTasksNames.splice(index, 1);
      setTasksNames(updatedTasksNames);
    }
  }

  const handleFormSubmit = (data: FormProps) => {
    console.log(data);
    props.switchToSecondForm();
  }

  const [typeState, setTypeState] = useState({
    video: false,
    texto: false,
    voz: false,
    mousetrack: false,
  });

  const handleTypeCheckboxChange = (type: keyof typeof typeState) => {
    setTypeState((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  return (
    <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
      <S.FormContainer>
        <S.Title>Informações do projeto</S.Title>
        <S.FieldContainer>
          <S.Label>Nome do Projeto<S.Required>*</S.Required></S.Label>
          <S.Input
            placeholder="Nome do Projeto"
            {...register('information.projectName')}
            type="text"
          />
          {errors.information?.projectName?.message && (
            <S.Error>{errors.information?.projectName?.message}</S.Error>
          )}
        </S.FieldContainer>

        <S.FieldContainer>
          <S.Label>Objetivo do projeto<S.Required>*</S.Required></S.Label>
          <S.TextArea
            placeholder="Descreva o objetivo do projeto"
            {...register('information.projectGoal')}
          />
          {errors.information?.projectGoal?.message && (
            <S.Error>{errors.information?.projectGoal?.message}</S.Error>
          )}
        </S.FieldContainer>

        <S.FieldContainer>
          <S.Label>Analistas do projeto</S.Label>
          {analystNames.map((analyst, index) => (
            <S.FieldContainer key={index}>
              <S.Label>Analista {index + 1}<S.Required>*</S.Required>:</S.Label>
              <S.AnalitcsContainer>
                <S.Input
                  placeholder="Nome do Analista"
                  {...register(`information.analystName.${index}`)}
                  type="text"
                  defaultValue={analyst}
                />
                <S.CustomIcon
                  onClick={() => removeAnalyst(index)}
                />
              </S.AnalitcsContainer>
              {errors.information?.analystName && (
                <S.Error>{errors.information.analystName[index]?.message}</S.Error>
              )}
            </S.FieldContainer>
          ))}

          <S.ButtonAnalyst type="button" onClick={addAnalyst}>
            Adicionar um novo analista
          </S.ButtonAnalyst>
        </S.FieldContainer>
        <S.FieldContainer>
          <S.InfoContainer>
            <S.Label>Número de Participantes<S.Required>*</S.Required>:</S.Label>
            <S.InputNumber
              type="number"
              {...register('information.numParticipants', { valueAsNumber: true })}
              placeholder="0"
            />
          </S.InfoContainer>
          {errors.information?.numParticipants?.message === 'Número de participantes deve ser mínimo 1' && (
            <S.Error >O número mínimo de participantes é 1.</S.Error>
          )}
        </S.FieldContainer>

        <S.FieldContainer >
          <S.Label>Tarefas</S.Label>
          {tasksNames.map((task, index) => (
            <S.FieldContainer key={index}>
              <S.Label>Tarefa {index + 1}<S.Required>*</S.Required>:</S.Label>
              <S.TaskContainer>
                <S.Input
                  placeholder="Informe a tarefa"
                  {...register(`information.tasksName.${index}`)}
                  type="text"
                  defaultValue={task}
                />
                <S.CustomIcon
                  onClick={() => removeTasks(index)}
                />
              </S.TaskContainer>
              {errors.information?.tasksName && (
                <S.Error>{errors.information.tasksName[index]?.message}</S.Error>
              )}
            </S.FieldContainer>
          ))}

          <S.ButtonAnalyst type="button" onClick={addTasks}>
            Adicionar uma nova tarefa
          </S.ButtonAnalyst>
        </S.FieldContainer>

        <S.FieldContainer>
          <S.Label>Escolha o tipo<S.Required>*</S.Required></S.Label>
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
          <S.StyledLink to='/project'>
            <S.ButtonSave >Voltar</S.ButtonSave>
          </S.StyledLink>
          <S.ButtonSave type="submit">Continuar</S.ButtonSave>
        </S.ButtonContainer>
      </S.FormContainer>
    </ S.Form >
  );
}

export default ProjectForm;
