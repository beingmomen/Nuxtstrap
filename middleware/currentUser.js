export default function ({ $fire, $auth }) {
  const relevantDataKeys = ['displayName', 'email', 'photoURL', 'uid']

  const currentUser = $fire.auth.currentUser

  console.warn('currentUser', currentUser)

  // eslint-disable-next-line arrow-parens
  $fire.auth.onAuthStateChanged(user => {
    console.warn('user', user)
    if (user) {
      const relevantData = relevantDataKeys.reduce(
        (obj, key) => ({
          ...obj,
          [key]: user[key]
        }),
        {}
      )

      console.warn('relevantData', relevantData)

      $auth.setUser(relevantData)
    } else {
      $auth.setUser(null)
    }
  })
}
