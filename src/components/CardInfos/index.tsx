import * as S from "./styles";

type CardInfosProps  = {
    image?: string,
    name: string
}

export const CardInfos = ({ image, name }: CardInfosProps ) => {
    return (
        <S.Wrapper>

            <S.Image style={{ backgroundImage: `url(${image})` }}></S.Image>
            <S.Name>{name}</S.Name>
        </S.Wrapper >
    )
}