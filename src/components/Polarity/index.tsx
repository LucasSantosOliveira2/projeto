import * as S from "./styles";
import AlegriaImage from "../../assets/Images/Alegria.png";
import OutrosImage from "../../assets/Images/Outros.png";
import TristezaImage from "../../assets/Images/Tristeza.png";
import ProgressBarComponent from "../ProgressBar";

type PolarityProps = {
    polarity: string;
    percentage: number;
}

export const Polarity = ({ polarity, percentage }: PolarityProps) => {


    const getPolarityImage = (polarity: string) => {
        switch (polarity.toLowerCase()) {
            case "pos":
                return AlegriaImage;
            case "neu":
                return OutrosImage;
            case "neg":
                return TristezaImage;
            default:
                return null;
        }
    }

    const getPolarityName = (polarity: string) => {
        switch (polarity.toLowerCase()) {
            case "pos":
                return "Positivo";
            case "neu":
                return "Neutro";
            case "neg":
                return "Negativo";
            default:
                return null;
        }
    }

    const polarityImage = getPolarityImage(polarity);

    const polarityName = getPolarityName(polarity);

    const percentageFinal = (percentage * 100).toFixed(2);

    return (
        <S.Wrapper>
            <S.Title>
                Polaridade
            </S.Title>
            <S.ContainerContent>
                <S.Emoji style={{ backgroundImage: `url(${polarityImage})` }}></S.Emoji>
                <ProgressBarComponent percentage={Number(percentageFinal)} polarity={polarity as "pos" | "neu" | "neg"}  />
                <S.Emotion>{polarityName} <span>{percentageFinal}%</span></S.Emotion>
            </S.ContainerContent>
        </S.Wrapper>
    )
}
