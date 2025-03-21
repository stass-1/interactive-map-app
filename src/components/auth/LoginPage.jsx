import { useState } from 'react'
import { 
    Box, 
    Typography, 
    TextField, 
    Button, 
    CircularProgress,
    Alert,
    Grid,
    Divider
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import LoginMap from './LoginMap'
import GoogleIcon from '@mui/icons-material/Google'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
    const { login, loginWithGoogle } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)
        
        try {
            if (!email || !password) {
                throw new Error('Please enter both email and password')
            }
            
            if (email === 'user@example.com' && password === 'password') {
                const userData = { 
                    id: '1', 
                    name: 'Demo User', 
                    email: 'user@example.com' 
                }
                login(userData)
                navigate('/')
            } else {
                throw new Error('Invalid email or password')
            }
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            setIsLoading(true)
            await loginWithGoogle()
            navigate('/')
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Box sx={{ 
            height: '100vh', 
            display: 'flex',
            overflow: 'hidden'
        }}>
            <Grid container sx={{ height: '100%' }}>
                <Grid item xs={12} md={5} sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    px: { xs: 2, sm: 4, md: 6 },
                    position: 'relative',
                    zIndex: 2,
                    boxShadow: 6,
                    bgcolor: 'background.paper'
                }}>
                    <Box sx={{ maxWidth: 480, width: '100%', mx: 'auto' }}>

                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{ mb: 4, fontWeight: 500 }}
                        >
                            Travel Wizard
                        </Typography>
                        
                        {error && (
                            <Alert severity="error" sx={{ mb: 3 }}>
                                {error}
                            </Alert>
                        )}
                        
                        <Box component="form" onSubmit={handleSubmit} noValidate>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{ mb: 3 }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                                disabled={isLoading}
                                sx={{ mb: 2, py: 1.2 }}
                            >
                                {isLoading ? <CircularProgress size={24} /> : "Sign In"}
                            </Button>
                            
                            <Divider sx={{ my: 2 }}>
                                <Typography variant="body2" color="text.secondary">
                                    OR
                                </Typography>
                            </Divider>

                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<GoogleIcon />}
                                size="large"
                                disabled={isLoading}
                                onClick={handleGoogleSignIn}
                                sx={{ py: 1.2 }}
                            >
                                Sign in with Google
                            </Button>
                            
                            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 3 }}>
                                Demo credentials: user@example.com / password
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={7} sx={{ 
                    display: { xs: 'none', md: 'block' },
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            zIndex: '2',
                            background: 'rgba(0, 0, 0, .1)',
                        }}
                    />
                    <LoginMap />
                </Grid>
            </Grid>
        </Box>
    )
}

export default LoginPage