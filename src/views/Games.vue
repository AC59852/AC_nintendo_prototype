<template>
  <section class="games page">
    <h1>Top Selling Games</h1>
      <div class="gamesContainer">
        <div class="gamesWrapper">
          <Game class="game" v-for="game in games" :key="game.id" :game="game" />
        </div>
        <div class="filters">
          <div class="recentGames">
            <h2 class="recentsTitle">Recently Added Games</h2>
              <div class="recentsWrapper">
                <div v-for="recent in recents" :key="recent.id">
                <img :src="'images/' + recent.image + '.jpg'" :alt="'Image for ' + recent.name">
                <h2>{{ recent.name }}</h2>
                <span>${{ recent.price }}</span>
              </div>
              </div>
            </div>
            <div class="filterWrapper">
            <GameFilter class="filter" v-for="filter in filters" :key="filter.id" :filter="filter"/>
          </div>
          </div>
        </div>
  </section>
</template>

<script>
import GameComponent from '@/components/GameComponent.vue';
import FilterComponent from '@/components/FilterComponent.vue';

export default {
  mounted() {
    document.querySelector("#app").classList.add("nintendoRed");
  },

  data() {
    return {
      filters: [
        {id: 1, name: 'Shop Games', icon: 'gameboy.svg'},
        {id: 2, name: 'Deals', icon: 'tag.svg'},
        {id: 3, name: 'Release Date', icon: 'download.svg'},
        {id: 4, name: 'Nintendo Online', icon: 'web.svg'},
        {id: 5, name: 'FAQ', icon: 'help.svg'},
        {id: 6, name: 'Support', icon: 'support.svg'},
      ],

      games: [
        {id: 1, name: 'Animal Crossing New Horizons', image: 'acnh_preview.png', price: '79.99'},
        {id: 2, name: 'Super Smash Bros. Ultimate', image: 'ssbu_preview.webp', price: '79.99'},
        {id: 3, name: 'Animal Crossing New Horizons', image: 'mariokart_preview.jpg', price: '79.99'},
        {id: 4, name: 'Animal Crossing New Horizons', image: 'botw_preview.jpg', price: '79.99'},
      ],

      recents: [
        {id: 1, name: 'Among us', image: 'amongus_preview', price: '4.99'},
        {id: 2, name: 'Stardew Valley', image: 'stardew_preview', price: '13.99'},
        {id: 3, name: 'Doom Eternal', image: 'doom_preview', price: '59.99'},
      ]
    }
  },

  components: {
    Game: GameComponent,
    GameFilter: FilterComponent
  }
}
</script>

<style>
</style>