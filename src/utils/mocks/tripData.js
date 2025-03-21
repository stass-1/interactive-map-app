export const tripData = {
    title: "Путешествие в поисках истинного голландского gezelligheid",
    subtitle: "Открывая уют, тепло и душевность Нидерландов",
    dateRange: {
        start: "2025-03-25",
        end: "2025-04-07"
    },
    travelers: ["Я", "Пожилой отец"],
    itinerary: [
        {
            location: "Эйндховен",
            type: "transit",
            date: "2025-03-25",
            description: "Прибытие самолётом из Вильнюса в 9:00",
            coordinates: [51.4416, 5.4697]
        },
        {
            location: "Утрехт",
            type: "visit",
            date: "2025-03-25",
            timeRange: "11:30 - 14:30",
            description: "Обед и прогулка",
            coordinates: [52.0907, 5.1214]
        },
        {
            location: "Dwarsgracht",
            type: "accommodation",
            dateRange: {
                start: "2025-03-25",
                end: "2025-03-29"
            },
            description: "Загородный дом в Dwarsgracht",
            address: "Dwarsgracht 39, 8355 CV Giethoorn, Netherlands",
            coordinates: [52.7268, 6.0342]
        },
        {
            location: "Amersfoort",
            type: "accommodation",
            dateRange: {
                start: "2025-03-29",
                end: "2025-04-06"
            },
            description: "Дом в историческом центре",
            coordinates: [52.1561, 5.3878]
        },
        {
            location: "Эйндховен",
            type: "transit",
            date: "2025-04-07",
            description: "Вылет в Вильнюс в 16:40",
            coordinates: [51.4416, 5.4697]
        }
    ]
}