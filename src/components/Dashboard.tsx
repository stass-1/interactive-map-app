import { Box } from '@mui/material'
import AllTrips from './trips/AllTrips'

const Dashboard = () => {

    return (
        <Box sx={{ p: 3 }}>
            
            <Box mt={4}>
                <AllTrips />
            </Box>
        </Box>
    )
}

export default Dashboard