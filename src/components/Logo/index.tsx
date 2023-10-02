import * as S from './styles';
import SmileIcon from "../../assets/Images/emotion.png"

type LogoProps = {
    name?: string,
}

export const Logo = ({ name }: LogoProps) => {
    return (
        <S.LogoContainer>
            <img src={SmileIcon} alt="Smile" />
            <S.LogoTitle > {name}</S.LogoTitle>
        </S.LogoContainer >
    )
};