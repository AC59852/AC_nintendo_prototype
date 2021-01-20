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

    #topNav {
        display: flex;
        width: 60%;
        margin: 70px 0 0 5%;
        font-family: Arial, Helvetica, sans-serif;
    }

    #topNav ul {
        display: flex;
        width: 60%;
    }

    #topNav ul li {
        margin: 3px 6% 0;
    }

    #topNav ul li:nth-child(4) {
        margin-right: 0;
    }

    #topNav ul li a {
        font-size: 15px;
        font-family: 'Heebo';
        color: #9E9E9E;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: bold;
        position: relative;
    }

    #topNav ul li a::after {
        position: absolute;
        content: '';
        height: 3px;
        width: 100%;
        background-color: transparent;
        top: 120%;
        left: 0;
        transition: all 0.4s ease;
        opacity: 0;
    }

    #topNav #search {
        border-radius: 100vw;
        border: 2px gray solid;
        box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
        padding: 8px 8px 8px 8px;
        width: 20%;
        margin-top: -4px;
        position: relative;
    }

    #topNav #search::placeholder {
        font-family: 'Heebo';
        font-size: 0.9rem;
        position: relative;
    }

#topNav ul li a.router-link-exact-active::after {
    top: 125% !important;
    background-color: #FF0000 !important;
    opacity: 1 !important;
}

</style>