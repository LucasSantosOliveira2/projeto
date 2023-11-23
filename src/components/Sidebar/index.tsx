import { useState, useEffect } from 'react';
import * as S from "./styles";
import { SidebarItem } from "../SidebarItem";
import { BiSolidDashboard, BiSolidUser, BiSolidBarChartSquare, BiSolidFolder, BiSolidExit } from "react-icons/bi";
import { useLocation, useNavigate } from 'react-router-dom';
import { IoMdAnalytics } from "react-icons/io";
import { googleLogout } from '@react-oauth/google';

IoMdAnalytics
export const Sidebar = () => {

    const location = useLocation();
    const navigate = useNavigate();

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
    }

    const handleLogout = async () => {
        try {
            await googleLogout();
            navigate('/');
        } catch (error) {
            console.error('Erro durante o logout:', error);
        }
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

            <S.StyledLink to="/profile">
                <SidebarItem
                    icon={<BiSolidUser />}
                    name="Perfil"
                    isActive={activeItem === 'profile'}
                    onClick={() => handleItemClick('profile')}
                />
            </S.StyledLink>
            <SidebarItem
                icon={<BiSolidExit />}
                name="Sair"
                onClick={handleLogout}
            />
        </S.Wrapper>
    );
};
