import { Box, Grid, Typography, Paper } from '@mui/material'
import Map from './components/Map'

function App() {
	return (
		<Box sx={{ height: '100vh', overflow: 'hidden' }}>
			<Grid container sx={{ height: '100%' }}>
				{/* Первая колонка (2/5 ширины) */}
				<Grid item xs={4}>
					<Paper elevation={3} sx={{ height: '100%', p: 3, overflowY: 'auto' }}>
						<Typography variant='h3' gutterBottom>Travel Planner</Typography>
						<Typography variant='body1' paragraph>
							Планируйте свои путешествия, добавляйте маршруты и делитесь впечатлениями.
						</Typography>
						{/* Здесь будет информация о путешествии */}
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
						{/* Добавьте больше информации при необходимости */}
					</Paper>
				</Grid>
				
				{/* Вторая колонка (3/5 ширины) для карты */}
				<Grid item xs={8} sx={{ height: '100%' }}>
					<Map />
				</Grid>
			</Grid>
		</Box>
	)
}

export default App