<template>
  <div>
      <img :src="'./images/' + game.image + '.png'" :alt="'image for ' + game.name">
      <h2>{{ game.name }}</h2>
      <span>${{ game.price }}</span>
  </div>
</template>

<script>
export default {
    props: ['game', 'id']
}
</script>

<style>

</style>