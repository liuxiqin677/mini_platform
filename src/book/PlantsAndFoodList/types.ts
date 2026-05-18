import { UserToolWithDetail } from '../../services/tool'
import { UserFoodWithDetail } from '../../services/food'

export type ToolOrFoodItem = UserToolWithDetail | UserFoodWithDetail

export interface IRouterParams {
  type: 'tool' | 'food'
}
