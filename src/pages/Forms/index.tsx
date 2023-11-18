import { useState } from 'react';
import * as S from './styles';
import { Sidebar } from '../../components/Sidebar';
import ProjectForm from '../../components/ProjectForm';
import { SecondForm } from '../../components/SecondForm';
import { ThirdForm } from '../../components/ThirdForm';

export const Forms = () => {
    const [currentForm, setCurrentForm] = useState('project');

    const switchToProjectForm = () => {
        setCurrentForm('project');
    }

    const switchToSecondForm = () => {
        setCurrentForm('second');
    }

    const switchToThirdForm = () => {
        setCurrentForm('third');
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
                    <SecondForm switchToProjectForm={switchToProjectForm} switchToThirdForm={switchToThirdForm} />
                ) : currentForm === 'third' ? (
                    <ThirdForm switchToSecondForm={switchToSecondForm} />
                ) : null}
            </S.ContentContainer>
        </S.Wrapper>
    );
};
