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
    },
    {
        id: 'paris-weekend',
        title: 'Романтический уикенд в Париже',
        dateRange: {
            start: '2025-04-18',
            end: '2025-04-20'
        },
        mainDestination: 'Франция',
        image: '/img/paris.jpg'
    },
    {
        id: 'southeast-asia',
        title: 'Путешествие по Юго-Восточной Азии',
        dateRange: {
            start: '2025-05-15',
            end: '2025-08-10'
        },
        mainDestination: 'Юго-Восточная Азия',
        image: '/img/asia.jpg'
    }
]