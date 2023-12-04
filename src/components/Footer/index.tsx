import * as S from "./styles";
import { Logo } from "../Logo";
import { FacebookIcon } from "../Images/FacebookIcon";
import { TwitterIcon } from "../Images/TwitterIcon";
import { LinkedinIcon } from "../Images/LinkedinIcon";
import { InstagramIcon } from "../Images/InstagramIcon";

export const Footer = () => {
    return (
        <S.Wrapper>
            <Logo name="FAS"/>
            <S.BottomBar>
                <S.Title>Menu</S.Title>
                <li>
                    <S.StyledLink to="/" >
                        Home
                    </S.StyledLink>
                </li>
                <li>
                    <S.StyledLink to="/members" >
                        Membros
                    </S.StyledLink>
                </li>
            </S.BottomBar>
            <S.ContainerSocialMedia>
                <S.Title>UNIPAMPA</S.Title>
                <S.Title2>Av. Tiarajú 810</S.Title2>
                <S.Title2>Ibirapuitã</S.Title2>
                <S.Title2>Alegrete, RS</S.Title2>
                {/* <S.ContainerLinks>
                    <TwitterIcon />
                    <FacebookIcon />
                    <InstagramIcon />
                    <LinkedinIcon />
                </S.ContainerLinks> */}
            </S.ContainerSocialMedia>
        </S.Wrapper>
    )
}