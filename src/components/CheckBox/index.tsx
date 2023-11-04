
import { useState } from "react";
import * as S from './styles';


export const Checkbox = ({ name }: { name: string }) => {
    const [isChecked, setChecked] = useState(false);

    /*const handleCheckboxChange = () => {
        setChecked(!isChecked);
    }*/
    const handleCheckboxChange = () => {
        if (name === "Texto") {
            setChecked(!isChecked);
        } else {
            setChecked(false);
        }
    }
    return (
        <S.Label>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            {name}
        </S.Label>
    );
}
