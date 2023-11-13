import { ref } from 'vue'

export default function useDialog() {
  const dialog = ref(false)

  function openClose() {
    dialog.value = !dialog.value
    console.log(dialog.value)
  }

  return {
    openClose,
    dialog
  }
}
