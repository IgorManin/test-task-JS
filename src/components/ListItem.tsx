import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

interface ListItemProps {
  children: ReactNode
  withBorder?: boolean
}

const Item = styled.li<ListItemProps>`
  list-style: none;
  width: 100%;
`

export const ListItem: React.FC<ListItemProps> = ({ children }) => {
  return <Item>{children}</Item>
}
