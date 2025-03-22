import { ActivitiesData } from '../../types/mocks'

export const activitiesData: ActivitiesData = {
    locations: [
        {
            tripId: 'netherlands-2025',
            city: 'Утрехт',
            activities: [
                {
                    tripId: 'netherlands-2025',
                    type: 'food',
                    name: 'Café Olivier',
                    description: 'Популярное место в историческом здании бывшей церкви с бельгийской и голландской кухней. Предлагают хорошие обеденные блюда и отличный выбор пива.',
                    coordinates: [52.0892, 5.1218]
                },
                {
                    tripId: 'netherlands-2025',
                    type: 'food',
                    name: 'Stadskasteel Oudaen',
                    description: 'Ресторан, расположенный в средневековом замке в центре города, где можно попробовать традиционные нидерландские блюда вроде stamppot (картофельное пюре с овощами) или bitterballen (мясные шарики).',
                    coordinates: [52.0925, 5.1195]
                },
                {
                    tripId: 'netherlands-2025',
                    type: 'food',
                    name: 'De Rechtbank',
                    description: 'Стильный ресторан в здании бывшего суда с сезонным меню и прекрасными традиционными блюдами.',
                    coordinates: [52.0904, 5.1182]
                },
                {
                    tripId: 'netherlands-2025',
                    type: 'food',
                    name: 'Grand Café Lebowski',
                    description: 'Уютное кафе с открытой террасой и разнообразным меню.',
                    coordinates: [52.0932, 5.1205]
                },
                {
                    tripId: 'netherlands-2025',
                    type: 'food',
                    name: 'Streetfood Club Utrecht',
                    description: 'Если предпочитаете что-то более неформальное, это место предлагает интернациональную кухню в формате стритфуда.',
                    coordinates: [52.0910, 5.1168]
                }
            ]
        },
        {
            tripId: 'netherlands-2025',
            city: 'Dwarsgracht/Giethoorn',
            activities: []
        },
        {
            tripId: 'netherlands-2025',
            city: 'Amersfoort',
            activities: []
        }
    ],
    shoppingItems: [
        {
            tripId: 'netherlands-2025',
            category: 'Еда и напитки',
            items: [
                'Пиво Grolsch Premium Pilsner или Bavaria Premium Pilsener',
                'Erwtensoep (консервированный гороховый суп)',
                'Bruine bonensoep (консервированный суп из коричневой фасоли)',
                'Консервированные мидии',
                'Haring in blik (консервированная сельдь)',
                'Твердый выдержанный голландский сыр (старый Гауда или Эдам)',
                'Упакованный хлеб (цельнозерновой или багет)',
                'Пеперкукен (Pepernoten) или спекулаас (Speculaas) - пряное печенье'
            ]
        }
    ]
}