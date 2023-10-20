import * as S from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { HeaderDashboard } from "../../components/HeaderDashboard";

export const Statistics = () => {
    return (
        <S.Wrapper>
            <Sidebar />
            <HeaderDashboard />
        </S.Wrapper>
    )
}