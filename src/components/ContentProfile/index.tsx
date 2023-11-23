import * as S from "./styles";

type ContentProfileProps = {
    type: string,
    name?: string,
}

export const ContentProfile = ({ type, name }: ContentProfileProps) => {
    return (
        <S.Wrapper>
            <S.InfoType>{type} </S.InfoType>
            <S.InfoName>{name}</S.InfoName>
        </S.Wrapper >
    )
}