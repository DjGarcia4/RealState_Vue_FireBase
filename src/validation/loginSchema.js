export const loginSchema = {
  email(value) {
    if (!value) {
      return 'Email is required'
    }

    // Validar si es un email válido
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (!emailRegex.test(value)) {
      return 'Invalid Email'
    }

    return true
  },
  password(value) {
    if (!value) {
      return 'Password is required'
    }

    if (value.length < 8) {
      return 'Password must be at least 8 characters long'
    }
    return true
  }
}
