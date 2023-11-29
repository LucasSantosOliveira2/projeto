import * as S from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CardMembers } from "../../components/CardMembers";
import Malcom from "../../assets/Images/profile.png"

export const Members = () => {
    return (
        <>
            <Header />
            <S.Wrapper>
                <S.Title>Conheça o nosso time</S.Title>
                <S.ContainerType>
                    <S.Type>Professores </S.Type>
                    <S.Separator></S.Separator>
                </S.ContainerType>

                <S.ContainerCard>
                    <CardMembers
                        image={Malcom}
                        name="Williamson Alison Freitas"
                    />
                </S.ContainerCard>
                <S.ContainerType>
                    <S.Type>Alunos do Mestrado</S.Type>
                    <S.Separator></S.Separator>
                </S.ContainerType>
                <S.ContainerCard>
                    <CardMembers
                        image={Malcom}
                        name="Matheus"
                    />

                </S.ContainerCard>
                <S.ContainerType>
                    <S.Type>Alunos da Graduação</S.Type>
                    <S.Separator></S.Separator>
                </S.ContainerType>

                <S.ContainerCard>
                    <CardMembers
                        image={Malcom}
                        name="Lucas Santos"
                        description="Aluno da Ciência da Computação."
                    />
                    <CardMembers
                        image={Malcom}
                        name="Ricardo Costa"
                        description="Aluno da Engenharia de Software."
                    />
                    <CardMembers
                        image={Malcom}
                        name="Tales Soares"
                        description="Aluno da Engenharia de Software."
                    />
                </S.ContainerCard>
            </S.Wrapper>
            <Footer />
        </>
    )
}