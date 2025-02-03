<template>
  <section id="home-power-up-players" class="home-power -bg-fix">
    <div class="container">
      <header class="sc__header text-center">
        <h2 class="sc__header__title wow fadeInLeft">Power Up Players</h2>
        <div class="sc__header__excerpt wow fadeInRight">
          Pylon Network is a network of energy tower that “ power up” will
          players as they play games and equip Pylon in
          <strong>GateGame Metaverse.</strong><br />Power up details will depend
          on the type and quality of the equipped Pylon.
        </div>
      </header>

      <div class="el__tabs wow fadeInUp">
        <div class="row">
          <div class="col-md-7 col-lg-6 order-md-2">
            <div class="tab-content" id="powerTabContent">
              <div
                v-for="power in POWER_DATA"
                class="tab-pane fade show"
                :class="{active: power.id === currentPower.id}"
                :id="power.id"
                :key="power.id"
                role="tabpanel"
                aria-labelledby="power01-tab"
              >
                <div class="el__tab__thumb">
                  <NuxtImg :src="power.img" alt="" style="width: 100%;" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-5 col-lg-6">
            <div class="nav-tabs__wrapper">
              <ul class="nav nav-tabs" id="powerTab" role="tablist">
                <li class="nav-item" v-for="power in POWER_DATA" :key="power.id">
                  <button
                    class="nav-link"
                    :class="{active: power.id === currentPower.id}"
                    :id="power.id + '-tab'"
                    type="button"
                    @click="changePower(power)"
                  >
                    <div class="el__tabs__thumb dnfix__thumb -contain">
                      <NuxtImg :src="power.pylon" alt="" />
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p class="text--vetircal">pylon crystal</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const POWER_DATA = [
  {id: 'power01', img: '/images/home-pylon-img2-04.png', pylon: '/images/home-pylon-img-01.png'},
  {id: 'power02', img: '/images/home-pylon-img2-01.png', pylon: '/images/home-pylon-img-02.png'},
  {id: 'power03', img: '/images/home-pylon-img2-05.png', pylon: '/images/home-pylon-img-03.png'},
  {id: 'power04', img: '/images/home-pylon-img2-02.png', pylon: '/images/home-pylon-img-04.png'},
  {id: 'power05', img: '/images/home-pylon-img2-06.png', pylon: '/images/home-pylon-img-05.png'},
  {id: 'power06', img: '/images/home-pylon-img2-03.png', pylon: '/images/home-pylon-img-06.png'},
]

const currentPower = ref(POWER_DATA[0])

const changePower = (power: any) => {
  currentPower.value = power
}
</script>
