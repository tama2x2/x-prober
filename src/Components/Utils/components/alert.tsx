import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { GUTTER } from '../../Config'
interface AlertContainerProps {
  isSuccess: boolean
  withIcon: boolean
}
const StyledAlert = styled.div<AlertContainerProps>`
  display: inline-flex;
  border-radius: ${GUTTER};
  align-items: center;
  justify-content: center;
  font-family: 'Arial Black', sans-serif;
  font-weight: bolder;
  min-width: 2em;
  padding: 0 0.5rem;
  white-space: nowrap;
  cursor: pointer;
  text-shadow: 0 1px 1px #000;
  background: ${({ isSuccess, theme }) =>
    isSuccess ? theme['status.success.bg'] : theme['status.error.bg']};
  color: ${({ isSuccess, theme }) =>
    isSuccess ? theme['status.success.fg'] : theme['status.error.fg']};
  :active {
    transform: scale3d(0.9, 0.9, 1);
  }
  ::before {
    content: '${({ isSuccess, withIcon }) => {
      if (!withIcon) {
        return ''
      }
      return isSuccess ? '✓' : '×'
    }}';
  }
`
export interface AlertProps {
  isSuccess: boolean
  msg?: ReactNode
}
export const Alert: FC<AlertProps> = ({ isSuccess, msg = '' }) => (
  <StyledAlert isSuccess={isSuccess} withIcon={!msg}>
    {msg}
  </StyledAlert>
)
