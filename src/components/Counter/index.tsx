import * as S from "./styles";
import { BsPlusSquareFill, BsFileMinusFill } from "react-icons/bs";

type CounterProps = {
    count: number
    onIncrement: () => void
    onDecrement: () => void
};
export const Counter = ({ count, onIncrement, onDecrement }: CounterProps) => {

    return (
        <S.CounterContainer>
            <BsFileMinusFill onClick={onDecrement} />
            <S.Number>{count}</S.Number>
            <BsPlusSquareFill onClick={onIncrement} />
        </S.CounterContainer>
    )
}