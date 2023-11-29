import * as S from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { ProjectCard } from "../../components/ProjectCard";

export const Project = () => {
    return (
        <S.Wrapper>
            <S.SidebarContainer>
                <Sidebar />
                <HeaderDashboard />
            </S.SidebarContainer>

            <S.ContentContainer>
                <S.InfoContainer>
                    <S.Title>Projetos</S.Title>
                    <ProjectCard title="Análise comentários do twitter" number="1" />
                    <ProjectCard title="Análise comentários do twitter" number="1" />
                    <ProjectCard title="Análise comentários do twitter" number="1" />
                    <ProjectCard title="Análise comentários do twitter" number="1" />
                </S.InfoContainer>
            </S.ContentContainer>
        </S.Wrapper>
    );
};
