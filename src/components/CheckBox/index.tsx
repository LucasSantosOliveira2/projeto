import * as S from './styles';
import { ChangeEvent } from 'react';

type CheckboxProps = {
    checkboxName: string,
    checkboxType?: string,
    register?: any,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;

}

const optionsDisabled = ['Voz', 'Mousetrack', 'Video'];


export const Checkbox = ({ checkboxType, checkboxName, register, onChange }: CheckboxProps) => {
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

            />
            {checkboxName}
        </S.Label>
    );
}