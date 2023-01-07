export default function ({ $fire, $auth }) {
  const relevantDataKeys = ['displayName', 'email', 'photoURL', 'uid']

  // eslint-disable-next-line arrow-parens
  $fire.auth.onAuthStateChanged(user => {
    if (user) {
      // eslint-disable-next-line no-unused-vars
      const relevantData = relevantDataKeys.reduce(
        (obj, key) => ({
          ...obj,
          [key]: user[key]
        }),
        {}
      )

      $auth.setUser(relevantData)
    } else {
      // $auth.setUser(null)
    }
  })
}
