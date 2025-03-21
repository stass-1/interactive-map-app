import { useState } from 'react'
import { Box, Typography, IconButton, Popover } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { useDate } from '../../context/DateContext'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'

const DateSelector = ({ collapsed = false }) => {
    const { currentDate, navigateDay, updateUrlWithDate } = useDate()
    const [anchorEl, setAnchorEl] = useState(null)
    
    const handleDateClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    
    const handleClose = () => {
        setAnchorEl(null)
    }
    
    const handleDateChange = (newDate) => {
        updateUrlWithDate(newDate.toDate())
        handleClose()
    }
    
    const formatDay = (date) => {
        return dayjs(date).date()
    }
    
    const formatMonth = (date) => {
        return dayjs(date).format('MMM')
    }
    
    const open = Boolean(anchorEl)
    const dayjsDate = dayjs(currentDate)
    
    const DateDisplay = () => (
        <Box 
            sx={{ 
                textAlign: 'center',
                cursor: 'pointer',
                '&:hover': {
                    opacity: 0.8
                }
            }}
            onClick={handleDateClick}
        >
            <Typography variant="h4">
                {formatDay(currentDate)}
            </Typography>
            <Typography variant="body2">
                {formatMonth(currentDate)}
            </Typography>
        </Box>
    )
    
    return (
        <Box 
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                px: collapsed ? 1 : 2
            }}
        >
            {collapsed
                ? null
                : <IconButton onClick={() => navigateDay(-1)}>
                    <ArrowBackIos />
                </IconButton>
            }
            
            <DateDisplay />

            {collapsed
                ? null
                : <IconButton onClick={() => navigateDay(1)}>
                    <ArrowForwardIos />
                </IconButton>
            }
            
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        value={dayjsDate}
                        onChange={handleDateChange}
                        disableHighlightToday={false}
                    />
                </LocalizationProvider>
            </Popover>
        </Box>
    )
}

export default DateSelector