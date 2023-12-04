import * as S from "./styles";

type CardAnalisysProps = {
    image?: string,
    name: string
}

export const CardAnalisys = ({ image, name }: CardAnalisysProps) => {
    return (
        <S.Wrapper>

            <S.Image style={{ backgroundImage: `url(${image})` }}></S.Image>
            <S.Name>{name}</S.Name>
        </S.Wrapper >
    )

}