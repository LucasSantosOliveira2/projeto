import * as S from "./styles";
import { IoClose } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';

interface MenuMobileProps {
    menuIsVisible: boolean;
    setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuHamburguer({ menuIsVisible, setMenuIsVisible }: MenuMobileProps) {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);

    const [activeItem, setActiveItem] = useState('project');
    console.log(activeItem);

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
        const shouldLogout = window.confirm("Tem certeza de que deseja sair?");

        if (shouldLogout) {
            try {
                localStorage.removeItem('userInfo');
                await googleLogout();
                navigate('/');
            } catch (error) {
                console.error('Erro durante o logout:', error);
            }
        }
    };
    return (
        <S.Container isVisible={menuIsVisible}>
            <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
            <nav>
                <S.StyledLink to="/project"
                    onClick={() => handleItemClick('project')}>
                    Projetos
                </S.StyledLink>
                <S.StyledLink to="/profile" onClick={() => handleItemClick('profile')}>
                    Perfil
                </S.StyledLink>
                <a onClick={handleLogout}>Sair</a>
            </nav>
        </S.Container>
    )
}
