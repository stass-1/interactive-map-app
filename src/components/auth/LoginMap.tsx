import { useState, useEffect, useRef } from 'react'
import Map from 'react-map-gl/maplibre'
import { Box } from '@mui/material'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

interface ViewportState {
    latitude: number
    longitude: number
    zoom: number
    pitch: number
    bearing: number
}

interface AnimationState {
    startTime: number | null
    amplitude: number
    frequency: number
    baseLatitude: number
    baseLongitude: number
}

function LoginMap() {
    const [viewport, setViewport] = useState<ViewportState>({
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 15,
        pitch: 45,
        bearing: 45
    })

    const [isLoaded, setIsLoaded] = useState(false)
    const animationRef = useRef<AnimationState>({
        startTime: null,
        amplitude: 0.002,
        frequency: 0.1,
        baseLatitude: 52.3676,
        baseLongitude: 4.9041
    })

    useEffect(() => {
        let animationFrameId: number

        const animate = (currentTime: number) => {
            if (!animationRef.current.startTime) {
                animationRef.current.startTime = currentTime
            }

            const elapsed = currentTime - animationRef.current.startTime

            const newLatitude = animationRef.current.baseLatitude + 
                animationRef.current.amplitude * 
                Math.sin(animationRef.current.frequency * elapsed * 0.001)

            const newLongitude = animationRef.current.baseLongitude + 
                animationRef.current.amplitude * 
                Math.cos(animationRef.current.frequency * elapsed * 0.001)

            setViewport(prev => ({
                ...prev,
                latitude: newLatitude,
                longitude: newLongitude
            }))

            animationFrameId = requestAnimationFrame(animate)
        }

        animationFrameId = requestAnimationFrame(animate)

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId)
            }
        }
    }, [])

    const handleLoad = () => {
        setIsLoaded(true)
    }

    return (
        <Box sx={{
            height: '100%',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            bgcolor: '#f0f4f8',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease'
        }}>
            <Map
                mapLib={maplibregl}
                initialViewState={viewport}
                viewState={viewport}
                style={{
                    height: '200%',
                    width: '200%',
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    transform: 'rotate(45deg)',
                    zIndex: 1
                }}
                mapStyle="https://tiles.stadiamaps.com/styles/outdoors.json"
                attributionControl={false}
                onLoad={handleLoad}
            />
            
            <Box sx={{ 
                position: 'absolute',
                bottom: '5px',
                right: '5px',
                fontSize: '10px',
                color: '#333',
                zIndex: 10,
                opacity: 0.7,
                padding: '2px 5px',
                backgroundColor: 'rgba(255,255,255,0.7)',
                borderRadius: '3px'
            }}>
                © OpenStreetMap contributors
            </Box>
        </Box>
    )
}

export default LoginMap