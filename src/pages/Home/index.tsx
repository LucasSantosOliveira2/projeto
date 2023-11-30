import * as S from "./styles";
import FeelingsImage from "../../assets/Images/header.jpg"
import Analitic from "../../assets/Images/analitic.png"
import Processing from "../../assets/Images/processing.jpg"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";


export const Home = () => {
    return (
        <>
            <Header />
            <S.Wrapper>
                <S.Header>
                    <S.Title>FAS - Ferramenta de Análise de Sentimentos</S.Title>
                    <S.Description> Compreenda, Extraia e Estude Sentimentos</S.Description>
                </S.Header>
                <Button name="Saiba mais" widht="250px" />
                <S.ContainerImage>
                    <S.Image src={FeelingsImage} alt="Sentimentos" />
                </S.ContainerImage>
                <S.ContainerAbout>
                    <S.DescriptionAbout>
                        <S.TitleAbout> O que é?</S.TitleAbout>
                        <S.TextAbout>
                            Análise de sentimentos é o processo de analisar um texto digital para determinar se o tom emocional da mensagem é positivo, negativo ou neutro.
                        </S.TextAbout>
                    </S.DescriptionAbout>
                    <S.ImageAbout>
                        <S.Image src={Analitic} alt="" />
                    </S.ImageAbout>
                </S.ContainerAbout>
                <S.WorksContainer>
                    <S.DescriptionAbout>
                        <S.TitleAbout> Como funciona?</S.TitleAbout>
                        <S.TextAbout>
                            A análise de sentimentos é uma aplicação de tecnologias de processamento de linguagem natural que treinam softwares de computador para entender o texto.
                        </S.TextAbout>
                    </S.DescriptionAbout>
                    <S.ImageAbout>
                        <S.Image src={Processing} alt="" />
                    </S.ImageAbout>
                </S.WorksContainer>
            </S.Wrapper>
            <Footer />
        </>
    );
};