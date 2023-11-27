import * as S from "./styles";

type ProjectCardProps = {
    title?: string,
    number?: string,
}

export const ProjectCard = ({ title, number }: ProjectCardProps) => {
    return (
        <S.Wrapper>
            <S.InfoTitle>{title}</S.InfoTitle>
            <S.InfoNumber>Projeto #{number}</S.InfoNumber>
        </S.Wrapper >
    )
}