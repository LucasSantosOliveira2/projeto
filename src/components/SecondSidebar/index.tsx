import * as S from "./styles";
import { SidebarItem } from "../SidebarItem";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type SecondSidebarProps = {
    $visible: boolean;
    onHide: () => void;
}

export const SecondSidebar = ({ $visible, onHide }: SecondSidebarProps) => {

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
            default:
                setActiveItem('project');
        }
    }, [location]);

    const handleItemClick = (itemName: string) => {
        setActiveItem(itemName);
    };

    return (
        <S.Wrapper $visible={$visible}>
            <S.Title>Olá, Lucas</S.Title>
            <S.Separator />
            <S.ContainerButton>
                <S.IconBack onClick={onHide} />
            </S.ContainerButton>
            <SidebarItem
                name="Opçao 1"
                isActive={activeItem === 'project'}
                onClick={() => handleItemClick('project')}
            />
            <SidebarItem
                name="Opçao 2"
                isActive={activeItem === 'dashboard'}
                onClick={() => handleItemClick('dashboard')}
            />
            <SidebarItem
                name="Opçao 3"
                isActive={activeItem === 'statistics'}
                onClick={() => handleItemClick('statistics')}
            />
            <SidebarItem
                name="Opçao 4"
                isActive={activeItem === 'profile'}
                onClick={() => handleItemClick('profile')}
            />
        </S.Wrapper >
    );
};
