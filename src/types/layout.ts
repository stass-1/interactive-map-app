import { ReactElement, ReactNode, MouseEvent } from 'react'

export interface CollapsibleLayoutProps {
    sidebarContent?: ReactNode
    mapContent?: ReactNode
    sidebarControls?: ReactElement<any>
    onLogout: () => Promise<void>
}

export interface UserProfileProps {
    onClick?: (event: MouseEvent<HTMLElement>) => void
    isCollapsed?: boolean
    onLogout?: () => Promise<void>
}

export interface DateSelectorProps {
    collapsed: boolean
}