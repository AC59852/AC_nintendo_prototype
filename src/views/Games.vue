<template>
  <section class="games page">
    <h1>Top Selling Games</h1>
      <div class="gamesContainer">
        <div class="gamesWrapper">
          <Game class="game" v-for="game in games" :key="game.id" :game="game" />
        </div>
        <div class="filterWrapper">
          <GameFilter class="filter" v-for="filter in filters" :key="filter.id" :filter="filter"/>
        </div>
      </div>
  </section>
</template>

<script>
import GameComponent from '@/components/GameComponent.vue';
import FilterComponent from '@/components/FilterComponent.vue';

export default {
  data() {
    return {
      filters: [
        {id: 1, name: 'Shop Games', icon: 'filterTag'},
        {id: 2, name: 'Deals', icon: 'filterTag'},
        {id: 3, name: 'Release Date', icon: 'filterTag'},
        {id: 4, name: 'Alphabetical', icon: 'filterTag'},
      ],

      games: [
        {id: 1, name: 'Animal Crossing New Horizons', image: 'acnh_preview', price: '79.99'},
        {id: 2, name: 'Animal Crossing New Horizons', image: 'acnh_preview', price: '79.99'},
        {id: 3, name: 'Animal Crossing New Horizons', image: 'acnh_preview', price: '79.99'},
        {id: 4, name: 'Animal Crossing New Horizons', image: 'acnh_preview', price: '79.99'},
      ],
    }
  },

  components: {
    Game: GameComponent,
    GameFilter: FilterComponent
  }
}
</script>

<style>
  .games h1 {
    font-size: 3rem;
    font-weight: bold;
    margin: 3% 0 2% 9%;
  }
  .gamesContainer {
    display: flex;
  }

  .gamesWrapper {
    width: 51%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
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

  .filterWrapper {
    display: flex;
    flex-wrap: wrap;
    width: 30%;
    justify-content: space-evenly;
    margin-left: auto;
    align-content: flex-start;
  }

  .filter {
    width: 200px;
    height: 200px;
    box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.342);
    border-radius: 37px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 6%;
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