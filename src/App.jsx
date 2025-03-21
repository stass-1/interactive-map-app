import { Typography, Button } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import Map from './components/Map'
import CollapsibleLayout from './components/layout/CollapsibleLayout'
import { tripData } from './utils/mocks'
import { useAuth } from './context/AuthContext'
import { useNavigate } from 'react-router-dom'

function App() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    const formatDate = (isoDate) => {
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

    const sidebarContent = (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <Typography variant='h3' gutterBottom sx={{ marginBottom: 0 }}>
                    {tripData.title}
                </Typography>
                <Button 
                    variant="outlined" 
                    startIcon={<LogoutIcon />} 
                    onClick={handleLogout}
                    size="small"
                >
                    Logout
                </Button>
            </div>
            
            {user && (
                <Typography variant='body2' sx={{ mb: 2 }}>
                    Logged in as: {user.name}
                </Typography>
            )}

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