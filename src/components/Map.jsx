import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Box } from '@mui/material'
import 'leaflet/dist/leaflet.css'
import '../utils/leaflet-icon-fix'

function Map() {
	const position = [52.3676, 4.9041]
	const zoom = 7

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

	return (
		<Box sx={{
			'& .leaflet-container': {
				height: '100%',
				width: '100%',
				zIndex: 1
			},
			'& .leaflet-pane': {
				zIndex: 1
			},
			'& .leaflet-top, & .leaflet-bottom': {
				zIndex: 2
			},
			height: '100%',
			width: '100%'
		}}>
			<MapContainer 
				center={position} 
				zoom={zoom} 
				style={{ height: '100%', width: '100%' }}
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
			</MapContainer>
		</Box>
	)
}

export default Map