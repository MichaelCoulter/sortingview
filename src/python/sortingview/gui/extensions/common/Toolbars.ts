
export interface ActionItem {
    type: 'button'
    callback: () => void
    title: string
    icon: any
    selected?: boolean
    keyCode?: number
}

export interface DividerItem {
    type: 'divider'
}
