import { defineStore } from 'pinia'
import { useFirebaseAuth } from 'vuefire'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { useToast } from 'vue-toast-notification'
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const auth = useFirebaseAuth()
  const authUser = ref(null)
  const $toast = useToast()
  const router = useRouter()

  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      authUser.value = user
    })
  })

  const login = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        authUser.value = user
        router.push({ name: 'admin-properties' })
      })
      .catch(() => {
        $toast.error('Invalid User!')
      })
  }

  const logOut = () => {
    signOut(auth)
      .then(() => {
        authUser.value = null
        router.push({ name: 'login' })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const isAuth = computed(() => {
    return authUser.value
  })

  return {
    login,
    logOut,
    isAuth
  }
})
