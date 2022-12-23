import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 64px auto;
  text-align: center;

  h1 {
    margin: 24px 0 8px;
  }

  & > a,
  & > button {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  @media (max-width: 400px) {
    width: 160px;
    height: 160px;
  }
`;

export const EasterEgg = styled.div`
  position: absolute;
  left: 50%;
  bottom: 40px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  transform: translateX(-50%);
  cursor: not-allowed;
`;
