import styled from 'styled-components/native';

interface LabelPorps {
  fontSize?: string;
}

export const Label = styled.Text<LabelPorps>`
  color: ${({theme}) => theme.colors.text};
`;