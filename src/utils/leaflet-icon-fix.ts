import L from 'leaflet'
// @ts-ignore
import iconUrl from 'leaflet/dist/images/marker-icon.png'
// @ts-ignore
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl

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