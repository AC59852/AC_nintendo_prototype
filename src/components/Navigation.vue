<template>
  <nav id="topNav">
      <ul>
          <li><router-link v-on:click.native="changeBck()" :to="{name: 'Home'}">Home</router-link></li>
          <li><router-link v-on:click.native="changeBck()" :to="{name: 'Games'}">Games</router-link></li>
          <li><router-link v-on:click.native="changeBck()" :to="{name: 'Hardware'}">Hardware</router-link></li>
          <li><router-link v-on:click.native="changeBck()" :to="{name: 'News'}">News &#38; Events</router-link></li>
      </ul>
    <input type="search" name="search" id="search" placeholder="Search">
  </nav>
</template>

<script>
export default {
    methods: {
        changeBck() {
            document.querySelector("#app").classList.add("nintendoRed");
        }
    }

}
</script>

<style>
    .nintendoRed {
        background: linear-gradient(114deg, rgb(236, 236, 236) 50%, rgb(228, 0, 15) 50%) !important;
    }

</style>