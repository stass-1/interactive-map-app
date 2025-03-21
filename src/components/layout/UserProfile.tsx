import { Typography, Avatar, Box } from '@mui/material'
import { useAuth } from '../../context/AuthContext'
import { UserProfileProps } from '../../types/layout'

function UserProfile({ onClick, isCollapsed = false }: UserProfileProps) {
    const { user } = useAuth()

    if (!user) return null

    const avatarSize = 46

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: isCollapsed ? 'center' : 'flex-start',
                cursor: 'pointer',
                '&:hover': {
                    '.MuiTypography-root': {
                        opacity: 0.8
                    },
                    '.MuiAvatar-root': {
                        boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.5)'
                    }
                }
            }}
            onClick={onClick}
        >
            <Avatar
                src={user.photoURL}
                alt={user.name}
                sx={{ width: avatarSize, height: avatarSize, mr: isCollapsed ? 0 : 2 }}
            />
            {!isCollapsed && (
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