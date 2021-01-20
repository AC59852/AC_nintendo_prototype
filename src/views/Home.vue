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
      }, 780);

      document.querySelector(".currentGame").classList.add("testAnim");

      setTimeout(() => {
        document.querySelector(".currentGame").classList.remove("testAnim");
      }, 1600)
      }
    },
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
    margin: 8% auto 0;
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

  .currentGameImg2, .currentGameImg3{
    align-items: flex-end;
    margin-top: 45%;
  }

  .currentGameImg4 {
    align-items: flex-end;
    margin-top: 35%;
    position: relative;
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
    width: 100%;
    position: absolute;
    left: 12%;
  }

  .homeButtonCon {
    margin-top: 0;
  }

  .homeBtns {
    width: 50%;
    margin-top: 3%;
    margin-left: 10%;
  }

  .homeBtns h2 {
    margin-bottom: 2%;
    font-family: 'Heebo';
    font-weight: bold;
  }

  .homeBtnWrapper {
    display: flex;
  }

  .gameBtn:nth-child(1) {
    margin-left: 0;
  }

  .gameBtn  {
    border-radius: 1000vw;
    width: 35px;
    margin: 0 11px;
    height: 35px;
    max-width: 150px;
    cursor: pointer;
    background-color: rgba(128, 128, 128, 0.315);
    transition: background-color 0.3s ease;
    border: none;
  }

  .gameBtn:focus {
    outline: 0;
  }


  /* Wish there was a better way through JS, but dymanic changing doesnt work */
  
  .gameBtn:nth-child(1):hover, .gameBtn:nth-child(1):focus {background-color:#FFC819 !important;}
  .gameBtn:nth-child(2):hover, .gameBtn:nth-child(2):focus {background-color:#D25F5F !important;}
  .gameBtn:nth-child(3):hover, .gameBtn:nth-child(3):focus {background-color:#5F96D2 !important;}
  .gameBtn:nth-child(4):hover, .gameBtn:nth-child(4):focus {background-color:#0B9309 !important;}
</style>
