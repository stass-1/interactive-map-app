import { Box, Typography, Grid, Tooltip } from '@mui/material'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { TripData } from '../types/map'
import { TransportData } from '../types/mocks'
import { ActivitiesData } from '../types/mocks'
import { useState, useEffect } from 'react'

interface TripCalendarProps {
    tripId: string
    tripData: TripData
    transportData: TransportData
    activitiesData: ActivitiesData
}

interface DayData {
    date: string
    isInTrip: boolean
    hasAccommodation: boolean
    hasTransport: boolean
    hasActivity: boolean
    hasVisit: boolean
}

const TripCalendar = ({ tripId, tripData, transportData, activitiesData }: TripCalendarProps) => {
    const navigate = useNavigate()
    const [calendarDays, setCalendarDays] = useState<DayData[][]>([])
    const [calendarMonths, setCalendarMonths] = useState<string[]>([])
    
    useEffect(() => {
        if (!tripData || !tripData.dateRange) return
        
        const startDate = dayjs(tripData.dateRange.start)
        const endDate = dayjs(tripData.dateRange.end)
        
        // Calculate calendar start (first day of month of trip start)
        const calStart = startDate.startOf('month')
        
        // Calculate calendar end (last day of month of trip end)
        const calEnd = endDate.endOf('month')
        
        // Create array of all day objects between calStart and calEnd
        const days: DayData[] = []
        let currentDate = calStart
        
        const months: string[] = []
        let currentMonth = ''
        
        while (currentDate.isBefore(calEnd) || currentDate.isSame(calEnd, 'day')) {
            // Keep track of months for headers
            const monthName = currentDate.format('MMMM YYYY')
            if (monthName !== currentMonth) {
                currentMonth = monthName
                months.push(currentMonth)
            }
            
            const dateStr = currentDate.format('YYYY-MM-DD')
            
            // Check if date is within trip range
            const isInTrip = (currentDate.isAfter(startDate) || currentDate.isSame(startDate, 'day')) && 
                             (currentDate.isBefore(endDate) || currentDate.isSame(endDate, 'day'))
            
            // Check for accommodation
            const hasAccommodation = tripData.itinerary.some(item => 
                item.type === 'accommodation' && 
                ((item.dateRange && 
                    dayjs(dateStr).isAfter(dayjs(item.dateRange.start).subtract(1, 'day')) && 
                    dayjs(dateStr).isBefore(dayjs(item.dateRange.end).add(1, 'day'))) || 
                 item.date === dateStr)
            )
            
            // Check for transport
            const hasTransport = transportData.segments.some(segment => 
                segment.tripId === tripId && segment.date === dateStr
            )
            
            // Check for visits in itinerary
            const hasVisit = tripData.itinerary.some(item => 
                item.type === 'visit' && item.date === dateStr
            )
            
            // Check for activities
            const hasActivity = activitiesData.locations.some(location => {
                const cityInItinerary = tripData.itinerary.some(
                    item => item.location.toLowerCase().includes(location.city.toLowerCase()) &&
                    ((item.dateRange && 
                        dayjs(dateStr).isAfter(dayjs(item.dateRange.start).subtract(1, 'day')) && 
                        dayjs(dateStr).isBefore(dayjs(item.dateRange.end).add(1, 'day'))) || 
                    item.date === dateStr)
                )
                
                return cityInItinerary && location.activities.length > 0
            })
            
            days.push({
                date: dateStr,
                isInTrip,
                hasAccommodation,
                hasTransport,
                hasVisit,
                hasActivity
            })
            
            currentDate = currentDate.add(1, 'day')
        }
        
        // Split days into weeks
        const weeks: DayData[][] = []
        let week: DayData[] = []
        
        // Add empty days for the first week
        const firstDayOfWeek = dayjs(days[0].date).day()
        for (let i = 0; i < firstDayOfWeek; i++) {
            week.push({
                date: '',
                isInTrip: false,
                hasAccommodation: false,
                hasTransport: false,
                hasActivity: false,
                hasVisit: false
            })
        }
        
        days.forEach(day => {
            const dayOfWeek = dayjs(day.date).day()
            
            if (dayOfWeek === 0 && week.length > 0) {
                weeks.push(week)
                week = []
            }
            
            week.push(day)
            
            if (day.date === days[days.length - 1].date) {
                // Add empty days to complete the last week
                const lastDayOfWeek = dayjs(day.date).day()
                for (let i = lastDayOfWeek; i < 6; i++) {
                    week.push({
                        date: '',
                        isInTrip: false,
                        hasAccommodation: false,
                        hasTransport: false,
                        hasActivity: false,
                        hasVisit: false
                    })
                }
                weeks.push(week)
            }
        })
        
        setCalendarDays(weeks)
        setCalendarMonths(months)
        
    }, [tripData, tripId, transportData, activitiesData])
    
    const handleDayClick = (day: DayData) => {
        if (day.date && day.isInTrip) {
            navigate(`/trip/${tripId}/day/${day.date}`)
        }
    }
    
    const getDayTooltip = (day: DayData) => {
        if (!day.date || !day.isInTrip) return ''
        
        const parts = []
        if (day.hasAccommodation) parts.push('Accommodation')
        if (day.hasTransport) parts.push('Transport')
        if (day.hasVisit) parts.push('Visits')
        if (day.hasActivity) parts.push('Activities')
        
        return parts.length > 0 
            ? `${dayjs(day.date).format('DD MMM YYYY')}: ${parts.join(', ')}`
            : dayjs(day.date).format('DD MMM YYYY')
    }
    
    if (calendarDays.length === 0) {
        return null
    }
    
    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle1" gutterBottom>
                Trip Calendar
            </Typography>
            
            {calendarMonths.map((month, monthIndex) => (
                <Box key={monthIndex} sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ mt: 1, mb: 0.5 }}>
                        {month}
                    </Typography>
                    
                    <Grid container spacing={0.5}>
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => (
                            <Grid item xs={12/7} key={`header-${index}`}>
                                <Box sx={{ 
                                    textAlign: 'center', 
                                    py: 0.5,
                                    fontSize: '0.75rem',
                                    color: 'text.secondary'
                                }}>
                                    {day}
                                </Box>
                            </Grid>
                        ))}
                        
                        {calendarDays.map((week, weekIndex) => {
                            // Only show weeks that belong to this month
                            const firstValidDay = week.find(day => day.date)
                            if (!firstValidDay || 
                                !dayjs(firstValidDay.date).format('MMMM YYYY').includes(month)) {
                                return null
                            }
                            
                            return week.map((day, dayIndex) => {
                                // Skip empty days
                                if (!day.date) {
                                    return (
                                        <Grid item xs={12/7} key={`empty-${weekIndex}-${dayIndex}`}>
                                            <Box sx={{ height: 36 }}></Box>
                                        </Grid>
                                    )
                                }
                                
                                // Skip days not in this month
                                if (!dayjs(day.date).format('MMMM YYYY').includes(month)) {
                                    return (
                                        <Grid item xs={12/7} key={`other-${day.date}`}>
                                            <Box sx={{ height: 36 }}></Box>
                                        </Grid>
                                    )
                                }
                                
                                const dayNum = dayjs(day.date).date()
                                
                                return (
                                    <Grid item xs={12/7} key={day.date}>
                                        <Tooltip title={getDayTooltip(day)} arrow>
                                            <Box 
                                                onClick={() => handleDayClick(day)}
                                                sx={{ 
                                                    height: 36, 
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    position: 'relative',
                                                    cursor: day.isInTrip ? 'pointer' : 'default',
                                                    backgroundColor: day.isInTrip ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                                                    borderRadius: '4px',
                                                    border: day.hasAccommodation ? '2px solid rgba(76, 175, 80, 0.8)' : 'none',
                                                    color: day.isInTrip ? 'text.primary' : 'text.disabled',
                                                    '&:hover': {
                                                        backgroundColor: day.isInTrip 
                                                            ? 'rgba(25, 118, 210, 0.16)' 
                                                            : 'transparent'
                                                    }
                                                }}
                                            >
                                                {dayNum}
                                                <Box sx={{ 
                                                    position: 'absolute', 
                                                    bottom: 2, 
                                                    display: 'flex', 
                                                    gap: '2px' 
                                                }}>
                                                    {day.hasTransport && (
                                                        <Box sx={{ 
                                                            width: 4, 
                                                            height: 4, 
                                                            borderRadius: '50%', 
                                                            backgroundColor: 'secondary.main'
                                                        }}/>
                                                    )}
                                                    {day.hasVisit && (
                                                        <Box sx={{ 
                                                            width: 4, 
                                                            height: 4, 
                                                            borderRadius: '50%', 
                                                            backgroundColor: 'warning.main'
                                                        }}/>
                                                    )}
                                                    {day.hasActivity && (
                                                        <Box sx={{ 
                                                            width: 4, 
                                                            height: 4, 
                                                            borderRadius: '50%', 
                                                            backgroundColor: 'error.main'
                                                        }}/>
                                                    )}
                                                </Box>
                                            </Box>
                                        </Tooltip>
                                    </Grid>
                                )
                            })
                        })}
                    </Grid>
                </Box>
            ))}
            
            <Box sx={{ mt: 1, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box sx={{ 
                        width: 12, 
                        height: 12, 
                        border: '2px solid rgba(76, 175, 80, 0.8)',
                        borderRadius: '2px'
                    }}/>
                    <Typography variant="caption">Accommodation</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box sx={{ 
                        width: 8, 
                        height: 8, 
                        borderRadius: '50%', 
                        backgroundColor: 'secondary.main'
                    }}/>
                    <Typography variant="caption">Transport</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box sx={{ 
                        width: 8, 
                        height: 8, 
                        borderRadius: '50%', 
                        backgroundColor: 'warning.main'
                    }}/>
                    <Typography variant="caption">Visits</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box sx={{ 
                        width: 8, 
                        height: 8, 
                        borderRadius: '50%', 
                        backgroundColor: 'error.main'
                    }}/>
                    <Typography variant="caption">Activities</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default TripCalendar