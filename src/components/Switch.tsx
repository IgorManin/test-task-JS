import React from 'react'
import styled from '@emotion/styled'

interface SwitchProps {
  options: { value: string; label: string }[]
  onChange: (value: string) => void
  value: string
}

const Button = styled.button<{ isActive: boolean }>`
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  cursor: pointer;
`

export const Switch: React.FC<SwitchProps> = ({ options, onChange, value }) => {
  return (
    <>
      {options.map(({ label, value: optionValue }) => (
        <Button
          isActive={value === optionValue}
          key={label}
          onClick={() => onChange(optionValue)}
        >
          {label}
        </Button>
      ))}
    </>
  )
}
