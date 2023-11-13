import { computed, ref } from 'vue'
import { collection, doc, deleteDoc } from 'firebase/firestore'
import { ref as storageRef, deleteObject } from 'firebase/storage'
import { useFirestore, useCollection, useFirebaseStorage } from 'vuefire'
import { useToast } from 'vue-toast-notification'

export default function useProperties() {
  const $toast = useToast()
  const pool = ref(false)
  const storage = useFirebaseStorage()
  const db = useFirestore()
  const propertiesCollection = useCollection(collection(db, 'properties'))
  const propertyPrice = computed(() => {
    return (price) =>
      Number(price).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })
  })
  const propertiesFilter = computed(() => {
    return pool.value
      ? propertiesCollection.value.filter((property) => property.pool)
      : propertiesCollection.value
  })
  async function deleteItem(id, urlImage) {
    const docRef = doc(db, 'properties', id)
    const imageRef = storageRef(storage, urlImage)
    await Promise.all([deleteDoc(docRef), deleteObject(imageRef)])

    $toast.success('Property Successfully deleted!')
  }
  return { propertiesCollection, propertyPrice, pool, propertiesFilter, deleteItem }
}
