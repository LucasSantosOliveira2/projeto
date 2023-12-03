import * as S from "./styles";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

type ProjectCardProps = {
    title: string;
    number: number;
    projectId: number;
}

export const ProjectCard = ({ title, number, projectId }: ProjectCardProps) => {

    const navigate = useNavigate();

    const handleDeleteProject = async () => {
        try {
            // Faça uma solicitação para o endpoint de exclusão
            const response = await fetch('http://localhost:8080/api/sentimentos/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: projectId
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

    const handleEditProject = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/sentimentos/getProject/' + projectId, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            response.json().then(data => 
                navigate('/formsEdit', { 
                    state: { projectData: data }
                })
            );
        } catch (error) {
            alert('Erro ao excluir o projeto:' + error);
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

                <S.StyledLink to="">
                    <S.Option onClick={handleEditProject}><MdModeEdit />Editar</S.Option>
                </S.StyledLink>
                <S.Option onClick={handleDeleteProject}><MdDelete />Excluir</S.Option>
            </S.OptionContainer>
        </S.Wrapper>
    );
}
