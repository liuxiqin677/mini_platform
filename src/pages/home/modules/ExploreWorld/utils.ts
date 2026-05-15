import { UserFoodItem } from '../../../../services/food'
import { UserToolItem } from '../../../../services/tool'
import { Item } from './types'

export const convertToItem = (items: (UserToolItem | UserFoodItem)[]): Item[] => {
    return items.map(item => ({
        id: String(item.id),
        name: item.name,
        count: item.count,
        emoji: item.emoji,
    }))
}

export const convertToItemWithSingle = (item: UserToolItem | UserFoodItem): Item => {
    return {
        id: String(item.id),
        name: item.name,
        count: item.count,
        emoji: item.emoji,
    }
}