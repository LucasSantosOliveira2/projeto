
import * as S from "./styles";
import { TagCloud } from 'react-tagcloud'

type CloudWordProps = {
    word: string[];
    times: number[];
}

export const CloudWord = ({ word, times }: CloudWordProps) => {

    const cloudData = word.map((value, index) => ({
        value,
        count: times[index],
    }));

    return (
        <S.Wrapper>
            <S.Title>Nuvem de Palavras</S.Title>
            <TagCloud 
                minSize={12} 
                maxSize={35} 
                tags={cloudData} 
                randomSeed={42} 
                onClick={(tag) => alert(`A palavra '${tag.value}' apareceu ${tag.count} vezes!`)}
            />
        </S.Wrapper>
    );
}
