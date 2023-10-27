import { useState } from 'react';
import * as S from "./styles";

type TabBarProps = {
    tabs: string[];
    defaultTab: string;
}

const TabBar = ({ tabs, defaultTab }: TabBarProps) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const handleClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <S.TabBarContainer>
            {tabs.map((tab) => (
                <S.Tab
                    key={tab}
                    $active={activeTab === tab}
                    onClick={() => handleClick(tab)}
                >
                    {tab}
                </S.Tab>
            ))}
        </S.TabBarContainer>
    );
};

export default TabBar;
