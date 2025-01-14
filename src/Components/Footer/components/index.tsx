import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import styled from 'styled-components'
import { BootstrapConstants } from '../../Bootstrap/constants'
import { GUTTER } from '../../Config'
import { gettext } from '../../Language'
import { device } from '../../Style/components/devices'
import { formatBytes } from '../../Utils/components/format-bytes'
import { template } from '../../Utils/components/template'
import { FooterStore } from '../stores'
const StyledFooter = styled.div`
  background: ${({ theme }) => theme['footer.bg']};
  color: ${({ theme }) => theme['footer.fg']};
  width: 100%;
  border-radius: 10rem;
  text-align: center;
  padding: calc(${GUTTER} / 2) ${GUTTER};
  margin: calc(${GUTTER} * 1.5) auto;
  word-break: normal;
  @media ${device('tablet')} {
    width: 60%;
  }
  a {
    color: ${({ theme }) => theme['footer.fg']};
    :hover {
      color: ${({ theme }) => theme['footer.fg']};
    }
  }
`
export const Footer: FC = observer(() => {
  const { appName, appUrl, authorName, authorUrl } = BootstrapConstants
  const { memUsage, time } = FooterStore.conf
  return (
    <StyledFooter
      dangerouslySetInnerHTML={{
        __html: template(
          gettext(
            'Generator {{appName}} / Author {{authorName}} / {{memUsage}} / {{time}}ms'
          ),
          {
            appName: `<a href="${appUrl}" target="_blank">${appName}</a>`,
            authorName: `<a href="${authorUrl}" target="_blank">${authorName}</a>`,
            memUsage: formatBytes(memUsage),
            time: (time * 1000).toFixed(2),
          }
        ),
      }}
    />
  )
})
