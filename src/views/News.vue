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
</style>