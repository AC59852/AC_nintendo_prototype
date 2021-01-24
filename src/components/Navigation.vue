<template>
  <nav id="topNav">
      <ul>
          <li><router-link v-on:click.native="changeBck(); setBuy()" :to="{name: 'Home'}">Home</router-link></li>
          <li><router-link v-on:click.native="changeBck(); setLogo()" :to="{name: 'Games'}">Games</router-link></li>
          <li><router-link v-on:click.native="changeBck(); setLogo()" :to="{name: 'Hardware'}">Hardware</router-link></li>
          <li><router-link v-on:click.native="changeBck(); setLogo()" :to="{name: 'News'}">News &#38; Events</router-link></li>
      </ul>
    <input type="search" name="search" id="search" placeholder="Search">
    <div class="logoCon">
        <div class="logoWrapper">
            <img class="logo" src="/images/logo.svg" alt="Nintendo Logo">
            <button class="buyBtn">Buy</button>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
    mounted() {
        document.querySelector(".buyBtn").style.opacity = 1
    },
    
    methods: {
        changeBck() {
            document.querySelector("#app").classList.add("nintendoRed");
        },

        setBuy() {
            document.querySelector(".buyBtn").style.opacity = 1

            document.querySelector(".logo").classList.remove("opacityToggle");
        },

        setLogo() {
            document.querySelector(".logo").classList.add("opacityToggle");

            document.querySelector(".buyBtn").style.opacity = 0
        }
    }

}
</script>

<style>
    .nintendoRed {
        background: linear-gradient(114deg, rgb(236, 236, 236) 50%, rgb(228, 0, 15) 50%) !important;
    }

    .logoCon {
        position: fixed;
        right: 12%;
    }

    .logoWrapper {
        position: relative;
    }

    .logoCon img {
        position: absolute;
        transition: opacity 0.5s ease;
        opacity: 0;
        top: 0;
        right: 0;
        width: 150px;
        height: 40px;
    }

    .buyBtn {
        transition: opacity 0.5s ease;
        opacity: 0;
        border-radius: 10px;
        background-color: red;
        border: none;
        width: 90px;
        height: 38px;
        color: white;
        font-size: 16px; 
        font-weight: bold;
        font-family: 'Heebo';
        box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.185);
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }

    .opacityToggle {
        opacity: 1 !important;
    }

</style>