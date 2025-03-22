import { TransportData } from '../../types/mocks'

export const transportData: TransportData = {
    segments: [
        // Netherlands trip
        {
            tripId: 'netherlands-2025',
            date: '2025-03-25',
            mode: 'flight',
            from: {
                location: 'Вильнюс',
                time: '07:35'
            },
            to: {
                location: 'Эйндховен',
                time: '09:00'
            },
            cost: 0,
            notes: 'Перекус с кофе в аэропорту [15€]'
        },
        {
            tripId: 'netherlands-2025',
            date: '2025-03-25',
            mode: 'bus',
            from: {
                location: 'Аэропорт Эйндховена',
                time: '09:36'
            },
            to: {
                location: 'Вокзал Эйндховена',
                time: '10:00'
            },
            cost: 3.22,
            notes: 'Автобус из аэропорта на вокзал'
        },
        {
            tripId: 'netherlands-2025',
            date: '2025-03-25',
            mode: 'train',
            from: {
                location: 'Эйндховен Centraal',
                time: '10:36'
            },
            to: {
                location: 'Утрехт Centraal',
                time: '11:30'
            },
            cost: 17.90,
            notes: 'Поезд из Эйндховена в Утрехт'
        },
        {
            tripId: 'netherlands-2025',
            date: '2025-03-25',
            mode: 'train',
            from: {
                location: 'Утрехт Centraal',
                time: '14:51'
            },
            to: {
                location: 'Steenwijk',
                time: '16:13'
            },
            cost: 25,
            notes: 'Поезд из Утрехта'
        },
        {
            tripId: 'netherlands-2025',
            date: '2025-03-25',
            mode: 'bus',
            from: {
                location: 'Steenwijk',
                time: '16:28'
            },
            to: {
                location: 'Giethoorn',
                time: '16:42'
            },
            cost: 3.21,
            notes: 'Автобус из Steenwijk'
        },
        {
            tripId: 'netherlands-2025',
            date: '2025-03-29',
            mode: 'bus',
            from: {
                location: 'Giethoorn',
                time: '10:41'
            },
            to: {
                location: 'Steenwijk',
                time: '11:00'
            },
            cost: 3.21,
            notes: 'Автобус из Giethoorn'
        },
        {
            tripId: 'netherlands-2025',
            date: '2025-03-29',
            mode: 'train',
            from: {
                location: 'Steenwijk',
                time: '14:46'
            },
            to: {
                location: 'Amersfoort Centraal',
                time: '16:00'
            },
            cost: 23,
            notes: 'Поезд из Steenwijk'
        },
        {
            tripId: 'netherlands-2025',
            date: '2025-04-07',
            mode: 'flight',
            from: {
                location: 'Эйндховен',
                time: '16:40'
            },
            to: {
                location: 'Вильнюс',
                time: '19:50'
            },
            cost: 0,
            notes: ''
        },
        
        // Paris weekend trip
        {
            tripId: 'paris-weekend',
            date: '2025-04-18',
            mode: 'train',
            from: {
                location: 'Амстердам',
                time: '07:30'
            },
            to: {
                location: 'Париж',
                time: '10:00'
            },
            cost: 75,
            notes: 'Thalys высокоскоростной поезд'
        },
        {
            tripId: 'paris-weekend',
            date: '2025-04-20',
            mode: 'train',
            from: {
                location: 'Париж',
                time: '18:30'
            },
            to: {
                location: 'Амстердам',
                time: '21:00'
            },
            cost: 75,
            notes: 'Thalys высокоскоростной поезд'
        },
        
        // Southeast Asia trip
        {
            tripId: 'southeast-asia',
            date: '2025-05-15',
            mode: 'flight',
            from: {
                location: 'Амстердам',
                time: '10:00'
            },
            to: {
                location: 'Бангкок',
                time: '06:30'
            },
            cost: 650,
            notes: 'Прямой рейс KLM'
        },
        {
            tripId: 'southeast-asia',
            date: '2025-05-31',
            mode: 'flight',
            from: {
                location: 'Бангкок',
                time: '08:30'
            },
            to: {
                location: 'Чиангмай',
                time: '09:40'
            },
            cost: 80,
            notes: 'Thai Airways'
        },
        {
            tripId: 'southeast-asia',
            date: '2025-06-16',
            mode: 'flight',
            from: {
                location: 'Чиангмай',
                time: '12:15'
            },
            to: {
                location: 'Хошимин',
                time: '14:30'
            },
            cost: 120,
            notes: 'Vietnam Airlines с пересадкой в Бангкоке'
        },
        {
            tripId: 'southeast-asia',
            date: '2025-07-06',
            mode: 'flight',
            from: {
                location: 'Хошимин',
                time: '10:00'
            },
            to: {
                location: 'Ханой',
                time: '12:00'
            },
            cost: 90,
            notes: 'Vietnam Airlines'
        },
        {
            tripId: 'southeast-asia',
            date: '2025-07-21',
            mode: 'flight',
            from: {
                location: 'Ханой',
                time: '13:45'
            },
            to: {
                location: 'Сием Рип',
                time: '15:30'
            },
            cost: 110,
            notes: 'Cambodia Angkor Air'
        },
        {
            tripId: 'southeast-asia',
            date: '2025-08-06',
            mode: 'flight',
            from: {
                location: 'Сием Рип',
                time: '16:20'
            },
            to: {
                location: 'Бангкок',
                time: '17:30'
            },
            cost: 95,
            notes: 'Bangkok Airways'
        },
        {
            tripId: 'southeast-asia',
            date: '2025-08-10',
            mode: 'flight',
            from: {
                location: 'Бангкок',
                time: '23:55'
            },
            to: {
                location: 'Амстердам',
                time: '06:15'
            },
            cost: 680,
            notes: 'Прямой рейс KLM'
        }
    ]
}