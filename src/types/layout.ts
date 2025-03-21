import { ReactElement, ReactNode } from 'react'

export interface CollapsibleLayoutProps {
    sidebarContent: ReactNode
    mapContent: ReactNode
    sidebarControls: ReactElement
    onLogout: () => void
}

export interface UserProfileProps {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
    isCollapsed?: boolean
}

export interface DateSelectorProps {
    collapsed: boolean
}
