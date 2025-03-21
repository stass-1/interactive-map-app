import { Divider } from '@mui/material'
import { useOutletContext } from 'react-router-dom'
import DateSelector from './ui/DateSelector'
import { DateProvider } from '../context/DateContext'

const TripDay = () => {
    const isCollapsed = useOutletContext<boolean>()
    
    return (
        <DateProvider>
            <DateSelector collapsed={isCollapsed} />
            <Divider />
        </DateProvider>
    )
}

export default TripDay