<template>
  <section id="home-form" class="home-pylonform">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 wow fadeInLeft">
          <div class="el__item__thumb">
            <div class="dnfix__thumb -contain">
              <NuxtImg src="/images/pylon-form-img.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-6 wow fadeInRight">
          <header class="sc__header">
            <h2 class="sc__header__title">Pylon Form</h2>
            <div class="sc__header__excerpt mt-3 mt-md-5">
              <p>
                Pylon has 2 states,
                <span style="color: #00c05c">Static (Static)</span> and
                <span style="color: #00c05c">Dynamic (Morph)</span>:
              </p>
              <ul>
                <li>
                  In Static state, Pylon will take on the image of an energy
                  crystal, with the color depending on the support feature.
                </li>
                <li>
                  Pylon can switch into a
                  <span style="color: #00c05c">“Morph”</span> state, which means
                  it transforms into another game-compatible object (eg dragons
                  or spaceships etc).
                </li>
              </ul>
              <p>
                Each pylon can only morph into 1 object in different games. This
                object color is also specified by the crystal color.
              </p>
            </div>
          </header>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
