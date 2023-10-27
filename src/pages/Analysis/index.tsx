import * as S from "./styles";
import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { Sidebar } from "../../components/Sidebar";
import { HeaderDashboard } from "../../components/HeaderDashboard";
import { IoSend } from "react-icons/io5"

export const Analysis = () => {

    const [messages, setMessages] = useState<string[]>([]);
    const [message, setMessage] = useState('');

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() === '') return; // Não envie mensagens em branco

        setMessages([...messages, message]);
        setMessage('');
    };
    const handleInputKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <S.Wrapper>
            <S.SidebarContainer>
                <Sidebar />
                <HeaderDashboard />
            </S.SidebarContainer>

            <S.ContentContainer>
                <S.ChatContainer>
                    <S.ChatMessages>
                        {messages.map((msg, index) => (
                            <div key={index}>{msg}</div>
                        ))}
                    </S.ChatMessages>
                    <S.ChatInputContainer>
                        <S.ChatInput
                            placeholder="Digite sua mensagem..."
                            value={message}
                            onChange={handleInputChange}
                            onKeyDown={handleInputKeyDown}
                        />
                        <S.SendButton onClick={handleSendMessage}><IoSend /></S.SendButton>
                    </S.ChatInputContainer>
                </S.ChatContainer>
            </S.ContentContainer>
        </S.Wrapper>
    );
};
