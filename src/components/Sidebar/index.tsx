import { useState, useEffect } from 'react';
import * as S from "./styles";
import { SidebarItem } from "../SidebarItem";
import { BiSolidDashboard, BiSolidUser, BiSolidBarChartSquare, BiSolidFolder, BiSolidExit } from "react-icons/bi";
import { useLocation } from 'react-router-dom';
import { IoMdAnalytics } from "react-icons/io";


IoMdAnalytics
export const Sidebar = () => {

    const location = useLocation();
    const [activeItem, setActiveItem] = useState('project');

    useEffect(() => {
        switch (location.pathname) {
            case '/project':
                setActiveItem('project');
                break;
            case '/dashboard':
                setActiveItem('dashboard');
                break;
            case '/statistics':
                setActiveItem('statistics');
                break;
            case '/profile':
                setActiveItem('profile');
                break;
            case '/analysis':
                setActiveItem('analysis');
                break;
            default:
                setActiveItem('project');
        }
    }, [location]);

    const handleItemClick = (itemName: string) => {
        setActiveItem(itemName);
    };

    return (
        <S.Wrapper>
            <S.Title>Olá, Lucas</S.Title>
            <S.Separator />
            <S.StyledLink to="/forms">
                <S.ButtonCreateProject >Criar Projeto</S.ButtonCreateProject>
            </S.StyledLink>

            <S.StyledLink to="/project">
                <SidebarItem
                    icon={<BiSolidFolder />}
                    name="Projetos"
                    isActive={activeItem === 'project'}
                    onClick={() => handleItemClick('project')}
                />
            </S.StyledLink>
            <S.StyledLink to="/dashboard">
                <SidebarItem
                    icon={<BiSolidDashboard />}
                    name="Dashboard"
                    isActive={activeItem === 'dashboard'}
                    onClick={() => handleItemClick('dashboard')}
                />
            </S.StyledLink>
            <S.StyledLink to="/analysis">
                <SidebarItem
                    icon={<IoMdAnalytics />}
                    name="Análise"
                    isActive={activeItem === 'analysis'}
                    onClick={() => handleItemClick('analysis')}
                />
            </S.StyledLink>
            <S.StyledLink to="/statistics">
                <SidebarItem
                    icon={<BiSolidBarChartSquare />}
                    name="Estatísticas"
                    isActive={activeItem === 'statistics'}
                    onClick={() => handleItemClick('statistics')}
                />
            </S.StyledLink>
            <S.StyledLink to="/profile">
                <SidebarItem
                    icon={<BiSolidUser />}
                    name="Perfil"
                    isActive={activeItem === 'profile'}
                    onClick={() => handleItemClick('profile')}
                />
            </S.StyledLink>
            <S.StyledLink to="/">
                <SidebarItem
                    icon={<BiSolidExit />}
                    name="Sair"
                />
            </S.StyledLink>
        </S.Wrapper>
    );
};
