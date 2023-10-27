import * as S from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import TabBar from "../../components/TabBar";
import { ProjectItems } from "../../components/ProjectItems";

export const Project = () => {
    return (
        <S.Wrapper>
            <S.SidebarContainer>
                <Sidebar />
                <HeaderDashboard />
            </S.SidebarContainer>

            <S.ContentContainer>
                <TabBar tabs={['Recentes', 'Compartilhados', 'Todos']} defaultTab="Recentes" />
                <S.ContainerItems>
                    <ProjectItems Title="Título" Owner="Dono" Modification="Última Modificação" />
                    <ProjectItems Title="Analise de dados" Owner="Lucas Santos Oliveira" Modification=" 1 dia" />
                    <ProjectItems Title="teste" Owner="Lucas Santos Oliveira" Modification=" 1 dia" />
                    <ProjectItems Title="Analise de dados" Owner="Lucas Santos Oliveira" Modification=" 1 dia" />

                </S.ContainerItems>
            </S.ContentContainer>
        </S.Wrapper>
    );
};
