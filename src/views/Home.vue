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
          <img :src="'./images/' + currentGame.image + '.png'" :alt="'Picture for the game ' + currentGame.title" :class="'gameImg' + currentGame.id">
        </div>
      </div>
      <div class="homeBtns">
        <div v-for="game in games" class="gameBtn" :key="game.id" @click="changeGame(game);" :style="{backgroundColor: game.color}"></div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

  created() {
    this.currentGame = this.games[0]
  },

  data() {
    return {
      isActive: false,

      games: [
        {title: 'Animal Crossing: New Horizons', para: 'New to Animal Crossing: New Horizons? Come get the lay of the land and learn what to expect when you set out to create your own island paradise. If you’re an island life veteran already, we hope you will share this video with newcomers and welcome them with open arms!', id: 1, color: '#5F96D2', image: 'acnh', bckColour: 'linear-gradient(114deg, rgb(236, 236, 236) 50%, rgba(90,171,255,1) 50%)'},

        {title: 'Super Mario Odyssey', para: 'Explore incredible places far from the Mushroom Kingdom as you join Mario and his new ally Cappy on a massive, globe-trotting 3D adventure. Use amazing new abilities—like the power to capture and control objects, animals, and enemies—to collect Power Moons so you can power up the Odyssey airship and save Princess Peach from Bowser’s wedding plans!', id: 2, color: '#D25F5F', image: 'smo', bckColour: 'linear-gradient(114deg, rgb(236, 236, 236) 50%, rgba(210, 96, 96,1) 50%)'},

        {title: 'Super Smash Bros. Ultimate', para: 'Gaming icons clash in the ultimate brawl you can play anytime, anywhere! Smash rivals off the stage as new characters Simon Belmont and King K. Rool join Inkling, Ridley, and every fighter in Super Smash Bros. history. Enjoy enhanced speed and combat at new stages based on the Castlevania series, Super Mario Odyssey, and more!', id: 3, color: '#FFC819', image: 'ssbu', bckColour: 'linear-gradient(114deg, rgb(236, 236, 236) 50%, rgba(255, 200, 25,1) 50%)'},

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
      }, 780);

      document.querySelector(".currentGame").classList.add("testAnim");

      setTimeout(() => {
        document.querySelector(".currentGame").classList.remove("testAnim");
      }, 1600)
      }
    }
  }
}
</script>

<style>

  .page {
    font-family: Arial, Helvetica, sans-serif;
  }

  .currentGame {
    display: flex;
    width: 85%;
    margin: 10% auto 0;
    height: 470px;
    position: relative;
  }

  .testAnim {
    clip-path: inset( -7.5vw -200vw -200vw -100vw );
    animation: textAnim 1.6s ease;
  }

  @keyframes textAnim {
    0% {transform: translateY(0); opacity: 1;}
    50% {transform: translateY(-20%); opacity: 0;}
    100% {transform: translateY(0); opacity: 1;}
  }

  .currentGameText {
    width: 50%;
    margin-right: 0%;
  }

  .currentGameText h1 {
    text-transform: uppercase;
    font-size: 66px;
    font-weight: bold;
    font-family: 'Heebo';
  }

  .currentGameText p {
    width: 80%;
    margin: 5% 0 8%;
    font-size: 15px;
    line-height: 24px;
    font-family: 'Heebo';
  }

  .currentGameText button {
    width: 18%;
    margin-right: 5%;
    background-color: transparent;
    border: none;
    padding: 2% 0 2%;
    font-size: 15px;
    border-radius: 8px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
  }

  .currentGameText button:nth-child(1) {
    color: white;
    box-shadow: 0 0 10px 2px rgba(75, 75, 75, 0.493);
  }

  .currentGameImg {
    width: 50%;
    display: flex;
    align-items: flex-start;
  }

  .currentGameImg2, .currentGameImg3, .currentGameImg4 {
    align-items: flex-end;
    margin-top: 45%;
  }

  .currentGameImg img {
    width: 125%;
    margin-top: -5%;
    display: flex;
  }

  .currentGameImg3 img {
    width: 100%;
    margin-left: 15%;
  }

  .currentGameImg4 img {
    margin-left: 5%;
    width: 100%;
  }

  .homeButtonCon {
    margin-top: 0;
  }

  .homeBtns {
    display: flex;
    width: 50%;
    margin-top: 3%;
    margin-left: 10%;
  }

  .gameBtn  {
    transform: skew(-40deg);
    width: 15%;
    border-radius: 4px;
    margin: 0 0.4%;
    height: 40px;
    max-width: 150px;
    cursor: pointer;
  }
</style>
