import { Theme } from '@mui/material'

export const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
        case 'bus':
        case 'train':
        case 'flight':
        case 'transit':
        case 'transport':
            return '#2196f3' // lighter blue
        case 'accommodation':
            return '#4caf50' // green
        case 'visit':
            return '#ff9800' // orange
        case 'food':
            return '#ffc107' // yellow
        case 'activity':
            return '#9c27b0' // purple
        case 'timegroup':
            return '#607d8b' // blue grey
        default:
            return '#9e9e9e' // grey
    }
}

export const getItemBorderStyle = (type: string) => {
    return {
        borderLeft: '4px solid',
        borderLeftColor: getTypeColor(type)
    }
}

export const getCalendarDotStyle = (type: string, theme?: Theme) => {
    let color
    
    switch (type.toLowerCase()) {
        case 'transport':
        case 'transit':
            color = theme?.palette.secondary.main || '#3f51b5'
            break
        case 'visit':
            color = theme?.palette.warning.main || '#ff9800'
            break
        case 'activity':
        case 'food':
            color = theme?.palette.error.main || '#e91e63'
            break
        case 'accommodation':
            color = theme?.palette.success.main || '#4caf50'
            break
        default:
            color = theme?.palette.grey[500] || '#9e9e9e'
    }
    
    return {
        width: 4,
        height: 4,
        borderRadius: '50%',
        backgroundColor: color
    }
}

export const getBorderStyle = (type: string) => {
    if (type.toLowerCase() === 'accommodation') {
        return {
            border: '2px solid rgba(76, 175, 80, 0.8)'
        }
    }
    
    return {}
}