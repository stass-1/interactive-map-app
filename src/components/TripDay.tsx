import { Box, Divider, Typography, List, ListItem, ListItemText, Chip, Paper, Stack, ListItemIcon } from '@mui/material'
import { useOutletContext, useParams } from 'react-router-dom'
import DateSelector from './ui/DateSelector'
import { DateProvider, useDate } from '../context/DateContext'
import { useEffect, useState } from 'react'
import { transportData } from '../utils/mocks/transportData'
import { activitiesData } from '../utils/mocks/activitiesData'
import { tripData } from '../utils/mocks/tripData'
import { upcomingTrips } from '../utils/mocks/tripsData'
import { TripItem } from '../types/map'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus'
import TrainIcon from '@mui/icons-material/Train'
import FlightIcon from '@mui/icons-material/Flight'
import HotelIcon from '@mui/icons-material/Hotel'
import ExploreIcon from '@mui/icons-material/Explore'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import dayjs from 'dayjs'

const TripDay = () => {
    const isCollapsed = useOutletContext<boolean>()
    const { tripId } = useParams()
    
    return (
        <DateProvider>
            <DateSelector collapsed={isCollapsed} />
            <Divider />
            {!isCollapsed && <DayContent tripId={tripId} />}
        </DateProvider>
    )
}

interface DayContentProps {
    tripId?: string
}

interface DayPlanItem {
    time?: string
    title: string
    description: string
    type: string
    icon: React.ReactNode
    isGroupHeader?: boolean
}

const DayContent = ({ tripId }: DayContentProps) => {
    const { currentDate } = useDate()
    const [dayPlan, setDayPlan] = useState<DayPlanItem[]>([])
    
    useEffect(() => {
        if (!currentDate || !tripId) return
        
        const currentTrip = tripData.id === tripId ? tripData : null
        if (!currentTrip) {
            setDayPlan([])
            return
        }
        
        const formattedDate = currentDate.format('YYYY-MM-DD')
        let planItems: DayPlanItem[] = []
        
        const transportSegments = transportData.segments.filter(
            segment => segment.tripId === tripId && segment.date === formattedDate
        )
        
        transportSegments.forEach(segment => {
            planItems.push({
                time: segment.from.time,
                title: `${segment.from.location} → ${segment.to.location}`,
                description: segment.notes || `${segment.mode.charAt(0).toUpperCase() + segment.mode.slice(1)}`,
                type: segment.mode,
                icon: getTransportIcon(segment.mode)
            })
        })
        
        const tripItems = currentTrip.itinerary.filter(item => {
            if (item.date === formattedDate) return true
            if (item.dateRange && 
                dayjs(formattedDate).isAfter(dayjs(item.dateRange.start).subtract(1, 'day')) && 
                dayjs(formattedDate).isBefore(dayjs(item.dateRange.end).add(1, 'day'))) {
                return true
            }
            return false
        })
        
        tripItems.forEach(item => {
            planItems.push({
                time: item.timeRange ? item.timeRange.split('-')[0].trim() : undefined,
                title: item.location,
                description: item.description,
                type: item.type,
                icon: getTripItemIcon(item)
            })
        })
        
        const cityActivities = activitiesData.locations.filter(
            location => location.tripId === tripId && location.activities.length > 0
        )
        
        cityActivities.forEach(cityActivity => {
            const cityInItinerary = tripItems.some(
                item => item.location.toLowerCase().includes(cityActivity.city.toLowerCase())
            )
            
            if (cityInItinerary) {
                cityActivity.activities.forEach(activity => {
                    planItems.push({
                        title: activity.name,
                        description: activity.description,
                        type: activity.type,
                        icon: activity.type === 'food' ? <RestaurantIcon /> : <ExploreIcon />
                    })
                })
            }
        })
        
        planItems.sort((a, b) => {
            if (!a.time && !b.time) return 0
            if (!a.time) return 1
            if (!b.time) return -1
            return a.time.localeCompare(b.time)
        })
        
        planItems = addTimeGroup(planItems)
        
        setDayPlan(planItems)
    }, [currentDate, tripId])
    
    if (!currentDate || !tripId) {
        return <Typography sx={{ p: 2 }}>Select a date to view your trip plan</Typography>
    }
    
    const formattedDate = dayjs(currentDate).format('DD MMMM YYYY')
    
    const currentTripBasicInfo = tripId ? upcomingTrips.find(trip => trip.id === tripId) : null
    const currentTrip = tripId && tripData.id === tripId ? tripData : null
    
    const tripDateRange = currentTrip?.dateRange || currentTripBasicInfo?.dateRange
    const isDateWithinTrip = tripDateRange && 
                          dayjs(currentDate).isAfter(dayjs(tripDateRange.start).subtract(1, 'day')) && 
                          dayjs(currentDate).isBefore(dayjs(tripDateRange.end).add(1, 'day'))
    
    return (
        <Box sx={{ p: 2 }}>
            
            {tripDateRange && !isDateWithinTrip && (
                <Paper sx={{ p: 2, mb: 2, bgcolor: 'rgba(255, 152, 0, 0.08)' }}>
                    <Typography variant="body2" color="warning.main">
                        Selected date is outside the trip date range ({tripDateRange.start} - {tripDateRange.end}).
                    </Typography>
                </Paper>
            )}
            
            {!currentTrip && !currentTripBasicInfo && (
                <Paper sx={{ p: 2, mb: 2, bgcolor: 'rgba(255, 152, 0, 0.08)' }}>
                    <Typography variant="body2" color="warning.main">
                        No trip data found for ID: {tripId}
                    </Typography>
                </Paper>
            )}
            
            {!currentTrip && currentTripBasicInfo && (
                <Paper sx={{ p: 2, mb: 2, bgcolor: 'rgba(255, 152, 0, 0.08)' }}>
                    <Typography variant="body2" color="warning.main">
                        Trip found but no detailed data available.
                    </Typography>
                </Paper>
            )}
            
            {dayPlan.length > 0 ? (
                <List>
                    {dayPlan.map((item, index) => (
                        item.isGroupHeader ? (
                            <Typography 
                                key={index}
                                variant="overline" 
                                sx={{ 
                                    display: 'block', 
                                    mt: index > 0 ? 3 : 0, 
                                    mb: 1,
                                    color: 'text.secondary',
                                    fontWeight: 'medium'
                                }}
                            >
                                {item.title}
                            </Typography>
                        ) : (
                            <Paper 
                                key={index} 
                                elevation={1} 
                                sx={{ mb: 2, overflow: 'hidden' }}
                            >
                                <ListItem 
                                    alignItems="flex-start"
                                    sx={{
                                        borderLeft: '4px solid',
                                        borderLeftColor: getTypeColor(item.type),
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.04)'
                                        }
                                    }}
                                >
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <Typography variant="subtitle1">
                                                    {item.title}
                                                </Typography>
                                                {item.time && (
                                                    <Chip 
                                                        label={item.time} 
                                                        size="small" 
                                                        sx={{ bgcolor: 'rgba(0,0,0,0.08)' }}
                                                    />
                                                )}
                                            </Stack>
                                        }
                                        secondary={item.description}
                                    />
                                </ListItem>
                            </Paper>
                        )
                    ))}
                </List>
            ) : (
                <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'rgba(0, 0, 0, 0.02)' }}>
                    <Typography variant="body1" color="text.secondary">
                        No activities planned for this day.
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        This is a free day to explore or relax.
                    </Typography>
                </Paper>
            )}
        </Box>
    )
}

