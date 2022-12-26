import styled, { css, DefaultTheme } from 'styled-components';
import { Level } from '../../types/skillProps';

interface ImageContainerProps {
  level: Level;
  theme: DefaultTheme;
}

export const Container = styled.section`
  padding: 24px;
  background-color: ${({ theme }) => theme.sectionBackground};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;

  & ~ & {
    margin-top: 16px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  h5 {
    font-size: ${({ theme }) => theme.fonts.bigText};
    font-weight: 500;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:hover small {
    right: 24px;
    opacity: 1;
  }

  .icon {
    z-index: 2;
  }

  small {
    display: block;
    position: absolute;
    right: 8px;
    padding: 4px 8px;
    background-color: ${({ theme }) => theme.sectionBackground};
    color: ${({ theme }) => theme.primary};
    font-size: ${({ theme }) => theme.fonts.small};
    font-weight: 500;
    opacity: 0;
    cursor: default;
    user-select: none;
    transition-duration: 0.3s;
    transition-property: opacity, right;
    z-index: 1;
  }
`;

export const Content = styled.footer`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.div`
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    right: -5px;
    width: 10px;
    height: 10px;
    border: 3px solid ${({ theme }) => theme.sectionBackground};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primary};

    ${({ level }: ImageContainerProps) => level === 'mid' && css`
      background-color: #E7923D;
    `}

    ${({ level }: ImageContainerProps) => level === 'low' && css`
      background-color: #CECECE;
    `}
  }
`;
