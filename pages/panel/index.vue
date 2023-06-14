<template>
  <div>
    <b-row>
      <b-col
        v-for="(list, i) in sortedLists"
        :key="i"
        lg="3"
        sm="6"
      >
        <UtilsTheStatsCard
          :statistic="list.count"
          :statistic-title="list.name"
          :icon="list.icon"
          :type="list.type"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  layout: 'panel',
  async asyncData({ $axios }) {
    const { data } = await $axios.$get('/collections')
    const lists = data.collections.map((list, i) => {
      const mapping = {
        allUsers: { name: 'allUsers', icon: 'users', type: true },
        users: { name: 'users', icon: 'users', type: false },
        admins: { name: 'admins', icon: 'users-gear', type: true },
        categories: { name: 'categories', icon: 'grid', type: false }
      }
      return { ...list, ...mapping[list.name] }
    })
    const sortedLists = [
      ...lists.filter(list => list.name === 'allUsers'),
      ...lists.filter(list => list.name === 'admins'),
      ...lists.filter(list => list.name === 'users'),
      ...lists.filter(
        list =>
          list.name !== 'allUsers' &&
          list.name !== 'admins' &&
          list.name !== 'users'
      )
    ]
    return {
      sortedLists
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>
