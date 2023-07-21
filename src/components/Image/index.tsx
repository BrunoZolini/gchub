import * as S from './styles';

interface ImageProps {
  src: string;
  alt: string;
  type?: 'square' | 'circle' | 'rounded';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
export const Image = ({ src, alt, type = 'square', size = 'lg', ...rest }: ImageProps) => {
  return <S.Img src={src} alt={alt} type={type} size={size} {...rest} />;
};
