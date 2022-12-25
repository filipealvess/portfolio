import styled from 'styled-components';

export const Container = styled.section`
  & ~ & {
    margin-top: 64px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 32px;
`;
