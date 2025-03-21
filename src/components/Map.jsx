import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import 'leaflet/dist/leaflet.css'
import '../utils/leaflet-icon-fix'
import { latLngBounds } from 'leaflet'

function Map() {

	const position = [52.3676, 4.9041]
	const zoom = 8

	const places = [
		{
			name: 'Эйндховен',
			position: [51.4416, 5.4697],
			description: 'Место прибытия и отправления'
		},
		{
			name: 'Dwarsgracht',
			position: [52.7268, 6.0342],
			description: 'Загородный дом, 25-29 марта'
		},
		{
			name: 'Амерсфорт',
			position: [52.1561, 5.3878],
			description: 'Дом в историческом центре, 29 марта - 6 апреля'
		}
	]

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
			const handleResize = () => {
				// Use RAF for better performance
				requestAnimationFrame(() => {
					map.invalidateSize({ animate: true, pan: false, debounceMoveend: true })
				})
			}

			window.addEventListener('resize', handleResize)

			const observer = new MutationObserver(() => {
				requestAnimationFrame(() => {
					map.invalidateSize()
				})

				setTimeout(() => map.invalidateSize(), 350)
			})

			observer.observe(document.body, { 
				attributes: true, 
				subtree: true,
				attributeFilter: ['style', 'class'] 
			})

			return () => {
				window.removeEventListener('resize', handleResize)
				observer.disconnect()
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
				watchOverlayVisibility={true}
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
						</Popup>
					</Marker>
				))}
				
				<MapController />
			</MapContainer>
		</Box>
	)
}

export default Map