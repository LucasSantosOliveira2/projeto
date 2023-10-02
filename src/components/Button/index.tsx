import * as S from "./styles";

type ButtonProps = {
    widht: string,
    name: string,
}


export const Button = ({ widht, name }: ButtonProps) => {

    return (
        <S.Button style={{ width: widht }}>{name}</S.Button>
    )

}