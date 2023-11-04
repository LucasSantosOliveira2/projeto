import { useState } from 'react';
import * as S from './styles';
import { Sidebar } from '../../components/Sidebar';
import ProjectForm from '../../components/ProjectForm';
import { SecondForm } from '../../components/SecondForm';

export const Forms = () => {
    const [currentForm, setCurrentForm] = useState('project');

    const switchToSecondForm = () => {
        setCurrentForm('second');
    };

    const switchToProjectForm = () => {
        setCurrentForm('project');
    };

    return (
        <S.Wrapper>
            <S.SidebarContainer>
                <Sidebar />
            </S.SidebarContainer>

            <S.ContentContainer>
                {currentForm === 'project' ? (
                    <ProjectForm switchToSecondForm={switchToSecondForm} />
                ) : currentForm === 'second' ? (
                    <SecondForm switchToProjectForm={switchToProjectForm} />
                ) : null}
            </S.ContentContainer>
        </S.Wrapper>
    );
};
