import { useState, useEffect } from 'react';
import * as S from "./styles";
import { SidebarItem } from "../SidebarItem";
import { BiSolidDashboard, BiSolidUser, BiSolidBarChartSquare } from "react-icons/bi";
import { useLocation } from 'react-router-dom';


export const Sidebar = () => {

    const location = useLocation();
    const [activeItem, setActiveItem] = useState('dashboard');

    useEffect(() => {
        switch (location.pathname) {
            case '/dashboard':
                setActiveItem('dashboard');
                break;
            case '/statistics':
                setActiveItem('statistics');
                break;
            case '/profile':
                setActiveItem('profile');
                break;
            default:
                setActiveItem('dashboard');
        }
    }, [location]);

    const handleItemClick = (itemName: string) => {
        setActiveItem(itemName);
    };

    return (
        <S.Wrapper>
            <S.Title>Olá, Lucas</S.Title>
            <S.Separator />
            <S.StyledLink to="/dashboard">
                <SidebarItem
                    icon={<BiSolidDashboard />}
                    name="Dashboard"
                    isActive={activeItem === 'dashboard'}
                    onClick={() => handleItemClick('dashboard')}
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
        </S.Wrapper>
    );
};
