import styled from 'styled-components';

interface CircleProps {
  color: string;
}

export const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin: 16px 8px 32px;
`;

export const Level = styled.div`
  display: flex;
  align-items: center;

  small {
    font-size: ${({ theme }) => theme.fonts.small};
  }
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${({ color }: CircleProps) => color};
`;
