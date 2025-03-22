import { useState, useEffect, cloneElement, MouseEvent } from 'react'
import { Box, Paper, Menu, MenuItem, Fab } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import LogoutIcon from '@mui/icons-material/Logout'

import { CollapsibleLayoutProps } from '../../types/layout'
import { Outlet, useNavigate } from 'react-router'

function CollapsibleLayout({ mapContent, sidebarControls, onLogout }: CollapsibleLayoutProps) {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const open = Boolean(anchorEl)
    const navigate = useNavigate()

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }

    const handleAvatarClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const handleLogoutClick = async () => {
        handleMenuClose()
        await onLogout?.()
        navigate('/login')
        console.log('Logout clicked')
    }

    useEffect(() => {
        let timer: NodeJS.Timeout
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

    const sidebarControlsWithProps = sidebarControls
        ? cloneElement(
            sidebarControls,
            {
                onClick: handleAvatarClick,
                isCollapsed
            }
        )
        : null

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
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 1.25,
                    borderBottom: '1px solid',
                    borderColor: 'divider'
                }}>
                    {sidebarControlsWithProps}
                </Box>

                <Outlet context={isCollapsed}/>

                <Menu
                    id="user-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleLogoutClick} sx={{ gap: 1 }}>
                        <LogoutIcon fontSize="small" />
                        Logout
                    </MenuItem>
                </Menu>
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

                <Fab
                    aria-label="toggle-sidebar"
                    onClick={toggleCollapse}
                    sx={{
                        position: 'absolute',
                        left: '8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)',
                        bgcolor: 'white',
                        '&:hover': {
                            bgcolor: 'rgba(255, 255, 255, 0.9)'
                        },
                        color: 'primary.main'
                    }}
                    size="small"
                >
                    {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </Fab>
            </Box>
        </Box>
    )
}

export default CollapsibleLayout