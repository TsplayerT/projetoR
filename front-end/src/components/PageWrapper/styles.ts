import styled from 'styled-components/native';

export const Wrapper = styled.View`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Overlay = styled.View`
  margin-top: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 8px 16px;
  flex: 1;
`;