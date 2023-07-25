import { RxCheck, RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import * as S from './styles';

interface Option {
  value: string;
  name: string;
}

interface SelectProps {
  ariaLabel: string;
  placeHolder: string;
  defaultValue?: string;
  value?: string;
  label?: string;
  setValue: (e?: string) => void;
  htmlFor: string;
  options: Option[];
}
export const Select = ({
  ariaLabel,
  placeHolder,
  options,
  value,
  defaultValue,
  setValue,
  label,
  htmlFor,
}: SelectProps) => {
  return (
    <S.Root key={value} value={value} defaultValue={defaultValue} onValueChange={setValue}>
      {!!label && <S.Label htmlFor={htmlFor}>{label}</S.Label>}
      <S.Trigger aria-label={ariaLabel} id={htmlFor}>
        <S.Value placeholder={placeHolder} />
        <S.Icon>
          <RxTriangleDown />
        </S.Icon>
      </S.Trigger>
      <S.Portal>
        <S.Content>
          <S.ScrollUpButton>
            <RxTriangleUp />
          </S.ScrollUpButton>
          <S.Viewport>
            {options.map((option) => (
              <S.Item key={option.value} value={option.value}>
                <S.ItemText>{option.name}</S.ItemText>
                <S.ItemIndicator>
                  <RxCheck size={40} />
                </S.ItemIndicator>
              </S.Item>
            ))}
          </S.Viewport>
          <S.ScrollDownButton>
            <RxTriangleDown />
          </S.ScrollDownButton>
        </S.Content>
      </S.Portal>
    </S.Root>
  );
};
