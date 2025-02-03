<template>
  <section id="home-pylon-effect" class="home-pyloneffect">
    <div class="home-pyloneffect__bg -bg-fix"></div>
    <div class="container">
      <header class="sc__header text-center wow fadeInUp">
        <h2 class="sc__header__title">Pylon Effect</h2>
      </header>

      <div class="el__tabs wow fadeInUp">
        <ul class="nav nav-tabs" id="pyloneffectTab" role="tablist">
          <li class="nav-item" v-for="item in BOX_DATA" :key="item.id">
            <button
              class="nav-link"
              :class="{ active: currentBox.id === item.id }"
              type="button"
              @click="changeBox(item)"
            >
              {{ item.title }}
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pyloneffectTabContent">
          <div
            v-for="item in BOX_DATA" :key="item.id"
            class="tab-pane fade show"
            :class="{ active: currentBox.id === item.id }"
            v-html="item.desc"
          >
          </div>
          <div
            class="tab-pane fade"
            id="pyloneffect02"
            role="tabpanel"
            aria-labelledby="pyloneffect02-tab"
          >
            <p>
              <strong>Static:</strong> Using Pylon’s “Static” state is like
              using a crystal to insert gems into a weapon.
            </p>
            <p>
              <strong>Morph:</strong> Use Pylon’s “Morph” state to transform
              into an enquivalent in-game item i.e spaceship in 3D spacehooter
              game or create a “fire bullet” effect for a spaceship.
            </p>
          </div>
          <div
            class="tab-pane fade"
            id="pyloneffect03"
            role="tabpanel"
            aria-labelledby="pyloneffect03-tab"
          >
            <p>Pylons can combine energies to create a new pylon</p>
          </div>
        </div>
      </div>
      <div class="el__box">
        <div class="row gx-1 gx-md-3 gx-lg-5">
          <div class="col-3 wow fadeInUp" data-wow-duration="1s">
            <div class="el__box__thumb ef--zoomin">
              <div class="dnfix__thumb -contain">
                <NuxtImg src="/images/home-pyloneffect-img-01.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-3 wow fadeInUp" data-wow-duration="1.5s">
            <div class="el__box__thumb ef--zoomin">
              <div class="dnfix__thumb -contain">
                <NuxtImg src="/images/home-pyloneffect-img-02.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-3 wow fadeInUp" data-wow-duration="2s">
            <div class="el__box__thumb ef--zoomin">
              <div class="dnfix__thumb -contain">
                <NuxtImg src="/images/home-pyloneffect-img-03.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-3 wow fadeInUp" data-wow-duration="2.5s">
            <div class="el__box__thumb ef--zoomin">
              <div class="dnfix__thumb -contain">
                <NuxtImg src="/images/home-pyloneffect-img-04.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="el__box2 wow fadeInUp">
        <div class="row gx-1 gx-md-3">
          <div class="el__col col-2">
            <div class="el__box2__thumb">
              <div class="dnfix__thumb -contain">
                <NuxtImg src="/images/home-pyloneffect-img2-01.png" alt="" />
              </div>
            </div>
          </div>
          <div class="el__col col-2">
            <div class="el__box2__thumb">
              <div class="dnfix__thumb -contain">
                <NuxtImg src="/images/home-pyloneffect-img2-02.png" alt="" />
              </div>
            </div>
          </div>
          <div class="el__col col-2">
            <div class="el__box2__thumb">
              <div class="dnfix__thumb -contain">
                <NuxtImg src="/images/home-pyloneffect-img2-03.png" alt="" />
              </div>
            </div>
          </div>
          <div class="el__col col-2">
            <div class="el__box2__thumb">
              <div class="dnfix__thumb -contain">
                <NuxtImg src="/images/home-pyloneffect-img2-04.png" alt="" />
              </div>
            </div>
          </div>
          <div class="el__col col-2">
            <div class="el__box2__thumb">
              <div class="dnfix__thumb -contain">
                <NuxtImg src="/images/home-pyloneffect-img2-05.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-2">
            <div class="el__box2__thumb">
              <div class="dnfix__thumb -contain">
                <NuxtImg src="/images/home-pyloneffect-img2-06.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="el__videos">
        <div class="row gx-2 gx-md-4">
          <div class="col-6">
            <div class="ratio ratio-3x4 -object-cover">
              <video
                id="video"
                preload="auto"
                autoplay
                muted
                loop
                playsinline
                poster=""
              >
                <source src="/images/home-video-1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div class="col-6">
            <div class="ratio ratio-3x4 -object-cover">
              <video
                id="video"
                preload="auto"
                autoplay
                muted
                loop
                playsinline
                poster=""
              >
                <source src="/images/home-video-2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const BOX_DATA = [{
    id: "1",
    title: 'Stat',
    desc: '<p>Players who equip Pylon will recevie buffs depend on the type of Pylon and the game being played</p>'
},{
    id: "2",
    title: 'Equip',
    desc: '<p><strong>Static:</strong> Using Pylon’s “Static” state is like using a crystal to insert gems into a weapon.</p><p><strong>Morph:</strong> Use Pylon’s “Morph” state to transform into an enquivalent in-game item i.e spaceship in 3D spacehooter game or create a “fire bullet” effect for a spaceship.</p>'
},{
    id: "3",
    title: 'combination',
    desc: '<p>Pylons can combine energies to create a new pylon</p>'
}]

const currentBox = ref(BOX_DATA[0])

const changeBox = (box: any) => {
    currentBox.value = box;
}
</script>
