import * as S from "./styles";
import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { Counter } from "../Counter";

type ProjectFormProps = {
  switchToSecondForm: () => void;
}

function ProjectForm(props: ProjectFormProps) {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [analystNames, setAnalystNames] = useState(['']);
  const [participants, setParticipants] = useState(1);
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

  const incrementParticipants = () => {
    setParticipants((prev) => prev + 1);
  }

  const decrementParticipants = () => {
    setParticipants((prev) => (prev > 1 ? prev - 1 : prev));
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

  return (
    <S.Form>
      <S.FormContainer>
        <S.Title>Informações do projeto</S.Title>
        <S.FieldContainer>
          <S.Label>Nome do Projeto</S.Label>
          <S.Input
            placeholder="Nome do Projeto"
            {...register('projectName')}
            type="text"
          />
        </S.FieldContainer>

        <S.FieldContainer>
          <S.Label>Objetivo do projeto</S.Label>
          <S.TextArea
            placeholder="Descreva o objetivo do projeto"
            {...register('projectGoal')}
          />
        </S.FieldContainer>
        <S.FieldContainer>
          <S.Label>Analistas do projeto</S.Label>
          {analystNames.map((analyst, index) => (
            <S.AnalitcsContainer key={index}>
              <S.Input
                placeholder="Nome do Analista"
                {...register(`analystName[${index}]`)}
                type="text"
                defaultValue={analyst}
              />
              <S.CustomIcon
                onClick={() => removeAnalyst(index)}
              />
            </S.AnalitcsContainer>
          ))}
          <S.ButtonAnalyst type="button" onClick={addAnalyst}>
            Adicionar um novo analista
          </S.ButtonAnalyst>
        </S.FieldContainer>
        <S.InfoContainer>
          <S.Label></S.Label>
        </S.InfoContainer>
        <S.InfoContainer>
          <S.Label>Número de Participantes:</S.Label>
          <Counter
            count={participants}
            onIncrement={incrementParticipants}
            onDecrement={decrementParticipants}
          />
        </S.InfoContainer>
        <S.FieldContainer >
          <S.Label>Tarefas</S.Label>

          {tasksNames.map((task, index) => (
            <S.FieldContainer key={index}>
              <S.Label>Tarefa {index + 1}:</S.Label>
              <S.TaskContainer>
                <S.Input
                  placeholder="Informe a tarefa"
                  {...register(`tasksName[${index}]`)}
                  type="text"
                  defaultValue={task}
                />
                <S.CustomIcon
                  onClick={() => removeTasks(index)}
                />
              </S.TaskContainer>
            </S.FieldContainer>
          ))}

          <S.ButtonAnalyst type="button" onClick={addTasks}>
            Adicionar uma nova tarefa
          </S.ButtonAnalyst>
        </S.FieldContainer>
        <S.ButtonSave type="submit" onClick={props.switchToSecondForm}>Salvar e Continuar</S.ButtonSave>
      </S.FormContainer>
    </S.Form >
  );
}

export default ProjectForm;
