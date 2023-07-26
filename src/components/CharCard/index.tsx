import { CustomImage } from 'components/shared';
import { PlayerCharacter } from 'mocks';
import { convertNumberToK } from 'utils';
import Berkas from '../../assets/images/items/Berkas.png';
import HarkionRing from '../../assets/images/items/Harkion_Ring.png';
import TempleOfTimeEarring from '../../assets/images/items/Temple_Earring.png';
import TerokaEarring from '../../assets/images/items/Teroka_Earring.png';
import * as S from './styles';

interface CharCardProps {
  char: PlayerCharacter;
}

export const CharCard = ({ char }: CharCardProps) => {
  return (
    <S.CharCardContainer>
      <S.WrapperCharacter>
        <CustomImage src={char.profileImg} alt={`${char.name}-profileImg`} size='md' type='rounded' />
        <S.CharName>{char.name}</S.CharName>
      </S.WrapperCharacter>
      <S.WrapperItems>
        {char.fullBerkas && <CustomImage src={Berkas} alt='Berkas Armor' size='sm' />}
        {char.harkionRing && <CustomImage src={HarkionRing} alt='Harkion Ring' size='sm' />}
        {char.terokaEarring && <CustomImage src={TerokaEarring} alt='Teroka Earring' size='sm' />}
        {char.templeEarring && <CustomImage src={TempleOfTimeEarring} alt='Temple Of Time Earring' size='sm' />}
      </S.WrapperItems>
      <S.WrapperTotalAttack>
        <S.TotalAttackTitle>Total Attack</S.TotalAttackTitle>
        <S.TotalAttackValue title={char.totalAttack.toLocaleString('en-US')}>
          {convertNumberToK(char.totalAttack)}
        </S.TotalAttackValue>
      </S.WrapperTotalAttack>
    </S.CharCardContainer>
  );
};
