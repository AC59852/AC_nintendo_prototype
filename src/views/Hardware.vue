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

</style>