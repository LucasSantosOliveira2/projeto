import * as S from "./styles";
import { Logo } from "../Logo";
import { FacebookIcon } from "../Images/FacebookIcon";
import { TwitterIcon } from "../Images/TwitterIcon";
import { LinkedinIcon } from "../Images/LinkedinIcon";
import { InstagramIcon } from "../Images/InstagramIcon";

export const Footer = () => {
    return (
        <S.Wrapper>
            <Logo />
            <S.BottomBar>
                <S.Title>Explore</S.Title>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Sobre nós</a>
                </li>
                <li>
                    <a>Contatos</a>
                </li>
            </S.BottomBar>
            <S.ContainerSocialMedia>
                <S.Title>Redes Sociais</S.Title>
                <S.ContainerLinks>
                    <TwitterIcon />
                    <FacebookIcon />
                    <InstagramIcon />
                    <LinkedinIcon />
                </S.ContainerLinks>
            </S.ContainerSocialMedia>
        </S.Wrapper>
    )
}