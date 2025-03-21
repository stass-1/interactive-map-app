import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App'
import LoginPage from './components/auth/LoginPage'
import ProtectedRoute from './components/auth/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
    },
})

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthProvider>
                <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route 
                            path="/" 
                            element={
                                <ProtectedRoute>
                                    <App />
                                </ProtectedRoute>
                            } 
                        />
                        <Route
                            path="/trip/:tripId/day/:date"
                            element={
                                <ProtectedRoute>
                                    <App />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>
)