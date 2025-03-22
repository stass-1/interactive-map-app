import { LatLngTuple } from 'leaflet'

export interface TransportSegment {
    tripId?: string
    date: string
    mode: string
    from: {
        location: string
        time: string
    }
    to: {
        location: string
        time: string
    }
    cost: number
    notes: string
}

export interface TransportData {
    segments: TransportSegment[]
}

export interface Activity {
    tripId?: string
    type: string
    name: string
    description: string
    coordinates: LatLngTuple
}

export interface CityActivities {
    tripId?: string
    city: string
    activities: Activity[]
}

export interface ShoppingCategory {
    tripId?: string
    category: string
    items: string[]
}

export interface ActivitiesData {
    locations: CityActivities[]
    shoppingItems: ShoppingCategory[]
}

export interface PackingItem {
    name: string
    category: string
    packed: boolean
    optional?: boolean
}

export interface Traveler {
    tripId?: string
    name: string
    items: PackingItem[]
}

export interface PackingListData {
    travelers: Traveler[]
}
