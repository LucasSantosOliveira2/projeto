import * as S from "./styles";

type ProjectCardProps<T = {}> = {
    title?: Extract<keyof T, string>;
    number?: Extract<keyof T, string | number> | undefined;
}

export const ProjectCard = <T,>({ title, number }: ProjectCardProps<T>) => {
    return (
        <S.Wrapper>
            <S.InfoTitle>{title}</S.InfoTitle>
            <S.InfoNumber>{number !== undefined ? `Projeto #${number}` : ''}</S.InfoNumber>
        </S.Wrapper>
    );
}
