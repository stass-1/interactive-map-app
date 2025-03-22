export interface TripListItem {
    id: string
    title: string
    dateRange: {
        start: string
        end: string
    }
    mainDestination: string
    image?: string
}

export const upcomingTrips: TripListItem[] = [
    {
        id: 'netherlands-2025',
        title: 'Путешествие в поисках истинного голландского gezelligheid',
        dateRange: {
            start: '2025-03-25',
            end: '2025-04-07'
        },
        mainDestination: 'Нидерланды',
        image: '/img/netherlands.jpg'
    }
]
