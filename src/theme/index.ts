
type Color = {
    primary: string,
    secundary: string,
    white: string,
    black: string,
    background: string,
    purple: string,
    dark: string,
    text: string,
};

type ThemeColors = {
    colors: Color;
};

const theme: ThemeColors = {
    colors: {
        primary: '#A3AED0',
        secundary: '#111C44',
        white: '#FFFFFF',
        black: '#000',
        purple: '#4318FF',
        dark: '#181818',
        background: '#0B1437',
        text: '#2B3674',
    },
};

export default theme;