import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import AllTrips from './trips/AllTrips'

const Dashboard = () => {
    const navigate = useNavigate()

    return (
        <Box sx={{ p: 3 }}>
            <Button
                fullWidth
                variant="contained" 
                startIcon={<AddIcon />}
                onClick={() => {}}
            >
                New Trip
            </Button>
            
            <Box mt={4}>
                <AllTrips />
            </Box>
        </Box>
    )
}

export default Dashboard