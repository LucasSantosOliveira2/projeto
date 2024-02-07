import * as S from "./styles";
import { FaEdit, FaTrash, FaFileExport } from "react-icons/fa";

type ButtonDashboardProps = {
  widht: string;
  name: string;
  action?: "delete" | "edit" | "export";
  onClick?: () => void;
};

export const ButtonDashboard: React.FC<ButtonDashboardProps> = ({
  name,
  widht,
  action,
  onClick,
}) => {
  let icon = null;

  if (action === "edit") {
    icon = <FaEdit size={24} />;
  } else if (action === "delete") {
    icon = <FaTrash size={24}/>;
  } else if (action === "export") {
    icon = <FaFileExport size={24} />;
  }
  
  return (
    <S.ButtonDashboard style={{ width: widht }} onClick={onClick}>
      {icon && action && <S.DivIcon>{icon}</S.DivIcon>}
      {name}
    </S.ButtonDashboard>
  );
};
