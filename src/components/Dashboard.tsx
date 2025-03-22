import { Box, Typography, Button, Card, CardContent, CardActionArea, CardMedia, Grid, Paper, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { upcomingTrips } from '../utils/mocks/tripsData'
import AddIcon from '@mui/icons-material/Add'
import dayjs from 'dayjs'

const Dashboard = () => {
    const navigate = useNavigate()

    const formatDate = (dateString: string) => {
        return dayjs(dateString).format('DD MMM YYYY')
    }

    const handleTripClick = (tripId: string) => {
        navigate(`/trip/${tripId}`)
    }

    return (
        <Box sx={{ p: 3 }}>
            <Button
                fullWidth
                variant="contained" 
                startIcon={<Box component={AddIcon} sx={{ mr: 1 }} />}
                onClick={() => {}}
            >
                New Trip
            </Button>
            
            <Typography variant="h5" mt={4} mb={2}>Upcoming Travels</Typography>
            
            <Grid container spacing={3}>
                {upcomingTrips.map(trip => (
                    <Grid item xs={12} key={trip.id}>
                        <Card 
                            sx={{ 
                                height: '100%', 
                                display: 'flex', 
                                flexDirection: 'column',
                                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 4
                                }
                            }}
                        >
                            <CardActionArea 
                                onClick={() => handleTripClick(trip.id)}
                                sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        height: 140,
                                        backgroundColor: 'grey.300',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    image={trip.image}
                                >
                                    {!trip.image && (
                                        <Typography variant="body1" color="text.secondary">
                                            {trip.mainDestination}
                                        </Typography>
                                    )}
                                </CardMedia>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" gutterBottom noWrap>
                                        {trip.mainDestination}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {formatDate(trip.dateRange.start)} - {formatDate(trip.dateRange.end)}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
                
                {upcomingTrips.length === 0 && (
                    <Grid item xs={12}>
                        <Paper
                            sx={{
                                p: 3,
                                textAlign: 'center',
                                backgroundColor: 'grey.100'
                            }}
                        >
                            <Typography variant="body1" color="text.secondary">
                                No upcoming trips. Click "New Trip" to plan your next adventure!
                            </Typography>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}

export default Dashboard