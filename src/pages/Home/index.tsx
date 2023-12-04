import * as S from "./styles";
import FeelingsImage from "../../assets/Images/Sentiment.jpg"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CardAnalisys } from "../../components/CardAnalisys";
import Video from "../../assets/Images/video.png"
import Voice from "../../assets/Images/voz.png"
import Text from "../../assets/Images/text.png"
import MouseTrack from "../../assets/Images/mousetrack.png"


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
                    <S.DescriptionAbout>
                        <S.TitleAbout> Como funciona?</S.TitleAbout>
                        <S.TextAbout>
                            A análise de sentimentos é uma aplicação de tecnologias de processamento de linguagem natural que treinam softwares de computador para entender o texto.
                        </S.TextAbout>
                    </S.DescriptionAbout>
                </S.ContainerAbout>
                <S.DescriptionAbout>
                    <S.TitleCard>Tipos de Análises</S.TitleCard>
                    <S.ContainerCard>
                        <CardAnalisys image={Video} name="Vídeo" />
                        <CardAnalisys image={Voice} name="Voz" />
                        <CardAnalisys image={Text} name="Texto" />
                        <CardAnalisys image={MouseTrack} name="Mousetrack" />
                    </S.ContainerCard>
                </S.DescriptionAbout>

            </S.Wrapper>
            <Footer />
        </>
    );
};