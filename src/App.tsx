import { useEffect } from 'react'
import Map from './components/Map'
import CollapsibleLayout from './components/layout/CollapsibleLayout'
import SidebarContent from './components/layout/SidebarContent'
import UserProfile from './components/layout/UserProfile'
import { useAuth } from './context/AuthContext'
import { DateProvider } from './context/DateContext'
import { useNavigate } from 'react-router-dom'

function App() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/login', { replace: true })
        }
    }, [user, navigate])

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    const sidebarControls = <UserProfile />
    const sidebarContent = <SidebarContent />
    const mapContent = <Map />

    return (
        <DateProvider>
            <CollapsibleLayout 
                sidebarControls={sidebarControls}
                sidebarContent={sidebarContent}
                mapContent={mapContent}
                onLogout={handleLogout}
            />
        </DateProvider>
    )
}

export default App