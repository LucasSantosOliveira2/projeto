import * as S from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { ContentProfile } from "../../components/ContentProfile";
import { ProjectCard } from "../../components/ProjectCard";
import BackgroundImage from "../../assets/Images/BackgroundImage.png"
import Malcom from "../../assets/Images/malcom.jpeg"


export const Profile = () => {
    return (
        <S.Wrapper>
            <S.SidebarContainer>
                <Sidebar />
                <HeaderDashboard />
            </S.SidebarContainer>
            <S.ContentContainer>
                <S.MediumProfile>
                    <S.BackgroundImage
                        style={{
                            backgroundImage: `url(${BackgroundImage})`,
                        }}
                    />
                    <S.ProfileContent>
                        <S.ProfileImage
                            style={{
                                backgroundImage: `url(${Malcom})`,
                            }}
                        />
                        <S.ProfileName>Malcom</S.ProfileName>
                    </S.ProfileContent>
                </S.MediumProfile>
                <S.InfoContainer>
                    <S.Title>Informações Gerais</S.Title>
                    <S.InfoContent>
                        <ContentProfile type="E-mail" name="exemplo@exemplo.com" />
                        <ContentProfile type="Educação" />
                        <ContentProfile type="Departamento" />
                        <ContentProfile type="Organização" />
                    </S.InfoContent>
                </S.InfoContainer>
                <S.InfoContainer>
                    <S.Title>Projetos</S.Title>
                    <ProjectCard title="Análise comentários do twitter" number="1" />
                    <ProjectCard title="Análise comentários do twitter" number="1" />
                    <ProjectCard title="Análise comentários do twitter" number="1" />
                    <ProjectCard title="Análise comentários do twitter" number="1" />
                </S.InfoContainer>
            </S.ContentContainer>
        </S.Wrapper>
    )
}