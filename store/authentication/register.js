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
  async submit({ state }) {
    // 1. Determine the welcome message
    const welcomeMessage =
      (await this.$i18n.locale) === 'en'
        ? 'Successfully registered!'
        : 'تم التسجيل بنجاح!'

    // 2. Create the user with email and password
    const { user } = await this.$fire.auth.createUserWithEmailAndPassword(
      state.fields.email,
      state.fields.password
    )

    // 3. Update the user's profile
    await user.updateProfile({
      displayName: state.fields.name,
      photoURL: 'placeimg.com/80/80/people'
    })

    // 4. Get the current user's data
    const data = await this.$fire.auth.currentUser

    // 5. Pick out the relevant data
    const relevantData = ['displayName', 'email', 'photoURL', 'uid'].reduce(
      (obj, key) => ({ ...obj, [key]: data[key] }),
      {}
    )

    // 6. Save the user's data to the 'users' collection
    await this.$fire.firestore.collection('users').add(relevantData)

    // 7. Show the success toast message
    await this.$toast.success(welcomeMessage)
  }
}

export const mutations = {
  setFieldValue(state, { key, value }) {
    state.fields[key] = value
  }
}
