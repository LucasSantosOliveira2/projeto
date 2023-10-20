import * as S from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CardMembers } from "../../components/CardMembers";
import Malcom from "../../assets/Images/malcom.jpeg"

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
                        name="Malcom X"
                        description="Malcolm X, mais tarde nomeado como Malik el-Shabazz, foi um afro-americano, ativista dos direitos humanos, ministro muçulmano e defensor do Nacionalismo Negro nos Estados Unidos."
                        additionalinfo="Fundou a Organização para a Unidade Afro-Americana, de inspiração separatista. Defensor dos direitos dos afro-americanos, conseguiu mobilizar brancos e negros na conscientização sobre os crimes cometidos contra a população afro-americana."
                    />
                    <CardMembers
                        image={Malcom}
                        name="Malcom X"
                        description="Malcolm X, mais tarde nomeado como Malik el-Shabazz, foi um afro-americano, ativista dos direitos humanos, ministro muçulmano e defensor do Nacionalismo Negro nos Estados Unidos."
                        additionalinfo="Fundou a Organização para a Unidade Afro-Americana, de inspiração separatista. Defensor dos direitos dos afro-americanos, conseguiu mobilizar brancos e negros na conscientização sobre os crimes cometidos contra a população afro-americana."
                    />
                    <CardMembers
                        image={Malcom}
                        name="Malcom X"
                        description="Malcolm X, mais tarde nomeado como Malik el-Shabazz, foi um afro-americano, ativista dos direitos humanos, ministro muçulmano e defensor do Nacionalismo Negro nos Estados Unidos."
                        additionalinfo="Fundou a Organização para a Unidade Afro-Americana, de inspiração separatista. Defensor dos direitos dos afro-americanos, conseguiu mobilizar brancos e negros na conscientização sobre os crimes cometidos contra a população afro-americana."
                    />
                </S.ContainerCard>
                <S.ContainerType>
                    <S.Type>Alunos</S.Type>
                    <S.Separator></S.Separator>
                </S.ContainerType>

                <S.ContainerCard>
                    <CardMembers
                        image={Malcom}
                        name="Malcom X"
                        description="Malcolm X, mais tarde nomeado como Malik el-Shabazz, foi um afro-americano, ativista dos direitos humanos, ministro muçulmano e defensor do Nacionalismo Negro nos Estados Unidos."
                    />
                    <CardMembers
                        image={Malcom}
                        name="Malcom X"
                        description="Malcolm X, mais tarde nomeado como Malik el-Shabazz, foi um afro-americano, ativista dos direitos humanos, ministro muçulmano e defensor do Nacionalismo Negro nos Estados Unidos."
                    />
                    <CardMembers
                        image={Malcom}
                        name="Malcom X"
                        description="Malcolm X, mais tarde nomeado como Malik el-Shabazz, foi um afro-americano, ativista dos direitos humanos, ministro muçulmano e defensor do Nacionalismo Negro nos Estados Unidos."
                    />
                </S.ContainerCard>
            </S.Wrapper>
            <Footer />
        </>
    )
}