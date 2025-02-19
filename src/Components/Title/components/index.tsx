import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { BootstrapConstants } from '../../Bootstrap/constants'
import {
  ANIMATION_DURATION_SC,
  BORDER_RADIUS,
  GUTTER,
} from '../../Config/index'
import { UpdaterLink } from '../../Updater/components/updater-link'
import { UpdaterStore } from '../../Updater/stores'
const slideDown = keyframes`
  from{
    transform: translate3d(-50%, -100%, 0);
  }
  to{
    transform: translate3d(-50%, 0, 0);
  }
`
export const StyledTitle = styled.h1`
  background: ${({ theme }) => theme['title.bg']};
  position: fixed;
  top: 0;
  left: 50%;
  justify-content: center;
  text-align: center;
  margin: 0;
  min-width: 60vw;
  width: 50vw;
  font-size: ${GUTTER};
  line-height: 1;
  border-radius: 0 0 ${BORDER_RADIUS} ${BORDER_RADIUS};
  z-index: 10;
  box-shadow: ${({ theme }) => theme['title.boxShadow']};
  animation: ${slideDown} ${ANIMATION_DURATION_SC}s;
  animation-fill-mode: forwards;
`
export const StyledTitleLink = styled.a`
  display: block;
  padding: ${GUTTER};
  color: ${({ theme }) => theme['title.fg']};
  :hover {
    color: ${({ theme }) => theme['title.fg']};
  }
`
export const Title: FC = observer(() => {
  const { appUrl, appName, version } = BootstrapConstants
  return (
    <StyledTitle>
      {UpdaterStore.newVersion ? (
        <UpdaterLink />
      ) : (
        <StyledTitleLink href={appUrl} target='_blank'>
          {`${appName} v${version}`}
        </StyledTitleLink>
      )}
    </StyledTitle>
  )
})
