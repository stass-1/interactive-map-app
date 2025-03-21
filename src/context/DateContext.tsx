import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import dayjs, {Dayjs} from 'dayjs'
import { DateContextType, DateProviderProps } from '../types/date'

const DateContext = createContext<DateContextType | undefined>(undefined)

export function DateProvider({ children }: DateProviderProps) {
    const navigate = useNavigate()
    const { date: pathDate } = useParams()
    const location = useLocation()
    const [currentDate, setCurrentDate] = useState<Dayjs | null>(null)
    
    useEffect(() => {
        if (pathDate?.length === 8) {
            const date = dayjs(pathDate, 'YYYYMMDD')
            setCurrentDate(date)
        } else if (!location.pathname.includes('/trip/')) {
            const date = dayjs()
            updateUrlWithDate(date)
        }
    }, [pathDate, location])
    
    const updateUrlWithDate = (date: Dayjs | null, tripId = 'default') => {
        if (date) {
            navigate(`/trip/${tripId}/day/${date.format('YYYYMMDD')}`)
        } else {
            navigate('/')
        }
    }
    
    const navigateDay = (days: number) => {
        const newDate = currentDate ? currentDate.add(days, 'day') : null
        updateUrlWithDate(newDate)
    }
    
    return (
        <DateContext.Provider value={{ 
            currentDate, 
            setCurrentDate, 
            navigateDay, 
            updateUrlWithDate
        }}>
            {children}
        </DateContext.Provider>
    )
}

export function useDate(): DateContextType {
    const context = useContext(DateContext)
    if (!context) {
        throw new Error('useDate must be used within a DateProvider')
    }
    return context
}