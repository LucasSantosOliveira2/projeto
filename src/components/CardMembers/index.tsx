import * as S from "./styles";

type CardMembersProps = {
    image: string
    name: string
    description?: string
    additionalinfo?: string
}

export const CardMembers = ({ image, name, description, additionalinfo }: CardMembersProps) => {
    return (
        <S.CardContainer>
            <S.Wrapper>
                <S.ProfileImage style={{ backgroundImage: `url(${image})` }}></S.ProfileImage>
                <S.Info>
                    <S.ProfileName>{name}</S.ProfileName>
                    <S.ProfileDescription>{description}</S.ProfileDescription>
                </S.Info>
            </S.Wrapper>
            <S.InfoOverlay className="info-overlay">
                <S.Wrapper>
                    <S.ProfileName>{name}</S.ProfileName>
                    <S.ProfileDescription>{additionalinfo}</S.ProfileDescription>
                </S.Wrapper>
            </S.InfoOverlay>
        </S.CardContainer>
    );
};