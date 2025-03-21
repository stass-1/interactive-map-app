import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { CircularProgress, Box } from '@mui/material'

interface ProtectedRouteProps {
    children: ReactNode
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { user, loading } = useAuth()

    if (loading) {
        return (
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh' 
            }}>
                <CircularProgress />
            </Box>
        )
    }

    if (!user) {
        return <Navigate to="/login" />
    }

    return <>{children}</>
}

export default ProtectedRoute