import { ToolItem, UserToolItem } from "../../../services/tool"
import { CollectItem } from "../types"

export function generateMaze(width: number, height: number): number[][] {
  const maze: number[][] = Array(height).fill(null).map(() => Array(width).fill(0))

  const stack: [number, number][] = []
  const startX = 1
  const startY = 1

  maze[startY][startX] = 1
  stack.push([startX, startY])

  const directions = [
    [0, -2],
    [2, 0],
    [0, 2],
    [-2, 0],
  ]

  while (stack.length > 0) {
    const [cx, cy] = stack[stack.length - 1]
    const shuffledDirs = [...directions].sort(() => Math.random() - 0.5)
    let found = false

    for (const [dx, dy] of shuffledDirs) {
      const nx = cx + dx
      const ny = cy + dy

      if (nx > 0 && nx < width - 1 && ny > 0 && ny < height - 1 && maze[ny][nx] === 0) {
        maze[ny][nx] = 1
        maze[cy + dy / 2][cx + dx / 2] = 1
        stack.push([nx, ny])
        found = true
        break
      }
    }

    if (!found) {
      stack.pop()
    }
  }

  maze[height - 2][width - 2] = 2

  return maze
}

export function hasCommonElement(arr1: ToolItem[], arr2: UserToolItem[]): boolean {
  return arr1.some(item => arr2.some(tool => tool.tool_id === item.id));
}

export const hasRightTool = (item: CollectItem, toolsData: UserToolItem[]) => {
  console.log(item, toolsData)
  return hasCommonElement(item.tools || [], toolsData);
};