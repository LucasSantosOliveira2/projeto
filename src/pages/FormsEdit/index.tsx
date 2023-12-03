/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import * as S from './styles';
import { Sidebar } from '../../components/Sidebar';
import ProjectForm, { FormProps } from '../../components/ProjectForm';
import { SecondForm } from '../../components/SecondForm';


type ProjectFormDataState = { 
    type: { 
        video: boolean; 
        texto: boolean; 
        voz: boolean; 
        mousetrack: boolean; 
        ironia: boolean; 
        polaridade: boolean; 
        sentimento: boolean; 
    }; 
    information: { 
        id: number;
        projectName: string; 
        projectGoal: string; 
        numParticipants: number; 
        analystName: Record<string, string>; 
        tasksName: Record<string, string>; 
    }; 
} | null;



export const FormsEdit = () => {
    const [currentForm, setCurrentForm] = useState('project');
    const [numParticipants, setNumParticipants] = useState(0);
    const [tasksNames, setTasksNames] = useState<string[]>([]);
    const [numTasks, setNumTasks] = useState(0);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [projectFormData, setProjectFormData] = useState<ProjectFormDataState>(null);

    const switchToProjectForm = () => {
        setCurrentForm('project');
    }

    const switchToSecondForm = (numParticipants: number, tasksNames: string[]) => {
        setNumParticipants(numParticipants);
        setTasksNames(tasksNames);
        setNumTasks(tasksNames.length);
        setCurrentForm('second');
        setCurrentTaskIndex(0);
    };

    return (
        <S.Wrapper>
            <S.SidebarContainer>
                <Sidebar />
            </S.SidebarContainer>

            <S.ContentContainer>
                {currentForm === 'project' ? (
                    <ProjectForm switchToSecondForm={switchToSecondForm} onSave={setProjectFormData} title='Editar Projeto' />
                ) : currentForm === 'second' && currentTaskIndex < numTasks ? (
                    <SecondForm
                        key={currentTaskIndex}
                        switchToProjectForm={switchToProjectForm}
                        numParticipants={numParticipants}
                        tasksNames={tasksNames}
                        currentTaskIndex={currentTaskIndex}
                        switchToNextForm={() => setCurrentTaskIndex(currentTaskIndex + 1)}
                        projectFormData={projectFormData}
                    />
                ) : null}
            </S.ContentContainer>
        </S.Wrapper>
    );
}