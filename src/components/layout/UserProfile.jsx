import { Typography, Avatar, Box } from '@mui/material'
import { useAuth } from '../../context/AuthContext'

function UserProfile({ onClick, compact = false }) {
    const { user } = useAuth()

    if (!user) return null

    return (
        <Box 
            sx={{ 
                display: 'flex', 
                alignItems: 'center',
                cursor: 'pointer',
                borderRadius: 1,
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
            }}
            onClick={onClick}
            aria-haspopup='true'
        >
            <Avatar 
                src={user.photoURL} 
                alt={user.name} 
                sx={{ width: 36, height: 36, mr: compact ? 1 : 2 }}
            />
            {!compact && (
                <Box>
                    <Typography variant='body1' sx={{ fontWeight: 'medium' }}>
                        {user.name}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {user.email}
                    </Typography>
                </Box>
            )}
        </Box>
    )
}

export default UserProfile