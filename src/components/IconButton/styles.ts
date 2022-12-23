import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  padding: 6px;
  border-radius: 5px;
  border: 2px solid ${({ theme, color }) => color ?? theme.titleColor};

  * {
    color: ${({ theme, color }) => color ?? theme.titleColor};
  }
`;
