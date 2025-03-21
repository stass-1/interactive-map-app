// Mock data for transportation information
export const transportData = {
    segments: [
        {
            date: "2025-03-25",
            mode: "flight",
            from: {
                location: "Вильнюс",
                time: "07:35"
            },
            to: {
                location: "Эйндховен",
                time: "09:00"
            },
            cost: 0, // Cost not specified in the document
            notes: "Перекус с кофе в аэропорту [15€]"
        },
        {
            date: "2025-03-25",
            mode: "bus",
            from: {
                location: "Аэропорт Эйндховена",
                time: "09:36"
            },
            to: {
                location: "Вокзал Эйндховена",
                time: "10:00" // Time not specified, estimated
            },
            cost: 3.22,
            notes: "Автобус из аэропорта на вокзал"
        },
        {
            date: "2025-03-25",
            mode: "train",
            from: {
                location: "Эйндховен Centraal",
                time: "10:36"
            },
            to: {
                location: "Утрехт Centraal",
                time: "11:30"
            },
            cost: 17.90,
            notes: "Поезд из Эйндховена в Утрехт"
        },
        {
            date: "2025-03-25",
            mode: "train",
            from: {
                location: "Утрехт Centraal",
                time: "14:51"
            },
            to: {
                location: "Steenwijk",
                time: "16:13"
            },
            cost: 25,
            notes: "Поезд из Утрехта"
        },
        {
            date: "2025-03-25",
            mode: "bus",
            from: {
                location: "Steenwijk",
                time: "16:28"
            },
            to: {
                location: "Giethoorn",
                time: "16:42"
            },
            cost: 3.21,
            notes: "Автобус из Steenwijk"
        },
        {
            date: "2025-03-29",
            mode: "bus",
            from: {
                location: "Giethoorn",
                time: "10:41"
            },
            to: {
                location: "Steenwijk",
                time: "11:00" // Time not specified, estimated
            },
            cost: 3.21,
            notes: "Автобус из Giethoorn"
        },
        {
            date: "2025-03-29",
            mode: "train",
            from: {
                location: "Steenwijk",
                time: "14:46"
            },
            to: {
                location: "Amersfoort Centraal",
                time: "16:00"
            },
            cost: 23,
            notes: "Поезд из Steenwijk"
        },
        {
            date: "2025-04-07",
            mode: "flight",
            from: {
                location: "Эйндховен",
                time: "16:40"
            },
            to: {
                location: "Вильнюс",
                time: "19:50"
            },
            cost: 0, // Cost not specified in the document
            notes: ""
        }
    ]
}