import { convertNumberToK } from 'utils';
import * as S from './styles';

type Character = { id: number; name: string; profileImg: string; [key: string]: any };

interface CharsGridProps {
  characters: Character[];
  handleClick?: (id: number) => void;
  clickable?: boolean;
  selectedId?: number;
  imgSize?: 'sm' | 'md' | 'lg' | 'xl';
  imgType?: 'square' | 'circle' | 'rounded';
  imgGap: string;
  title?: string;
}
export const CharsGrid = ({
  characters,
  handleClick,
  selectedId,
  imgSize,
  imgType,
  imgGap,
  clickable,
  title,
}: CharsGridProps) => {
  const titleRule = (attribute: string | undefined, char: Character) => {
    if (!attribute) return '';
    if (attribute === 'totalAttack') {
      return convertNumberToK(char.totalAttack);
    }
    return char[attribute];
  };

  return (
    <S.Container imgGap={imgGap}>
      {characters.map((char) => (
        <S.CharImage
          selected={selectedId === char.id}
          src={char.profileImg}
          key={char.id}
          alt={char.name}
          size={imgSize}
          type={imgType}
          onClick={() => handleClick && handleClick(char.id)}
          clickable={clickable}
          title={!!title && titleRule(title, char)}
        />
      ))}
    </S.Container>
  );
};
