import * as S from './styles';

interface ImageProps {
  src: string;
  alt: string;
  type?: 'square' | 'circle' | 'rounded';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  title?: string;
}
export const Image = ({ src, alt, type = 'square', size = 'lg', onClick, title, ...rest }: ImageProps) => {
  return <S.Img src={src} alt={alt} type={type} title={title} size={size} onClick={onClick} {...rest} />;
};
