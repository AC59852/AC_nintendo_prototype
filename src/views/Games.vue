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
  .games {
    width: 100%;
    margin: 0 auto 0;
  }

  .games h1 {
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 3% 0 2% 6.5%;
    font-family: 'Heebo';
  }

  .gamesContainer {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .gamesWrapper {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-left: -2.5%;
  }

  .game {
    width: 42%;
    margin-bottom: 4%;
    text-align: center;
  }

  .game img {
    width: 100%;
    border-radius: 28px;
    height: 220px;
    object-fit: cover;
    box-shadow: 4px 5px 16px 0 rgba(0, 0, 0, 0.342);
    transition: transform 0.2s ease;
  }

  .game img:hover {
    transform: scale(1.05);
  }

  .game h2, .game span {
    font-family: 'Heebo';
    font-size: 16px;
  }

  .game h2 {
    margin: 6% 0 3%;
    font-weight: bold;
  }

  .game span {
    font-weight: bold;
  }

  .filters {
    display: flex;
    width: 40%;
    flex-direction: column;
  }

  .recentGames {
    margin-bottom: 4%;
  }

  .recentsTitle {
    font-size: 40px;
    font-family: 'Heebo';
    font-weight: bold;
    margin-top: -10.5%;
    margin-left: 4%;
    margin-bottom: 5%;
    position: relative;
    text-transform: uppercase;
  }

  .recentsTitle::after {
    position: absolute;
    content: '';
    background-image: url('../../public/images/arrow.svg');
    width: 4%;
    left: 73%;
    background-repeat: no-repeat;
    height: 90%;
  }

  .recentsWrapper {
    display: flex;
    justify-content: space-evenly;
  }

  .recentsWrapper div {
    width: 200px;
  }

  .recentsWrapper div img {
    width: 100%;
    height: 125px;
    object-fit: cover;
    border-radius: 30px;
    box-shadow: 10px 9px 25px 0px rgba(0, 0, 0, 0.315);
    transition: transform 0.2s ease;
  }

  .recentsWrapper div h2, .recentsWrapper div span {
    font-size: 16px;
    font-family: 'Heebo';
    font-weight: bold;
    text-align: center;
    display: block;
  }

  .recentsWrapper div img:hover {
    transform: scale(1.05);
  }

  .recentGames div h2 {
    margin: 20px 0 10px;
  }

  .filterWrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    margin-left: 0;
    align-content: flex-start;
  }

  .filter {
    width: 195px;
    height: 168px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.342);
    border-radius: 37px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4%;
  }

  .filter img {
    width: 40%;
    display: flex;
    margin-bottom: 10%;
  }

  .filter h2 {
    font-weight: bold;
    font-family: 'Heebo';
    font-size: 18px;
  }
</style>