import * as S from "./styles";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "../CheckBox";
import { useLocation } from 'react-router-dom';

type ProjectFormProps = {
  switchToSecondForm: (numParticipants: number, tasksNames: string[]) => void;
  onSave: (data: FormProps) => void;
  title: string;
}

export type FormProps = z.infer<typeof SchemaForm>

const SchemaForm = z.object({
  information: z.object({
    id: z.number().int().min(0, 'Informe o id do projeto'),
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
    sentimento: z.boolean(),
  }).refine(data => {
    const { video, texto, voz, mousetrack } = data;
    return video || texto || voz || mousetrack;
  }, {
    message: 'Selecione pelo menos uma opção',
  }),
});

function ProjectForm(props: ProjectFormProps) {

  const location = useLocation();
  const projectData = location.state?.projectData;
  
  const { register, formState: { errors }, trigger, getValues, setValue } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(SchemaForm),
    defaultValues: {
      information: {
        id: projectData?.id || 0,
        projectName: projectData?.nome || "",
        projectGoal: projectData?.objetivo_projeto || "",
        numParticipants: projectData?.num_participantes || 0,
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
        sentimento: false,
      }
    }
  });

  const [analystNames, setAnalystNames] = useState(projectData?.analistas || ['']);
  const [tasksNames, setTasksNames] = useState(projectData?.tarefas || ['']);
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
      const currentAnalysts = getValues('information.analystName');
      delete currentAnalysts[index.toString()];
      setValue('information.analystName', currentAnalysts);
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
      const currentTasks = getValues('information.tasksName');
      delete currentTasks[index.toString()];
      setValue('information.tasksName', currentTasks);
    }
  }

  /* const handleFormSubmit = (data: FormProps) => {
     console.log(data);
     props.switchToSecondForm(data.information.numParticipants, Object.values(data.information.tasksName));
     props.onSave(data);
   }*/

  const [typeState, setTypeState] = useState({
    video: false,
    texto: projectData? true : false,
    voz: false,
    mousetrack: false,
    ironia: projectData?.isIronic,
    polaridade: projectData?.isPolarity,
    sentimento: projectData?.isSentiment,
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
        <S.Title>{props.title}</S.Title>
        <S.FieldContainer>
          <S.Label>Nome do Projeto<S.Required>*</S.Required></S.Label>
          <S.Input
            placeholder={"Nome do Projeto"}
            {...register('information.projectName', { value: projectData?.nome || '' })}
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
          <Checkbox
            checkboxType="type.video"
            checkboxName='Video'
            register={register}
            onChange={() => handleTypeCheckboxChange('video')}
          />
          <S.CheckboxContainer>
            <Checkbox
              checkboxType="type.texto"
              checkboxName='Texto'
              register={register}
              onChange={() => handleTypeCheckboxChange('texto')}
              checked={typeState.texto}
            />
            {typeState.texto && (
              <S.CheckboxContainer>
                <Checkbox
                  checkboxName="Ironia"
                  checkboxType="type.ironia"
                  register={register}
                  onChange={() => handleTypeCheckboxChange('ironia')}
                  checked={typeState.ironia}
                />
                <Checkbox
                  checkboxName="Polaridade"
                  checkboxType="type.polaridade"
                  register={register}
                  onChange={() => handleTypeCheckboxChange('polaridade')}
                  checked={typeState.polaridade}
                />
                <Checkbox
                  checkboxName="Sentimentos"
                  checkboxType="type.sentimento"
                  register={register}
                  onChange={() => handleTypeCheckboxChange('sentimento')}
                  checked={typeState.sentimento}
                />
              </S.CheckboxContainer>
            )}

          </S.CheckboxContainer>
          <Checkbox checkboxType="type.voz" checkboxName='Voz' register={register} onChange={() => handleTypeCheckboxChange('voz')} />
          <Checkbox checkboxType="type.mousetrack" checkboxName='Mousetrack' register={register} onChange={() => handleTypeCheckboxChange('mousetrack')} />
          {errors.type && Object.values(typeState).every((value) => !value) && (
            <S.Error>{errors.type.root?.message}</S.Error>
          )}
        </S.FieldContainer>
        {typeState.sentimento && (
          <S.FieldContainer>
            <S.Label>Sentimentos</S.Label>
            <S.ContainerFeelings>
              <S.Feelings>Outros</S.Feelings>
              <S.Feelings>Nojo</S.Feelings>
              <S.Feelings>Alegria</S.Feelings>
              <S.Feelings>Tristeza</S.Feelings>
              <S.Feelings>Medo</S.Feelings>
              <S.Feelings>Surpresa</S.Feelings>
              <S.Feelings>Raiva</S.Feelings>
            </S.ContainerFeelings>
          </S.FieldContainer>
        )}
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
