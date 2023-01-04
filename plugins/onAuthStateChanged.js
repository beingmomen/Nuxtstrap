import { getAuth, onAuthStateChanged } from 'firebase/auth'
const fields = [
  'displayName',
  'email',
  'emailVerified',
  'phoneNumber',
  'photoURL',
  'uid'
]

export default async function (context) {
  const fireAuth = await getAuth()

  onAuthStateChanged(fireAuth, (user, i) => {
    if (user) {
      const selectedFields = Object.keys(user)
        .filter(key => fields.includes(key))
        .reduce((acc, key) => {
          acc[key] = user[key]
          return acc
        }, {})

      context.$auth.setUser(selectedFields)
    }
  })
}
