import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled(Image)`
  position: relative;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  transition: 0.3s transform;

  &:hover {
    transform: scale(1.1);
  }
`;
