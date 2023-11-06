import * as S from "./styles";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type ProjectFormProps = {
  switchToSecondForm: () => void,
  switchToThirdForm: (numTasks: number) => void;
}

type FormProps = z.infer<typeof SchemaForm>

const SchemaForm = z.object({
  information: z.object({
    projectName: z.string().min(1, 'Informe o nome do projeto'),
    projectGoal: z.string().min(1, 'Informe o objetivo do projeto'),
    numParticipants: z.number().int().min(1, 'Número de participantes deve ser mínimo 1'),
    analystName: z.record(z.string().min(1, 'Informe o nome do Analista')),
    tasksName: z.record(z.string().min(1, 'Informe a tarefa do projeto'))
  })
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
    const numTasks = tasksNames.length;
    props.switchToThirdForm(numTasks);
  }


  //console.log(errors);

  return (
    <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
      <S.FormContainer>
        <S.Title>Informações do projeto</S.Title>
        <S.FieldContainer>
          <S.Label>Nome do Projeto</S.Label>
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
          <S.Label>Objetivo do projeto</S.Label>
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
            <S.Label>Número de Participantes:</S.Label>
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
              <S.Label>Tarefa {index + 1}:</S.Label>
              <S.TaskContainer>
                <S.Input
                  placeholder="Informe a tarefa"
                  {...register(`information.tasksName.[${index}]`)}
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
        <S.ButtonSave type="submit">Salvar e Continuar</S.ButtonSave>
      </S.FormContainer>
    </ S.Form >
  );
}

export default ProjectForm;
