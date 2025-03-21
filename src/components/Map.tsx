import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import 'leaflet/dist/leaflet.css'
import { latLngBounds } from 'leaflet'
import { tripData } from '../utils/mocks'
import { Place } from '../types/map'

function Map() {
    const position: [number, number] = [52.3676, 4.9041]
    const zoom = 8

    const places: Place[] = tripData.itinerary.map(item => ({
        name: item.location,
        position: item.coordinates,
        description: item.description,
        type: item.type
    }))

    const markersBounds = latLngBounds(places.map(place => place.position))
    
    function MapController() {
        const map = useMap()
        const [hasInitialized, setHasInitialized] = useState(false)

        useEffect(() => {
            if (!hasInitialized) {
                map.fitBounds(markersBounds, { padding: [25, 25] })
                setHasInitialized(true)
            }
        }, [hasInitialized, map])

        useEffect(() => {
            if (!map) return
            
            let resizeRAF: number | null = null
            let resizeTimeout: NodeJS.Timeout | null = null
            
            const handleResize = () => {
                if (resizeRAF) cancelAnimationFrame(resizeRAF)
                
                resizeRAF = requestAnimationFrame(() => {
                    if (map) map.invalidateSize({ animate: true, pan: false, debounceMoveend: true })
                })
            }

            window.addEventListener('resize', handleResize)

            let observerRAF: number | null = null
            const observer = new MutationObserver(() => {
                if (observerRAF) cancelAnimationFrame(observerRAF)
                
                observerRAF = requestAnimationFrame(() => {
                    if (map) map.invalidateSize()
                })

                if (resizeTimeout) clearTimeout(resizeTimeout)
                resizeTimeout = setTimeout(() => {
                    if (map) map.invalidateSize()
                }, 350)
            })

            observer.observe(document.body, { 
                attributes: true, 
                subtree: true,
                attributeFilter: ['style', 'class'] 
            })

            return () => {
                window.removeEventListener('resize', handleResize)
                observer.disconnect()
                
                if (resizeRAF) cancelAnimationFrame(resizeRAF)
                if (observerRAF) cancelAnimationFrame(observerRAF)
                if (resizeTimeout) clearTimeout(resizeTimeout)
            }
        }, [map])
        
        return null
    }

    return (
        <Box sx={{
            '& .leaflet-container': {
                height: '100%',
                width: '100%',
                zIndex: 1,
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            },
            '& .leaflet-pane': {
                zIndex: 1
            },
            '& .leaflet-top, & .leaflet-bottom': {
                zIndex: 2
            },
            height: '100%',
            width: '100%',
            position: 'relative',
            display: 'flex',
            overflow: 'hidden',
            transform: 'translateZ(0)',
            willChange: 'contents',
            backfaceVisibility: 'hidden'
        }}>
            <MapContainer 
                center={position}
                zoom={zoom}
                minZoom={7}
                style={{ height: '100%', width: '100%' }}
                zoomSnap={0.5}
                zoomDelta={0.5}
                boundsOptions={{ padding: [25, 25] }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {places.map((place, index) => (
                    <Marker key={index} position={place.position}>
                        <Popup>
                            <strong>{place.name}</strong>
                            <p>{place.description}</p>
                            {place.type && <p>Тип: {place.type}</p>}
                        </Popup>
                    </Marker>
                ))}
                
                <MapController />
            </MapContainer>
        </Box>
    )
}

export default Map