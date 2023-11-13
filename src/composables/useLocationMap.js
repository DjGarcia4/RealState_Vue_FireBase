import { ref } from 'vue'

export default function useLocationMap() {
  const zoom = ref(15)
  const center = ref([14.0797489, -87.1947387])
  function pin(e) {
    const data = e.target.getLatLng()
    center.value = [data.lat, data.lng]
    console.log(center.value)
  }
  return {
    zoom,
    center,
    pin
  }
}
