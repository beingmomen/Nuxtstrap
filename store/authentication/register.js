import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export const state = () => ({
  fields: {
    name: null,
    email: null,
    password: null,
    passwordConfirm: null,
    phoneCode: '+20',
    phone: null
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
    console.warn('state', state.fields)
    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        state.fields.email,
        state.fields.password
      )
      console.warn('user', userCredential.user)

      // Update the user's display name and phone number.
      const user = userCredential.user
      await user.updateProfile({
        displayName: state.fields.name,
        phoneNumber: state.fields.phone
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
