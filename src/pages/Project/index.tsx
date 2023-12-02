import { useState, useEffect } from "react";
import * as S from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { ProjectCard } from "../../components/ProjectCard";
import TabBar from "../../components/TabBar";

interface project {
  nomeProjeto: string;
  idProjeto: number;
}

export const Project = () => {
  const [projects, setProjects] = useState<project[]>([]);

  const userInfo = window.localStorage.getItem("userInfo");
  const userEmail = userInfo ? JSON.parse(userInfo).email : "";

  useEffect(() => {
    fetch("http://localhost:8080/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
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
        <TabBar tabs={['Todos', 'Recentes', 'Modificado']} defaultTab="Todos" />
        <S.InfoContainer>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.idProjeto}
              title={project.nomeProjeto}
              projectId={project.idProjeto}
              number={index + 1}
            />
          ))}
          <ProjectCard title="Jaydon Ekstrom Bothman" projectId={1222} number={1} />
          <ProjectCard title="teste" projectId={1222} number={2} />
        </S.InfoContainer>
      </S.ContentContainer>
    </S.Wrapper>
  );
};
