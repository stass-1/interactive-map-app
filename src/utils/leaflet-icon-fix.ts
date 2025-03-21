import L from 'leaflet'

const iconUrl = 'leaflet/dist/images/marker-icon.png'
const shadowUrl = 'leaflet/dist/images/marker-shadow.png'

const DefaultIcon = L.Icon.Default.prototype as any
if (DefaultIcon._getIconUrl) {
    delete DefaultIcon._getIconUrl
}

L.Icon.Default.mergeOptions({
	iconUrl,
	shadowUrl,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	tooltipAnchor: [16, -28],
	shadowSize: [41, 41]
})

export default L
