import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Direction } from '../models'

interface ListProps {
  children: ReactNode
  direction: Direction
  gap?: number
  withBorder?: boolean
}

const Container = styled.ul<ListProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => `${gap}px`};
  list-style: none;
  padding: 10px;
  border: ${({ withBorder }) => (withBorder ? '1px solid black' : 'none')};
`

export const List: React.FC<ListProps> = ({
  children,
  direction = 'row',
  gap = 0,
  withBorder,
}) => (
  <Container direction={direction} gap={gap} withBorder={withBorder}>
    {children}
  </Container>
)
