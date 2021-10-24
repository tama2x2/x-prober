import { conf } from '../../Utils/src/components/conf'
class Main {
  public readonly id = 'networkStats'
  public readonly conf = conf?.[this.id]
  public readonly isEnable = Boolean(this.conf)
}
export const NetworkStatsConstants = new Main()
