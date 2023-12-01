import * as S from "./styles";

type ButtonDeleteProjectProps = {
    widht: string,
    name: string,
    projectId: string
}

export const ButtonDeleteProject = ({ widht, name, projectId }: ButtonDeleteProjectProps) => {

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
        <S.ButtonOptionProject style={{ width: widht }} onClick={handleDeleteProject}>{name}</S.ButtonOptionProject>
    )

}