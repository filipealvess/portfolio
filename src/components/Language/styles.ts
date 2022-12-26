import styled, { css, DefaultTheme } from 'styled-components';

interface PointProps {
  isActive: boolean;
  theme: DefaultTheme;
}

export const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.sectionBackground};

  & ~ & {
    margin-top: 16px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Texts = styled.section`
  h5 {
    margin-bottom: 4px;
    font-size: ${({ theme }) => theme.fonts.bigText};
    font-weight: 500;
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    p {
      font-size: ${({ theme }) => theme.fonts.small};
    }
  }

  @media (max-width: 330px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Points = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  max-width: 300px;

  @media (max-width: 600px) {
    max-width: none;
  }
`;

export const Point = styled.div`
  flex: 1;
  height: 5px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.primary};

  ${({ isActive }: PointProps) => !isActive && css`
    opacity: 0.3;
  `}
`;
