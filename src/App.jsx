import { Typography } from '@mui/material'
import Map from './components/Map'
import CollapsibleLayout from './components/layout/CollapsibleLayout'

function App() {
	const sidebarContent = (
		<>
			<Typography variant='h3' gutterBottom>Travel Planner</Typography>
			<Typography variant='body1' paragraph>
				Планируйте свои путешествия, добавляйте маршруты и делитесь впечатлениями.
			</Typography>
			<Typography variant='h5' gutterBottom sx={{ mt: 4 }}>
				Путешествие в Нидерланды
			</Typography>
			<Typography variant='body1' paragraph>
				Даты: 25 марта 2025 - 7 апреля 2025
			</Typography>
			<Typography variant='body1' paragraph>
				Маршрут: Эйндховен → Dwarsgracht → Amersfoort → Эйндховен
			</Typography>
			<Typography variant='body1' paragraph>
				Проживание: Загородный дом в Dwarsgracht, дом в Amersfoort
			</Typography>
		</>
	)

	const mapContent = <Map />

	return (
		<CollapsibleLayout 
			sidebarContent={sidebarContent}
			mapContent={mapContent}
		/>
	)
}

export default App