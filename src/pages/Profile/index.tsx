import { useEffect } from "react";
import * as S from "./styles";
import { Sidebar } from "../../components/Sidebar";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { ContentProfile } from "../../components/ContentProfile";
import { useUser } from "../../components/UserContext";
import BackgroundImage from "../../assets/Images/BackgroundImage.png";



export const Profile = () => {
    const { userData, setUser } = useUser();

    useEffect(() => {
        const storedUserInfo = window.localStorage.getItem("userInfo");

        if (storedUserInfo) {
            const userInfo = JSON.parse(storedUserInfo);

            if (JSON.stringify(userInfo) !== JSON.stringify(userData)) {
                setUser(userInfo);
            }
        }
    }, [setUser, userData]);



    return (
        <S.Wrapper>
            <S.SidebarContainer>
                <Sidebar />
                <HeaderDashboard />
            </S.SidebarContainer>
            <S.ContentContainer>
                <S.MediumProfile>
                    <S.BackgroundImage
                        style={{
                            backgroundImage: `url(${BackgroundImage})`,
                        }}
                    />
                    <S.ProfileContent>
                        <S.ProfileImage
                            style={{
                                backgroundImage: `url(${userData?.picture})`,
                            }}
                        />

                        <S.ProfileName>{userData && userData.name}</S.ProfileName>
                    </S.ProfileContent>
                </S.MediumProfile>
                <S.InfoContainer>
                    <S.Title>Informações Gerais</S.Title>
                    <S.InfoContent>
                        <ContentProfile type="E-mail" name={userData?.email} />
                        {/*  <ContentProfile type="Educação" />
                        <ContentProfile type="Departamento" />
                        <ContentProfile type="Organização" />*/}
                    </S.InfoContent>
                </S.InfoContainer>

            </S.ContentContainer>
        </S.Wrapper>
    )
}