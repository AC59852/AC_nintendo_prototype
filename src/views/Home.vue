<template>
  <section class="home page">
    <div class="homeContainer">
      <div class="currentGame">
        <div class="currentGameText">
          <h1>{{ currentGame.title }}</h1>
          <p>{{ currentGame.para }}</p>
          <div class="currentGameBtns">
            <button :style="{backgroundColor: currentGame.color}">Play Now</button>
            <button>Learn More</button>
          </div>
        </div>
        <div :class="'currentGameImg currentGameImg' + currentGame.id">
          <img :src="'./images/' + currentGame.image + '.webp'" :alt="'Picture for the game ' + currentGame.title" :class="'gameImg' + currentGame.id">
        </div>
      </div>
      <div class="homeBtns">
        <h2>More Games:</h2>
        <div class="homeBtnWrapper">
          <button v-for="game in games" class="gameBtn" :key="game.id" @click="changeGame(game);"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

  created() {
    this.currentGame = this.games[0];
  },

  mounted() {
    let background = document.querySelector("#app");

    background.style.backgroundImage = this.currentGame.bckColour;
  },

  data() {
    return {
      isActive: false,

      games: [
        {title: 'Animal Crossing: New Horizons', para: 'Escape to a deserted island and create your own paradise as you explore, create, and customize in the Animal Crossing: New Horizons game. Your island getaway has a wealth of natural resources that can be used to craft everything from tools to creature comforts.', id: 1, color: '#FFC819', image: 'acnh', bckColour: 'linear-gradient(114deg, rgb(236, 236, 236) 50%, rgba(255, 200, 25,1) 50%)'},

        {title: 'Super Mario Odyssey', para: 'Explore incredible places far from the Mushroom Kingdom as you join Mario and his new ally Cappy on a massive, globe-trotting 3D adventure. Use amazing new abilities—like the power to capture and control objects, animals, and enemies—to collect Power Moons so you can power up the Odyssey airship and save Princess Peach from Bowser’s wedding plans!', id: 2, color: '#D25F5F', image: 'smo', bckColour: 'linear-gradient(114deg, rgb(236, 236, 236) 50%, rgba(210, 96, 96,1) 50%)'},

        {title: 'Legend of Zelda: Breath of the Wild', para: 'Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure.', id: 3, color: '#5F96D2', image: 'ssbu', bckColour: 'linear-gradient(114deg, rgb(236, 236, 236) 50%, rgba(90,171,255,1) 50%)'},

        {title: 'Luigis Mansion 3', para: 'Luigi’s invited to the towering Last Resort hotel, but when Mario and friends go missing, our green-clad hero will have to conquer his fears to save them! Slam, blow away, and vacuum up ghosts with the all-new Poltergust G-00, and join forces with Gooigi to overcome the puzzling contraptions and mischievous boss on each themed floor. And that’s just the Last Resort. Enter the ScareScraper for 8-player local wireless or online co-op gameplay.', id: 4, color: '#0B9309', image: 'lm3', bckColour: 'linear-gradient(114deg, rgb(236, 236, 236) 50%, rgba(11, 147, 9,1) 50%)'}
      ],

      currentGame: {}
    }
  },

  methods: {
    changeGame(info) {
      let background = document.querySelector("#app");

      if (document.querySelector(".currentGame").classList.contains("testAnim")) {
        return
      } else {
        setTimeout(() => {
        this.currentGame = info;

        background.style.backgroundImage = this.currentGame.bckColour;
        background.classList.remove("nintendoRed");
      }, 850);

      document.querySelector(".currentGame").classList.add("testAnim");

      setTimeout(() => {
        document.querySelector(".currentGame").classList.remove("testAnim");
      }, 1800)
      }
    },
  }
}
</script>

<style>
</style>
