import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

const Trip = () => {
    const { tripId, date } = useParams()
    
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4">Trip Details</Typography>
            <Typography>Trip ID: {tripId}</Typography>
            <Typography>Date: {date}</Typography>
        </Box>
    )
}

export default Trip