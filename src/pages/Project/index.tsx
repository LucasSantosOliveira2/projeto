import { useState, useEffect } from 'react';
import * as S from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { ProjectCard } from "../../components/ProjectCard";

export const Project = () => {
    const [projects, setProjects] = useState([]);
    
    const userInfo = window.localStorage.getItem('userInfo');
    const userEmail = userInfo ? JSON.parse(userInfo).email : '';

    useEffect(() => {
        fetch('http://localhost:8080/project', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail
            }),
        })
        .then(response => response.json())
        .then(data => {
            setProjects(data);
        })
        .catch(error => {
            console.error(error);
        });
    }, [userEmail]);

    return (
        <S.Wrapper>
            <S.SidebarContainer>
                <Sidebar />
                <HeaderDashboard />
            </S.SidebarContainer>

            <S.ContentContainer>
                <S.InfoContainer>
                    <S.Title>Projetos</S.Title>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} title={project} number={(index + 1).toString()} />
                    ))}
                </S.InfoContainer>
            </S.ContentContainer>
        </S.Wrapper>
    );
};
