export type ChildrenType = {
  id: number | string
  title: string
  url: string
}

export type MenuItemType = {
  id: number | string
  title: string
  url?: string
  children?: ChildrenType[]
}
