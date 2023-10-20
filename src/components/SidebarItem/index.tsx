import * as S from "./styles";

type ItemProps = {
    icon?: React.ReactNode;
    name: string
    isActive?: boolean
    onClick: () => void
}

export const SidebarItem = ({ icon, name, isActive, onClick }: ItemProps) => {

    return (
        <S.Wrapper onClick={onClick} style={{
            fontWeight: isActive ? '700' : '500',
            marginRight: isActive ? '25px' : '0',
            borderRight: isActive ? '4px solid #7551FF' : '0'
        }}>
            {icon}
            {name}
        </S.Wrapper>
    );
};