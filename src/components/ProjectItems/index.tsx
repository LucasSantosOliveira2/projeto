import * as S from "./styles";

type ProjectItemsProps = {
    Title: string
    Owner: string
    Modification: string
}

export const ProjectItems = ({ Title, Owner, Modification }: ProjectItemsProps) => {
    return (
        <S.Container>
            <S.Info>{Title}</S.Info>
            <S.Info>{Owner}</S.Info>
            <S.Info>{Modification}</S.Info>
        </S.Container>
    )
}