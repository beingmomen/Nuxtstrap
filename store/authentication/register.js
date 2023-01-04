import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'

export const state = () => ({
  fields: {
    name: null,
    email: null,
    password: null,
    passwordConfirm: null,
    phoneCode: '+20',
    phone: null,
    url: null
  }
})

export const getters = {
  fields: state => state.fields
}

export const actions = {
  async submit({ state, dispatch }) {
    // await this.$axios.$post('/users/signup', state.fields)
    // const welcomeMessage =
    //   (await this.$i18n.locale) === 'en'
    //     ? 'successfully registered'
    //     : 'تم التسجيل بنجاح'
    // await this.$toast.success(welcomeMessage)

    await dispatch('firebaseSubmit')
  },
  async firebaseSubmit({ state }) {
    try {
      const auth = getAuth()
      await createUserWithEmailAndPassword(
        auth,
        state.fields.email,
        state.fields.password
      )

      await updateProfile(auth.currentUser, {
        phoneNumber: state.fields.phone,
        displayName: state.fields.name,
        photoURL: state.fields.url || 'https://placeimg.com/80/80/people'
      })
    } catch (error) {
      console.warn('error', error)
    }
  }
}

export const mutations = {
  setFieldValue(state, { key, value }) {
    state.fields[key] = value
  }
}
