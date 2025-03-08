<template>
  <page>
    <div class="player-wrapper">
      <video src="/bp-shutdown.mp4" autoplay muted playsinline loop ref="video" class="fullscreen-video"></video>
    </div>
    <section class="presentation">
      <span v-if="disclaimer" class="disclaimer">Site criado por fã, sem associação com a empresa YG Entertainment ou com o grupo Blackpink</span>
      <section v-if="!disclaimer" class="description"><span>A persistência leva ao sucesso, conheça a história do maior Girl Group feminino do Kpop</span>
        <h1><span>Black</span><span>pink</span></h1></section>
    </section>
  </page>
  <page>
    <slider/>
  </page>
  <page>
    <div></div>
  </page>
</template>

<style>
.player-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* função ele corta o tamanho definido de acordo*/
  pointer-events: none; /* Desabilita a interação do mouse */
  z-index: -1;
}

.fullscreen-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: .1;
}

.presentation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.presentation .disclaimer {
  display: block;
  width: auto;
  font-size: 18pt;
  text-align: center;
  transition: all .2s ease-in-out; /* da uma suavidade na animação*/
  animation-name: disclaimer;
  animation-duration: 5s;
  opacity: 0;
  visibility: hidden;
}

.presentation .description {
  text-align: center;
  display: block;
  transition: all 2s ease-in-out;

}

.presentation .description span {
  font-size: 8pt;
  text-transform: uppercase;
  color: #c3c3c3;
}

.presentation .description h1, .presentation .description h1 span {
  font-size: 25pt;
  text-transform: uppercase;
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.presentation .description h1 span:nth-child(1) /* pega a primeira tag span */
{
  color: pink;
  font-style: italic;
  font-weight: 800;
  letter-spacing: 10px;
  font-size: 22pt;
  animation: animationblack 3s infinite;

}

.presentation .description h1 span:nth-child(2) {
  color: rgb(0, 0, 0);
  font-weight: 900;
  letter-spacing: 10px;
  animation: animationpink 3s infinite;
}

@keyframes animationblack {
  0% {
    color: pink;
  }

  25% {
    color: black;
  }
  50% {
    color: pink;
  }

  75% {
    color: black;
  }

}

@keyframes animationpink {
  0% {
    color: black;
  }

  25% {
    color: pink;
  }
  50% {
    color: black;
  }

  75% {
    color: pink;
  }
}


@keyframes disclaimer {
  0% {
    visibility: visible;
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: .5;
  }
  100% {
    opacity: 0;
    visibility: hidden;

  }
}
</style>

<script>
import page from '~/components/page.vue';
import slider from '~/components/slider.vue';

export default {
  name: 'appLayout',
  components: {
    page,
    slider
  },
  data() { 
    const config = useRuntimeConfig()
    return {
      disclaimer: true,
      videoIds:[],
      config 
    
    }
  },
  methods: {
    presentation() {
      setTimeout(() => {
        this.disclaimer = false
      }, 5000)
    }
  },
  async mounted() { console.log((await fetch(this.config.public.env.temp)).json())
    this.presentation()
  }
}
</script>

  