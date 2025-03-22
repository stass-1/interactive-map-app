import { Box, Typography, Chip, List, ListItem, ListItemText, ListItemIcon, Stack } from '@mui/material'
import { useParams } from 'react-router-dom'
import { tripsData, tripData } from '../utils/mocks/tripData'
import { upcomingTrips } from '../utils/mocks/tripsData'
import { transportData } from '../utils/mocks/transportData'
import { activitiesData } from '../utils/mocks/activitiesData'
import { getItemBorderStyle } from '../utils/styles/colorUtils'
import dayjs from 'dayjs'
import PeopleIcon from '@mui/icons-material/People'
import DateRangeIcon from '@mui/icons-material/DateRange'
import HotelIcon from '@mui/icons-material/Hotel'
import ExploreIcon from '@mui/icons-material/Explore'
import FlightIcon from '@mui/icons-material/Flight'
import { useState, useEffect } from 'react'
import { TripItem } from '../types/map'
import TripCalendar from './TripCalendar'

const Trip = () => {
    const { tripId } = useParams()
    const [currentTrip, setCurrentTrip] = useState<typeof tripData | null>(null)
    const [basicTripInfo, setBasicTripInfo] = useState<typeof upcomingTrips[0] | null>(null)

    useEffect(() => {
        if (!tripId) return

        if (tripsData[tripId]) {
            setCurrentTrip(tripsData[tripId])
        } else {
            setCurrentTrip(null)
        }

        const basicInfo = upcomingTrips.find(trip => trip.id === tripId)
        setBasicTripInfo(basicInfo || null)
    }, [tripId])

    if (!tripId) {
        return (
            <Box sx={{ p: 3 }}>
                <Box sx={{ p: 2, bgcolor: 'error.light', color: 'error.contrastText' }}>
                    <Typography>Trip ID not provided</Typography>
                </Box>
            </Box>
        )
    }

    if (!currentTrip && !basicTripInfo) {
        return (
            <Box sx={{ p: 3 }}>
                <Box sx={{ p: 2, bgcolor: 'warning.light' }}>
                    <Typography>No trip found with ID: {tripId}</Typography>
                </Box>
            </Box>
        )
    }

    const formatDate = (dateString: string) => {
        return dayjs(dateString).format('DD MMM YYYY')
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

    const groupByType = (items: TripItem[]) => {
        const grouped: Record<string, TripItem[]> = {}
        
        items.forEach(item => {
            if (item.type.toLowerCase() !== 'visit') {
                const type = item.type.toLowerCase() === 'transit' ? 'transport' : item.type
                if (!grouped[type]) {
                    grouped[type] = []
                }
                grouped[type].push(item)
            }
        })
        
        return grouped
    }

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" gutterBottom>
                    {basicTripInfo?.mainDestination || 'Trip Details'}
                </Typography>
                
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={2}>
                    <Chip 
                        icon={<DateRangeIcon />} 
                        label={`${formatDate(basicTripInfo?.dateRange.start || currentTrip?.dateRange.start || '')} - ${formatDate(basicTripInfo?.dateRange.end || currentTrip?.dateRange.end || '')}`} 
                    />
                    {currentTrip?.travelers && (
                        <Chip 
                            icon={<PeopleIcon />} 
                            label={`${currentTrip.travelers.length} travelers`} 
                        />
                    )}
                </Stack>

                {currentTrip?.title && (
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            fontStyle: 'italic', 
                            color: 'text.secondary'
                        }}
                    >
                        {currentTrip.title}
                    </Typography>
                )}
            </Box>

            {currentTrip && tripId && (
                <TripCalendar 
                    tripId={tripId}
                    tripData={currentTrip}
                    transportData={transportData}
                    activitiesData={activitiesData}
                />
            )}

            {currentTrip && (
                <>
                    <Typography variant="h5" gutterBottom>
                        Trip Itinerary
                    </Typography>
                    <Box sx={{ mb: 3, bgcolor: 'background.paper' }}>
                        {Object.entries(groupByType(currentTrip.itinerary)).map(([type, items], typeIndex) => (
                            <Box key={typeIndex} sx={{ p: 2 }}>
                                <Typography variant="subtitle1" gutterBottom sx={{ textTransform: 'capitalize' }}>
                                    {type}
                                </Typography>
                                <List>
                                    {items.map((item, itemIndex) => (
                                        <ListItem 
                                            key={itemIndex}
                                            sx={{ 
                                                mb: 1, 
                                                ...getItemBorderStyle(type),
                                                pl: 2,
                                                bgcolor: 'background.default'
                                            }}
                                        >
                                            <ListItemIcon>
                                                {getTripItemIcon(item)}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={
                                                    <Stack direction="row" spacing={1} alignItems="center">
                                                        <Typography variant="body1">
                                                            {item.location}
                                                        </Typography>
                                                        {item.date && (
                                                            <Chip 
                                                                label={formatDate(item.date)} 
                                                                size="small" 
                                                                sx={{ bgcolor: 'rgba(0,0,0,0.08)' }}
                                                            />
                                                        )}
                                                        {item.dateRange && (
                                                            <Chip 
                                                                label={`${formatDate(item.dateRange.start)} - ${formatDate(item.dateRange.end)}`} 
                                                                size="small" 
                                                                sx={{ bgcolor: 'rgba(0,0,0,0.08)' }}
                                                            />
                                                        )}
                                                    </Stack>
                                                }
                                                secondary={item.description}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        ))}
                    </Box>
                </>
            )}
        </Box>
    )
}

export default Trip