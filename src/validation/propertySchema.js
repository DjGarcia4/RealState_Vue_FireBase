export const propertySchema = {
  nameProperty(value) {
    if (!value) return 'Property name is required'
    if (value.length < 6) return 'Property name is too short'
    return true
  },
  price(value) {
    if (!value) return 'Price is required'
    if (!/^[0-9]+$/.test(value)) return 'Price should contain only numbers'
    return true
  },
  rooms(value) {
    if (!value) return 'Number of rooms is required'
    return true
  },
  wc(value) {
    if (!value) return 'Number of bathrooms is required'
    return true
  },
  parking(value) {
    if (!value) return 'Number of parking spaces is required'
    return true
  },
  description(value) {
    if (!value) return 'Description is required'
    if (value.length < 6) return 'Description should be at least 6 characters long'
    return true
  }
}

export const imageSchema = {
  picture(value) {
    if (!value) return 'Image is required'
    return true
  }
}
