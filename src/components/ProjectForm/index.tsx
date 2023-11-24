import * as S from "./styles";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "../CheckBox";

type ProjectFormProps = {
  switchToSecondForm: (numParticipants: number, tasksNames: string[]) => void;
  onSave: (data: FormProps) => void;
}


export type FormProps = z.infer<typeof SchemaForm>

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
    ironia: z.boolean(),
    polaridade: z.boolean(),
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
  const { handleSubmit, register, formState: { errors }, trigger, getValues } = useForm<FormProps>({
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
        ironia: false,
        polaridade: false,
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
  const [numTasks, setNumTasks] = useState(0);


  const addAnalyst = () => {
    setAnalystNames([...analystNames, '']);
    setNumTasks(numTasks + 1);
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
    props.switchToSecondForm(data.information.numParticipants, Object.values(data.information.tasksName));
    props.onSave(data);
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


  const handleValidationAndSave = () => {
    trigger().then((isValid) => {
      if (isValid) {
        const formData = getValues();

        console.log(formData);

        props.onSave(formData);

        props.switchToSecondForm(
          formData.information.numParticipants,
          Object.values(formData.information.tasksName)
        );
      }
    });
  }



  return (
    <S.Form >
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
          <S.Label>Escolha o tipo de análise<S.Required>*</S.Required></S.Label>
          <Checkbox checkboxType="type.video" checkboxName='Video' register={register} onChange={() => handleTypeCheckboxChange('video')} />
          <S.CheckboxContainer>
            <Checkbox checkboxType="type.texto" checkboxName='Texto' register={register} onChange={() => handleTypeCheckboxChange('texto')} />
            {typeState.texto && (
              <S.CheckboxContainer>
                <Checkbox checkboxName="Ironia" checkboxType="type.ironia" register={register} />
                <Checkbox checkboxName="Polaridade" checkboxType="type.polaridade" register={register} />
              </S.CheckboxContainer>
            )}

          </S.CheckboxContainer>
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
          <S.ButtonSave type="button" onClick={() => handleValidationAndSave()}>Continuar</S.ButtonSave>
        </S.ButtonContainer>
      </S.FormContainer>
    </ S.Form >
  );
}

export default ProjectForm;
