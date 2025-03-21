import { LatLngTuple } from 'leaflet'

export interface Place {
    name: string
    position: LatLngTuple
    description: string
    type?: string
}

export interface DateRange {
    start: string
    end: string
}

export interface TripItem {
    location: string
    type: string
    description: string
    coordinates: LatLngTuple
    date?: string
    timeRange?: string
    dateRange?: DateRange
    address?: string
}

export interface TripData {
    title: string
    subtitle: string
    dateRange: DateRange
    travelers: string[]
    itinerary: TripItem[]
}
