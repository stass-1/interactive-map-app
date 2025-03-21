export interface DateContextType {
    currentDate: Date
    setCurrentDate: (date: Date) => void
    navigateDay: (days: number) => void
    updateUrlWithDate: (date: Date) => void
}

export interface DateProviderProps {
    children: React.ReactNode
}