const getTransportIcon = (mode: string) => {
    switch (mode.toLowerCase()) {
        case 'bus':
            return <DirectionsBusIcon />
        case 'train':
            return <TrainIcon />
        case 'flight':
            return <FlightIcon />
        default:
            return <ExploreIcon />
    }
}

const getTripItemIcon = (item: TripItem) => {
    switch (item.type.toLowerCase()) {
        case 'accommodation':
            return <HotelIcon />
        case 'visit':
            return <ExploreIcon />
        case 'transit':
            return <FlightIcon />
        default:
            return <ExploreIcon />
    }
}

const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
        case 'bus':
        case 'train':
        case 'flight':
        case 'transit':
            return '#3f51b5'
        case 'accommodation':
            return '#4caf50'
        case 'visit':
            return '#ff9800'
        case 'food':
            return '#e91e63'
        case 'timegroup':
            return '#607d8b'
        default:
            return '#9e9e9e'
    }
}

const addTimeGroup = (items: DayPlanItem[]): DayPlanItem[] => {
    if (items.length === 0) return items
    
    const result: DayPlanItem[] = []
    let currentGroup: string | null = null
    
    items.forEach(item => {
        const timeGroup = getTimeGroup(item.time)
        
        if (timeGroup !== currentGroup) {
            currentGroup = timeGroup
            result.push({
                title: timeGroup,
                description: '',
                type: 'timegroup',
                icon: <span />,
                isGroupHeader: true
            })
        }
        
        result.push(item)
    })
    
    return result
}

const getTimeGroup = (time?: string): string => {
    if (!time) return 'Без времени'
    
    const hour = parseInt(time.split(':')[0])
    
    if (hour < 12) {
        return 'Утро'
    } else if (hour < 17) {
        return 'День'
    } else {
        return 'Вечер'
    }
}

export default TripDay