import styled from 'styled-components/native';

export const TitleLabel = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
`;

export const ListItem = styled.View`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;