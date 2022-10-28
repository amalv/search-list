import React from 'react';
import styled from 'styled-components';

interface CardListProps {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardList = ({ children }: CardListProps) => {
  return <Container>{children}</Container>
}