import { TripData } from '../../types/map'

export const tripsData: Record<string, TripData> = {
    'netherlands-2025': {
        id: 'netherlands-2025',
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
    },
    'paris-weekend': {
        id: 'paris-weekend',
        title: 'Романтический уикенд в Париже',
        subtitle: 'Короткое путешествие в город любви',
        dateRange: {
            start: '2025-04-18',
            end: '2025-04-20'
        },
        travelers: ['Я', 'Партнер'],
        itinerary: [
            {
                location: 'Париж',
                type: 'transit',
                date: '2025-04-18',
                description: 'Прибытие поездом в Париж в 10:00',
                coordinates: [48.8566, 2.3522]
            },
            {
                location: 'Отель Le Marais',
                type: 'accommodation',
                dateRange: {
                    start: '2025-04-18',
                    end: '2025-04-20'
                },
                description: 'Бутик-отель в районе Марэ',
                address: '15 Rue des Archives, 75004 Paris, France',
                coordinates: [48.8566, 2.3522]
            },
            {
                location: 'Лувр',
                type: 'visit',
                date: '2025-04-19',
                timeRange: '10:00 - 14:00',
                description: 'Посещение музея',
                coordinates: [48.8606, 2.3376]
            },
            {
                location: 'Эйфелева башня',
                type: 'visit',
                date: '2025-04-19',
                timeRange: '16:00 - 18:00',
                description: 'Осмотр достопримечательности',
                coordinates: [48.8584, 2.2945]
            },
            {
                location: 'Париж',
                type: 'transit',
                date: '2025-04-20',
                description: 'Отъезд из Парижа в 18:30',
                coordinates: [48.8566, 2.3522]
            }
        ]
    },
    'southeast-asia': {
        id: 'southeast-asia',
        title: 'Путешествие по Юго-Восточной Азии',
        subtitle: 'Исследование культур, кухонь и ландшафтов Юго-Восточной Азии',
        dateRange: {
            start: '2025-05-15',
            end: '2025-08-10'
        },
        travelers: ['Я'],
        itinerary: [
            {
                location: 'Бангкок',
                type: 'transit',
                date: '2025-05-15',
                description: 'Прибытие в Бангкок',
                coordinates: [13.7563, 100.5018]
            },
            {
                location: 'Отель в Бангкоке',
                type: 'accommodation',
                dateRange: {
                    start: '2025-05-15',
                    end: '2025-05-30'
                },
                description: 'Проживание в районе Сукхумвит',
                coordinates: [13.7437, 100.5677]
            },
            {
                location: 'Чиангмай',
                type: 'accommodation',
                dateRange: {
                    start: '2025-06-01',
                    end: '2025-06-15'
                },
                description: 'Гостевой дом в старом городе',
                coordinates: [18.7883, 98.9853]
            },
            {
                location: 'Бангкок - Чиангмай',
                type: 'transit',
                date: '2025-05-31',
                description: 'Перелет из Бангкока в Чиангмай',
                coordinates: [18.7883, 98.9853]
            },
            {
                location: 'Хошимин',
                type: 'accommodation',
                dateRange: {
                    start: '2025-06-17',
                    end: '2025-07-05'
                },
                description: 'Апартаменты в округе 1',
                coordinates: [10.8231, 106.6297]
            },
            {
                location: 'Чиангмай - Хошимин',
                type: 'transit',
                date: '2025-06-16',
                description: 'Перелет из Чиангмая в Хошимин',
                coordinates: [10.8231, 106.6297]
            },
            {
                location: 'Ханой',
                type: 'accommodation',
                dateRange: {
                    start: '2025-07-07',
                    end: '2025-07-20'
                },
                description: 'Отель в старом квартале',
                coordinates: [21.0278, 105.8342]
            },
            {
                location: 'Хошимин - Ханой',
                type: 'transit',
                date: '2025-07-06',
                description: 'Перелет из Хошимина в Ханой',
                coordinates: [21.0278, 105.8342]
            },
            {
                location: 'Сием Рип',
                type: 'accommodation',
                dateRange: {
                    start: '2025-07-22',
                    end: '2025-08-05'
                },
                description: 'Бутик-отель рядом с храмами',
                coordinates: [13.3633, 103.8600]
            },
            {
                location: 'Ханой - Сием Рип',
                type: 'transit',
                date: '2025-07-21',
                description: 'Перелет из Ханоя в Сием Рип',
                coordinates: [13.3633, 103.8600]
            },
            {
                location: 'Бангкок',
                type: 'accommodation',
                dateRange: {
                    start: '2025-08-06',
                    end: '2025-08-10'
                },
                description: 'Отель перед вылетом домой',
                coordinates: [13.7563, 100.5018]
            },
            {
                location: 'Сием Рип - Бангкок',
                type: 'transit',
                date: '2025-08-06',
                description: 'Перелет из Сием Рипа в Бангкок',
                coordinates: [13.7563, 100.5018]
            },
            {
                location: 'Бангкок',
                type: 'transit',
                date: '2025-08-10',
                description: 'Вылет домой',
                coordinates: [13.7563, 100.5018]
            },
            // Visit entries
            {
                location: 'Храм Изумрудного Будды',
                type: 'visit',
                date: '2025-05-17',
                description: 'Посещение главного буддийского храма Таиланда',
                coordinates: [13.7516, 100.4927]
            },
            {
                location: 'Плавучий рынок Дамноен Садуак',
                type: 'visit',
                date: '2025-05-22',
                description: 'Поездка на традиционный плавучий рынок',
                coordinates: [13.5230, 99.9577]
            },
            {
                location: 'Храм Дой Сутхеп',
                type: 'visit',
                date: '2025-06-05',
                description: 'Посещение священного буддийского храма',
                coordinates: [18.8047, 98.9212]
            },
            {
                location: 'Пещеры Ку Чи',
                type: 'visit',
                date: '2025-06-20',
                description: 'Тур по историческим туннелям времен войны',
                coordinates: [11.1436, 106.4637]
            },
            {
                location: 'Залив Халонг',
                type: 'visit',
                date: '2025-07-12',
                timeRange: '08:00 - 18:00',
                description: 'Круиз по заливу Халонг',
                coordinates: [20.9101, 107.1839]
            },
            {
                location: 'Ангкор-Ват',
                type: 'visit',
                date: '2025-07-25',
                timeRange: '05:30 - 12:00',
                description: 'Осмотр храмового комплекса на рассвете',
                coordinates: [13.4125, 103.8670]
            }
        ]
    }
}

// For backward compatibility - exports the first trip as before
export const tripData = tripsData['netherlands-2025']