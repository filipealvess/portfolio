import styled, { css } from 'styled-components';

interface ContentProps {
  visible: boolean;
  height: string | null;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.sectionBackground};

  & ~ & {
    margin-top: 16px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 24px;
  cursor: pointer;

  &:hover .image {
    transform: scale(1.05);
  }

  @media (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  transition: 0.3s transform;

  img {
    border-radius: 8px;
  }
`;

export const Titles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  margin: 0 24px;
  
  @media (max-width: 500px) {
    order: 3;
    min-width: 100%;
    margin: 16px 0 0;
  }
`;

export const Content = styled.section`
  position: relative;
  padding: 24px;
  text-align: left;
  overflow: hidden;
  transition-duration: 0.3s;
  transition-property: height, padding;

  ${({ height }) => height && css`
    height: ${height};
  `}

  ${({ visible }: ContentProps) => !visible && css`
    height: 0;
    padding: 0 24px;
  `}

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 24px;
    width: calc(100% - 48px);
    height: 1px;
    background-color: ${({ theme }) => theme.borderColor};
  }
`;

export const Time = styled.p`
  margin-bottom: 24px;
  font-style: italic;
`;

export const Description = styled.p`
  & ~ & {
    margin-top: 16px;
  }
`;

export const List = styled.article`
  margin-top: 24px;

  h5 {
    margin-bottom: 8px;
    font-weight: 600;
  }

  li::before {
    content: '- ';
  }
`;

export const Grid = styled.footer`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;
