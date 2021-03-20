import React from 'react';
import styled from 'styled-components/native';
import { Overlay, Wrapper } from './styles'; 

export const a = styled.View`
  flex: 1;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
`;

interface IPageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper = ({ children }: IPageWrapperProps) => (
  <Wrapper>
    <Overlay>
      {children}
    </Overlay>
  </Wrapper>
);