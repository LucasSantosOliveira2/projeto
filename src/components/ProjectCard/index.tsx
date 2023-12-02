import * as S from "./styles";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { HiMiniSquaresPlus } from "react-icons/hi2";

type ProjectCardProps = {
    title: string;
    number: number;
    projectId: number /*troquei de string pra number*/
}

export const ProjectCard = ({ title, number, projectId }: ProjectCardProps) => {
    const handleDeleteProject = async () => {
        try {
            // Faça uma solicitação para o endpoint de exclusão
            const response = await fetch('http://localhost:8080/api/sentimentos/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: projectId, // Certifique-se de que o nome do campo corresponde ao esperado pelo servidor
                }),
            });

            if (response.ok) {
                window.location.reload();
            } else {
                alert('Falha ao excluir o projeto');
            }
        } catch (error) {
            alert('Erro ao excluir o projeto');
        }
    };
    return (
        <S.Wrapper>
            <S.ContentContainer>
                <S.NumberContainer>{number}</S.NumberContainer>
                <S.InfoTitle>{title}</S.InfoTitle>
            </S.ContentContainer>
            <S.OptionContainer>
                <S.StyledLink to="/dashboard">
                    <S.Option><HiMiniSquaresPlus />Dashboard</S.Option>
                </S.StyledLink>

                <S.StyledLink to="/forms">
                    <S.Option><MdModeEdit />Editar</S.Option>
                </S.StyledLink>
                <S.Option onClick={handleDeleteProject}><MdDelete />Excluir</S.Option>
            </S.OptionContainer>
        </S.Wrapper>
    );
}
