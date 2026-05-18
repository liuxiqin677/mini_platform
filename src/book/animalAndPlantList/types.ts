import { UserAnimalItem } from '../../services/animal'
import { UserPlantItem } from '../../services/plant'

export type AnimalOrPlantItem = UserAnimalItem | UserPlantItem

export interface IRouterParams {
  type: 'animal' | 'plant'
}
