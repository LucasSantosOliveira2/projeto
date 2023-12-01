import { ButtonDeleteProject } from "../ButtonDeleteProject";
import * as S from "./styles";

type ProjectCardProps = {
    title: string;
    id: any;
}

export const ProjectCard = ({ title, id }: ProjectCardProps) => {
    return (
        <S.Wrapper>
            <S.InfoTitle>{title}</S.InfoTitle>
            <ButtonDeleteProject widht={"200px"} name={"Excluir Projeto"} projectId={ id } />
        </S.Wrapper>
    );
}
