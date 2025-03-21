import { useState, useEffect, cloneElement } from 'react'
import { Box, IconButton, Paper, Menu, MenuItem, Fab } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import LogoutIcon from '@mui/icons-material/Logout'
import { useAuth } from '../../context/AuthContext'

function CollapsibleLayout({ sidebarContent, mapContent, headerContent, onLogout }) {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const { user } = useAuth()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const handleLogoutClick = () => {
        handleMenuClose()
        onLogout()
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

    const headerWithProps = headerContent ? 
        cloneElement(headerContent, { onClick: handleAvatarClick }) : 
        null

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
                    p: 1,
                    borderBottom: isCollapsed ? 'none' : '1px solid',
                    borderColor: 'divider'
                }}>
                    {!isCollapsed ? (
                        <>
                            {headerWithProps}
                            <IconButton 
                                onClick={toggleCollapse} 
                                aria-label="collapse panel"
                                sx={{ ml: 'auto' }}
                            >
                                <ChevronLeftIcon />
                            </IconButton>
                        </>
                    ) : (
                        <Box 
                            sx={{ 
                                width: '100%', 
                                display: 'flex', 
                                justifyContent: 'center'
                            }}
                        >
                            {user?.photoURL ? (
                                <Box
                                    component="img"
                                    src={user.photoURL}
                                    alt={user.name}
                                    onClick={handleAvatarClick}
                                    aria-controls={open ? 'user-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.5)'
                                        }
                                    }}
                                />
                            ) : (
                                <Box
                                    onClick={handleAvatarClick}
                                    aria-controls={open ? 'user-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        bgcolor: 'primary.main',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'bold',
                                        fontSize: '1.25rem',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.5)'
                                        }
                                    }}
                                >
                                    {user?.name?.charAt(0) || 'U'}
                                </Box>
                            )}
                        </Box>
                    )}
                </Box>

                <Menu
                    id="user-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    MenuListProps={{
                        'aria-labelledby': 'user-menu-button',
                    }}
                >
                    <MenuItem onClick={handleLogoutClick} sx={{ gap: 1 }}>
                        <LogoutIcon fontSize="small" />
                        Logout
                    </MenuItem>
                </Menu>

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

                {isCollapsed && (
                    <Fab
                        aria-label="expand"
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
                        <ChevronRightIcon />
                    </Fab>
                )}
            </Box>
        </Box>
    )
}

export default CollapsibleLayout