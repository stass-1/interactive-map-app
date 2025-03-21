import { Typography, Box } from '@mui/material'
import { tripData } from '../../utils/mocks'

function SidebarContent() {
    const formatDate = (isoDate: string): string => {
        const date = new Date(isoDate)
        return date.toLocaleDateString('ru-RU')
    }

    const dateRange = `${formatDate(tripData.dateRange.start)} - ${formatDate(tripData.dateRange.end)}`

    const routeString = tripData.itinerary
        .map(item => item.location)
        .filter((location, index, array) => array.indexOf(location) === index)
        .join(' → ')

    const accommodations = tripData.itinerary
        .filter(item => item.type === 'accommodation')
        .map(item => item.description)
        .join(', ')

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant='body1' paragraph>
                {tripData.subtitle}
            </Typography>
            
            <Typography variant='h5' gutterBottom sx={{ mt: 4 }}>
                Маршрут
            </Typography>
            <Typography variant='body1' paragraph>
                Даты: {dateRange}
            </Typography>
            <Typography variant='body1' paragraph>
                Маршрут: {routeString}
            </Typography>
            <Typography variant='body1' paragraph>
                Проживание: {accommodations}
            </Typography>
        </Box>
    )
}

export default SidebarContent