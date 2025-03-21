import {ReactNode} from 'react'
import {Dayjs} from 'dayjs'

export interface DateContextType {
    currentDate: Dayjs | null
    setCurrentDate: (date: Dayjs) => void
    navigateDay: (days: number) => void
    updateUrlWithDate: (date: Dayjs, tripId?: string) => void
}

export interface DateProviderProps {
    children: ReactNode
}