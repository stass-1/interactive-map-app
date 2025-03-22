import { redirect } from 'react-router-dom'
import CollapsibleLayout from './components/layout/CollapsibleLayout'
import TripDay from './components/TripDay'
import Dashboard from './components/Dashboard'
import Trip from './components/Trip'
import LoginPage from './components/auth/LoginPage'
import Map from './components/Map'
import UserProfile from './components/layout/UserProfile'
import { useAuth, USER_STORAGE_KEY } from './context/AuthContext'

const authLoader = () => {
    const userJson = localStorage.getItem(USER_STORAGE_KEY)
    console.log('authLoader')
    console.log(userJson)
    if (!userJson && window.location.pathname !== '/login') {
        return redirect('/login')
    }
    return null
}

const loginLoader = () => {
    const userJson = localStorage.getItem(USER_STORAGE_KEY)
    if (userJson) {
        return redirect('/')
    }
    return null
}

const AppLayout = () => {

    const { logout } = useAuth()

    return (
        <CollapsibleLayout 
            sidebarControls={<UserProfile />}
            mapContent={<Map />}
            onLogout={logout}
        />
    )
}

export const routes = [
    {
        path: '/',
        loader: authLoader,
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'trip/:tripId',
                element: <Trip />
            },
            {
                path: 'trip/:tripId/day/:date',
                element: <TripDay />
            }
        ]
    },
    {
        path: '/login',
        loader: loginLoader,
        element: <LoginPage />
    }
]