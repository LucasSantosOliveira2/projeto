import { useState, useEffect } from "react";
import * as S from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { ProjectCard } from "../../components/ProjectCard";

interface project {
  nomeProjeto: string;
  idProjeto: number;
}

export const Project = () => {
  const [projects, setProjects] = useState<project[]>([]);
  const url = "http://35.209.202.3";

  const userInfo = window.localStorage.getItem("userInfo");
  const userEmail = userInfo ? JSON.parse(userInfo).email : "";

  useEffect(() => {
    fetch(`${url}/project`, {
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
        <S.InfoContainer>
          <S.Title>Todos os projetos</S.Title>
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard
                key={project.idProjeto}
                title={project.nomeProjeto}
                projectId={project.idProjeto}
                number={index + 1}
              />
            ))
          ) : (
            <S.ProjectMessage>
              Não existem projetos no momento.
            </S.ProjectMessage>
          )}
        </S.InfoContainer>
      </S.ContentContainer>
    </S.Wrapper>
  );
};
