import * as S from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { Graphic } from "../../components/Graphic";

export const Dashboard = () => {
    return (
        <S.Wrapper>
            <Sidebar />
            <HeaderDashboard />
            <S.ContentContainer>
                <div>
                    <Graphic />
                </div>
            </S.ContentContainer>
        </S.Wrapper>
    )
}   