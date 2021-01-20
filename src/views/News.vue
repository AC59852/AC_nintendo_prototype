<template>
  <section id="news">
      <h1>Latest News &amp; Events</h1>
      <div class="newsContainer">
          <div v-for="event in events" :key="event.id">
              <img :src="'images/news/' + event.image + '.jpg'" :alt="'Image for ' + event.title">
              <h2>{{ event.title }}</h2>
              <h3>{{ event.date }}</h3>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    mounted() {
    document.querySelector("#app").classList.add("nintendoRed");
  },
  
    data() {
        return {
            events: [
                {id: 1, image: 'sm3d', title: `Bowser's Fury: Super Mario 3D World`, date: '1/12/2021'},
                {id: 2, image: 'tetris', title: '19th Maximus Cup Event: Tetris 99', date: '1/06/2021'},
                {id: 3, image: 'mk8', title: `New Year's 2021 Tour`, date: '12/31/2020'},
                {id: 4, image: 'ctr', title: 'Crash Team Racing: Nitro-Fueled', date: '12/23/2020'},
                {id: 5, image: 'ssbu_news', title: 'Sephiroth Joins the Battle', date: '12/17/2020'},
                {id: 6, image: 'mk_rosalina', title: 'Rosalina Mario Kart Tour Event', date: '12/09/2020'},
                {id: 7, image: 'loz_hw', title: 'Hyrule Warriors: Age of Calamity', date: '11/29/2020'},
                {id: 8, image: 'acpc', title: 'Animal Crossing: Pocket Camp Update', date: '11/16/2020'},
            ]
        }
    }
}
</script>

<style>
    #news {
        width: 100%;
        margin: 0 auto;
    }

    #news h1 {
        font-size: 40px;
        font-family: 'Heebo';
        font-weight: bold;
        text-transform: uppercase;
        margin: 4.5% 0 2% 9.5%;
    }

    .newsContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 88%;
        margin: 0 auto;
    }

    .newsContainer div {
        width: 320px;
        height: 285px;
        text-align: center;
        margin-bottom: 2%;
    }

    .newsContainer div img {
        width: 100%;
        border-radius: 28px;
        object-fit: cover;
        object-position: 0 15%;
        height: 210px;
        box-shadow: 4px 5px 16px 0 rgba(0, 0, 0, 0.342);
        transition: transform 0.2s ease;
        cursor: pointer;
    }

    .newsContainer div img:hover {
    transform: scale(1.05);
  }

    .newsContainer div h2, .newsContainer div h3 {
        margin: 6% 0 0;
        font-family: 'Heebo';
        font-weight: bold;
        font-size: 18px;
        text-transform: capitalize;
    }

    .newsContainer div h3 {
        color: #737373;
        font-size: 20px;
        margin-top: 3%;
    }
</style>