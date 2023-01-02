export const state = () => ({})

export const getters = {}

export const actions = {
  displayErrors({ rootState }, payload) {
    const errors = []
    Object.values(payload).forEach(value => errors.push(...value))
    errors.forEach((el, i) => {
      const [errorLtr, errorRtl] = el.split('#&&')
      const errorMessage = rootState.isRTL ? errorRtl : errorLtr
      this.$toast.error(`${errorMessage}`)
    })
  },
  handleFormData(context, payload) {
    const formData = new FormData()
    for (const [key, value] of Object.entries(payload)) {
      if (Array.isArray(value)) {
        if (value.every(item => item instanceof File)) {
          value.forEach((val, i) => {
            formData.append(key, val)
          })
        } else if (value.every(item => typeof item === 'object')) {
          value.forEach((row, i) => {
            for (const [innerKey, innerValue] of Object.entries(row)) {
              formData.append(`${key}[${i}][${innerKey}]`, innerValue)
            }
          })
        } else {
          value.forEach((val, i) => {
            formData.append(key, val)
          })
        }
      } else {
        formData.append(key, value)
      }
    }
    return formData
  }
}

export const mutations = {}
