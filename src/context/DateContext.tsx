import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import dayjs from 'dayjs'
import { DateContextType, DateProviderProps } from '../types/date'

const DateContext = createContext<DateContextType | undefined>(undefined)

export function DateProvider({ children }: DateProviderProps) {
    const navigate = useNavigate()
    const location = useLocation()
    const [currentDate, setCurrentDate] = useState<Date>(new Date())
    
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search)
        const dateParam = searchParams.get('date')
        
        if (dateParam) {
            const parsedDate = dayjs(dateParam).toDate()
            if (parsedDate && !isNaN(parsedDate.getTime())) {
                setCurrentDate(parsedDate)
            }
        } else {
            updateUrlWithDate(new Date())
        }
    }, [location.search])
    
    const updateUrlWithDate = (date: Date) => {
        const formattedDate = dayjs(date).format('YYYY-MM-DD')
        const searchParams = new URLSearchParams(location.search)
        searchParams.set('date', formattedDate)
        
        navigate({
            pathname: location.pathname,
            search: searchParams.toString()
        })
    }
    
    const navigateDay = (days: number) => {
        const newDate = dayjs(currentDate).add(days, 'day').toDate()
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
