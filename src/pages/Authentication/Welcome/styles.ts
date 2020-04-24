import styled from 'styled-components/native';

export const MainContainer = styled.View<any>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background};
`;

export const LogoContainer = styled.View<any>`
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background};
`;

export const Logo = styled.Image`
  resize-mode: contain;
  width: 100%;
  height: 100%;
`;