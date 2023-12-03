import * as S from './styles';
import { ChangeEvent } from 'react';

type CheckboxProps = {
    checkboxName: string,
    checkboxType?: string,
    register?: any,
    checked?: boolean,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;

}

const optionsDisabled = ['Voz', 'Mousetrack', 'Video'];


export const Checkbox = ({ checkboxType, checkboxName, register, checked, onChange }: CheckboxProps) => {
    const isOptionDisabled = optionsDisabled.includes(checkboxName);

    return (
        <S.Label>
            <input
                type="checkbox"
                {...register(checkboxType)}
                onChange={(e) => {
                    if (!isOptionDisabled) {
                        onChange?.(e);
                    }
                }}
                disabled={isOptionDisabled}
                checked={checked}
            />
            {checkboxName}
        </S.Label>
    );
}