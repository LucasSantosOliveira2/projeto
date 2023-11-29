import { useState } from 'react';
import * as S from './styles';
import { Sidebar } from '../../components/Sidebar';
import ProjectForm, { FormProps } from '../../components/ProjectForm';
import { SecondForm, SecondFormValues } from '../../components/SecondForm';

type ProjectFormDataState = FormProps | null;


export const Forms = () => {
    const [currentForm, setCurrentForm] = useState('project');
    const [numParticipants, setNumParticipants] = useState(0);
    const [tasksNames, setTasksNames] = useState<string[]>([]);
    const [numTasks, setNumTasks] = useState(0);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [projectFormData, setProjectFormData] = useState<ProjectFormDataState>(null);
    const [allFormData, setAllFormData] = useState<Array<SecondFormValues>>([]);



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

    //console.log('Dados salvos:', projectFormData);
    //console.log("currentTaskIndex em Forms.tsx:", currentTaskIndex);



    return (
        <S.Wrapper>
            <S.SidebarContainer>
                <Sidebar />
            </S.SidebarContainer>

            <S.ContentContainer>
                {currentForm === 'project' ? (
                    <ProjectForm switchToSecondForm={switchToSecondForm} onSave={setProjectFormData} />
                ) : currentForm === 'second' && currentTaskIndex < numTasks ? (
                    <SecondForm
                        key={currentTaskIndex}
                        switchToProjectForm={switchToProjectForm}
                        numParticipants={numParticipants}
                        tasksNames={tasksNames}
                        currentTaskIndex={currentTaskIndex}
                        switchToNextForm={() => setCurrentTaskIndex(currentTaskIndex + 1)}
                    />
                ) : null}
            </S.ContentContainer>
        </S.Wrapper>
    );
}