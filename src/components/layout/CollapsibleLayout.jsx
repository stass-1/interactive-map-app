import { useState } from 'react'
import { Box, IconButton, Paper } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

function CollapsibleLayout({ sidebarContent, mapContent }) {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <Box sx={{ height: '100vh', display: 'flex', overflow: 'hidden', position: 'relative' }}>
            <Paper
                elevation={6}
                sx={{
                    width: isCollapsed ? '64px' : '40%',
                    maxWidth: isCollapsed ? '64px' : '500px',
                    height: '100%',
                    transition: 'width 0.3s ease',
                    borderRadius: 0,
                    position: 'relative',
                    zIndex: 5,
                    boxShadow: '6px 0px 18px rgba(0, 0, 0, 0.25)',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: isCollapsed ? 'center' : 'flex-end',
                    p: 1 
                }}>
                    <IconButton onClick={toggleCollapse} aria-label="toggle panel">
                        {isCollapsed ? <MenuIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </Box>

                <Box 
                    sx={{ 
                        flexGrow: 1, 
                        overflow: 'auto',
                        opacity: isCollapsed ? 0 : 1,
                        transition: 'opacity 0.2s ease',
                        visibility: isCollapsed ? 'hidden' : 'visible',
                        p: isCollapsed ? 0 : 3
                    }}
                >
                    {!isCollapsed && sidebarContent}
                </Box>
            </Paper>

            <Box 
                sx={{ 
                    flexGrow: 1,
                    height: '100%',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                {mapContent}
            </Box>
        </Box>
    )
}

export default CollapsibleLayout