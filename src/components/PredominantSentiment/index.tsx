import * as S from "./styles";
import AlegriaImage from "../../assets/Images/Alegria.png";
import OutrosImage from "../../assets/Images/Outros.png";
import NojoImage from "../../assets/Images/Nojo.png";
import TristezaImage from "../../assets/Images/Tristeza.png";
import MedoImage from "../../assets/Images/Medo.png";
import SurpresaImage from "../../assets/Images/Surpresa.png";
import RaivaImage from "../../assets/Images/Raiva.png";

type SentimentProps = {
    emotion: string;
    percentage: number;
}

export const PredominantSentiment = ({ emotion, percentage }: SentimentProps) => {

    const getEmotionImage = (emotion: string) => {
        switch (emotion.toLowerCase()) {
            case "alegria":
                return AlegriaImage;
            case "outros":
                return OutrosImage;
            case "nojo":
                return NojoImage;
            case "tristeza":
                return TristezaImage;
            case "medo":
                return MedoImage;
            case "surpresa":
                return SurpresaImage;
            case "raiva":
                return RaivaImage;
            default:
                return null;
        }
    }

    const getEmotionName = (emotion: string) => {
        switch (emotion) {
            case "alegria":
                return "Alegria";
            case "outros":
                return "Outros";
            case "nojo":
                return "Nojo";
            case "tristeza":
                return "Tristeza";
            case "medo":
                return "Medo";
            case "surpresa":
                return "Surpresa";
            case "raiva":
                return "Raiva";
            default:
                return null;
        }
    }

    const emotionImage = getEmotionImage(emotion);
    
    const emotionName = getEmotionName(emotion);
    const percentageFinal = (percentage * 100).toFixed(2);

    return (
        <S.Wrapper>
            <S.Title>
                Sentimento Predominante
            </S.Title>
            <S.ContainerContent>
                <S.Emoji style={{ backgroundImage: `url(${emotionImage})` }}></S.Emoji>
                <S.Emotion>{emotionName} <span>{percentageFinal}%</span></S.Emotion>
            </S.ContainerContent>
        </S.Wrapper>
    )
}
