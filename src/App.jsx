import { Typography } from '@mui/material'
import Map from './components/Map'
import CollapsibleLayout from './components/layout/CollapsibleLayout'
import { tripData } from './utils/mocks'

function App() {

    const formatDate = (isoDate) => {
        const date = new Date(isoDate)
        return date.toLocaleDateString('ru-RU')
    }

    const dateRange = `${formatDate(tripData.dateRange.start)} - ${formatDate(tripData.dateRange.end)}`

    const routeString = tripData.itinerary
        .map(item => item.location)
        .filter((location, index, array) => array.indexOf(location) === index) // Remove duplicates
        .join(' → ')

    const accommodations = tripData.itinerary
        .filter(item => item.type === 'accommodation')
        .map(item => item.description)
        .join(', ')

    const sidebarContent = (
        <>
            <Typography variant='h3' gutterBottom>{tripData.title}</Typography>
            <Typography variant='body1' paragraph>
                {tripData.subtitle}
            </Typography>
            <Typography variant='h5' gutterBottom sx={{ mt: 4 }}>
                Путешествие в Нидерланды
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
        </>
    )

    const mapContent = <Map />

    return (
        <CollapsibleLayout 
            sidebarContent={sidebarContent}
            mapContent={mapContent}
        />
    )
}

export default App