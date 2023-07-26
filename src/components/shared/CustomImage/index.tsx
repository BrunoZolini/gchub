import * as S from './styles';

interface CustomImageProps {
  src: string;
  alt: string;
  type?: 'square' | 'circle' | 'rounded';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  title?: string;
}
export const CustomImage = ({ src, alt, type = 'square', size = 'lg', onClick, title, ...rest }: CustomImageProps) => {
  return <S.Img src={src} alt={alt} type={type} title={title} size={size} onClick={onClick} {...rest} />;
};
