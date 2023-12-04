import * as S from "./styles";

type ButtonProps = {
    widht: string,
    name: string,
    onClick?: () => void;
}


export const Button: React.FC<ButtonProps> = ({ name, widht, onClick }) => {

    return (
        <S.Button style={{ width: widht }} onClick={onClick}> {name}</S.Button>
    )

}