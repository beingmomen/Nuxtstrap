<template>
  <div
    class="container d-flex align-items-center justify-content-center vh-100"
  >
    <b-button class="mx-2" :to="localePath('/panel')">
      panel
    </b-button>
    <b-button :to="localePath('/login')">
      login
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
