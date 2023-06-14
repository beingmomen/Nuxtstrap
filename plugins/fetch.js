export default async function ({ $axios, store, app }) {
  // get All Countries
  const res = await $axios.$get('https://restcountries.com/v3.1/all')
  const countries = res.map((x, i) => ({
    ...x,
    display: `${x.name.common} - ${x.translations.ara.common}`,
    phoneCode: x.idd.root && `${x.idd.root}${x.idd.suffixes[0]}`
  }))
  store.commit('global/setList', { key: 'countries', value: countries })

  // get All Activities
  // const activities = await $axios.$get('activities')
  // store.commit('global/setList', {
  //   key: 'activities',
  //   value: activities.data.data
  // })
}
