<template>
  <section id="hardware">
      <div class="hardwareContainer">
          <div class="switchWrapper">
          <div class="switchText">
              <h1>Nintendo Switch</h1>
              <p>Fully Featured for home and on-the-go gaming.</p>
              <router-link :to="{name: 'Home'}">Learn More</router-link>
          </div>
          <div>
              <img src="images/switch.png" alt="Image for Nintendo Switch">
          </div>
          <div class="switchBtnCon">
                  <button v-for="button in buttons" :key="button.id"></button>
              </div>
        </div>
        <div class="addonsWrapper">
            <h2>Accessories</h2>
            <div class="addonsCon">
                <AddonFilter v-for="filter in filters" :key="filter.id" :filter="filter"/>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
import AddonFilter from '@/components/FilterComponent'
export default {
    mounted() {
        document.querySelector("#app").classList.add("nintendoRed");
    },

    data() {
        return {
            filters: [
                {id: 1, name: 'Joycons', icon: 'joy_con.png'},
                {id: 2, name: 'Nintendo Switch Lite', icon: 'switch_lite.png'},
                {id: 3, name: 'Pro Controllers', icon: 'pro_con.png'},
                {id: 4, name: `Amiibo's`, icon: 'amiibo.png'},
            ],

            buttons: [
                {id: 1},
                {id: 2},
                {id: 3},
                {id: 4},
                {id: 5},
                {id: 6},
            ]
        }
    },

    components: {
        AddonFilter: AddonFilter
    }
}
</script>

<style>

#hardware {
    width: 100%;
    margin: 0 auto;
}

.hardwareContainer {
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.switchWrapper {
    width: 50%;
    margin: 0 auto;
}

.switchText {
    margin: 9% 0 4% 12%;
}

.addonsWrapper {
    width: 40%;
    margin: 0 auto;
}

.switchText h1 {
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 2% 0;
    font-family: 'Heebo';
    position: relative;
}

.switchText h1::after {
    position: absolute;
    content: '299.99';
    left: 48%;
    font-size: 24px;
}

.switchText p {
    font-size: 18px;
    font-family: 'Heebo';
    font-weight: lighter;
}

.switchText a {
    font-family: 'Heebo';
    font-size: 16px;
    color: black;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    margin-top: 2%;
}

.switchWrapper img {
    width: 762px;
    margin: 0 auto;
    display: flex;
}

.switchBtnCon {
    display: flex;
    justify-content: space-evenly;
    width: 40%;
    margin: 10% auto 0;
}

.switchBtnCon button {
    width: 33px;
    height: 33px;
    border-radius: 50%;
    background-color: #EBEBEB;
    border: none;
    transition: background-color 0.5s ease;
    cursor: pointer;
}

.switchBtnCon button:hover {
    background-color: red;
}

.switchBtnCon button:focus {
    background-color: red;
    outline: 0;
}

.addonsWrapper h2 {
    margin-top: 11%;
    font-family: 'Heebo';
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5%;
}

.addonsCon {
    display: flex;
    flex-wrap: wrap;
}

.addonsCon div {
    width: 292px;
    height: 248px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.342);
    border-radius: 37px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4%;
    margin-right: 5%;
}

.addonsCon div img {
    width: 200px;
    height: 140px;
    margin: 0 auto;
}

.addonsCon div h2 {
    font-size: 17px;
    font-family: 'Heebo';
    font-weight: bold;
    margin-top: 4%;
}

.addonsCon div:nth-child(1) img { width: 129px; object-fit: contain; }

.addonsCon div:nth-child(2) img { width: 225px; object-fit: contain; }

.addonsCon div:nth-child(3) img { width: 180px; object-fit: contain; }

.addonsCon div:nth-child(4) img { width: 129px; height: 160px; }

</style>