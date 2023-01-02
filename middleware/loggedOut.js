export default function ({ redirect, $auth }) {
  $auth.$state.loggedIn && redirect('/panel')
}
