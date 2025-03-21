import { useState, useEffect } from 'react'
import { Box, IconButton, Paper } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

function CollapsibleLayout({ sidebarContent, mapContent }) {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }

    useEffect(() => {
        let timer
        const frame = requestAnimationFrame(() => {
            timer = setTimeout(() => {
                window.dispatchEvent(new Event('resize'))
            }, 350)
        })
        
        return () => {
            cancelAnimationFrame(frame)
            clearTimeout(timer)
        }
    }, [isCollapsed])

    return (
        <Box sx={{ height: '100vh', display: 'flex', overflow: 'hidden', position: 'relative' }}>
            <Paper
                elevation={6}
                sx={{
                    width: isCollapsed ? '64px' : '40%',
                    maxWidth: isCollapsed ? '64px' : '500px',
                    height: '100%',
                    transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: 0,
                    position: 'relative',
                    zIndex: 5,
                    boxShadow: '6px 0px 18px rgba(0, 0, 0, 0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    willChange: 'width',
                    overflowX: 'hidden',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
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
                        visibility: isCollapsed ? 'hidden' : 'visible',
                        p: isCollapsed ? 0 : 3,
                        transform: isCollapsed ? 'translateX(-20px)' : 'translateX(0)',
                        transition: theme => theme.transitions.create(['opacity', 'transform', 'visibility'], {
                            duration: 200,
                            easing: theme.transitions.easing.easeInOut
                        })
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