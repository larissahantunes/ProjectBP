<template>
  <section class="slider-area" ref="slider">
    <section class="slider-data">
      <span ref="title" class="title"></span>
      <span ref="description" class="description"></span>
    </section>
    <section class="slider-controls">
      <button :class="{
        'btn': true,
        'no-visible': !currentIndex
      }" @click="prev()">
        <span v-text="'<'"></span>
      </button>
      <button :class="{
        'btn': true,
        'no-visible': currentIndex === 3
      }" @click="next()">
        <span v-text="'>'"></span>
      </button>
    </section>
    <ul ref="sliderContainer" class="slider">
      <li
          v-for="item in images"
          :key="item.key"
          class="slider-item"
          :style="`background-image: url(${item.link});`"
          @click="showImage(item)"
          :ref="item.key"
      >
        <span class="title">
          {{ item.title }}
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
    export default {
  name: 'AppLayout',
  data () {
    return {
      active: null,
      currentIndex: 0,
      images: [
        {
          key: 0,
          link: 'image/image1.webp',
          title: 'Jennie',
          description: 'Kim Jennie (hangul: 김제니) hanja: 金珍妮; rr: Kim Jeni; MR: Kim Jeni, Seul, 16 de janeiro de 1996 (28 anos). referenciada apenas como Jennie (hangul: 제니), é uma cantora e atriz sul-coreana. É integrante do grupo BLACKPINK, formado pela YG Entertainment em 2016. Em 2018, fez sua estreia como artista solo com o single "SOLO". Em 2023, estreou como atriz sob o nome artístico Jennie Ruby Jane na série da HBO, The Idol.'
        },
        {
          key: 1,
          link: 'image/image2.webp',
          title: 'Jisoo',
          description: 'Kim Ji-soo (Hangul: 김지수) nascida em 3 de janeiro de 1995 (22 anos) em Gunpo , Província de Gyeonggi , Coreia do Sul, mais conhecida  como Jisoo , é uma cantora e atriz sul-coreana. Ela é a integrante mais velha do BLACKPINK . Ela também é mundialmente conhecida como a "mãe do grupo" e "líder não oficial" devido às suas melhores habilidades de liderança e personalidade atenciosa. Jisoo se juntou à YG Entertainment como trainee em julho de 2011. Em 1 de fevereiro de 2017.'
        },
        {
          key: 2,
          link: 'image/image3.webp',
          title: 'Lisa',
          description: 'Lalisa Manobal nome de nascimento: Pranpriya Manobal (ลลิษา มโนบาล ou ปราณปริยา มโนบาล) nascida em 27 de março de 1997 (27 anos) em Bangkok, Tailândia) mais conhecida pelo seu nome artístico, Lisa , é uma rapper, cantora, dançarina e modelo tailandesa, atualmente baseada na Coreia do Sul. Ela é a integrante mais jovem do BLACKPINK.'
        },
        {
          key: 3,
          link: 'image/image4.webp',
          title: 'Rosé',
          description: 'Park Chaeyoung  (박채영) , seu nome em inglês Roseanne Park entretanto mais comprimentada pelo seu nome artístico Rosé (로제) (nascida em 11 de fevereiro de 1997 em Auckland, Nova Zelândia) ou Rosé , é a vocalista principal e dançarina líder do grupo feminino sul-coreano BLACKPINK.'
        }
      ]
    }
  },
  methods: {
    showImage (data) {
      this.$refs.slider.style.backgroundImage = `url(${data.link})`
      this.$refs.title.innerText = data.title
      this.$refs.description.innerText = data.description

      if(this.active) {
        this.active.classList.remove('active')
      }

      this.$refs[data.key][0].classList.add('active')
      this.active = this.$refs[data.key][0]

      const containerRect = this.$refs.sliderContainer.getBoundingClientRect()
      const itemRect = this.active.getBoundingClientRect()

      if (itemRect.left < containerRect.left || itemRect.right > containerRect.right) {
        this.$refs.sliderContainer.scrollLeft += itemRect.left - containerRect.left;
      }

      const actualImage = this.images.filter(val => val.key === data.key)[0]

      this.currentIndex = actualImage.key
    },
    next () {
      this.showImage(this.images[this.currentIndex + 1 > 3 ? 3 : this.currentIndex + 1])
    },
    prev () {
      this.showImage(this.images[this.currentIndex - 1 < 0 ? 0 : this.currentIndex - 1])
    }
  },
  mounted() {
    this.showImage(this.images[this.currentIndex])
  }
}
</script>

<style>
.clickable {
    cursor: pointer;
} 
  
.slider {
  position: absolute;
  bottom: 20px;
  left: 10vw;
  width: 80vw;
  height: 400px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  overflow: auto;
  white-space: nowrap;
  gap: 20px;
  scroll-behavior: smooth;
  z-index: 1000;
}

.slider-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
  transition: all .2s ease-in-out;
}

.slider-area::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #000000fa 10%, transparent 100%);
}

.slider-item {
  width: 200px;
  height: 300px;
  flex: 0 0 auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 0 10px 2px #000000;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.slider-item:hover {
  box-shadow: 0 0 20px 4px #111111;
  transform: scale(1.05);
}

.slider-item .title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding: 20px;
  background: linear-gradient(0deg, #000000F5, transparent);
  font-size: 18pt;
  color: #ffffff;
}

.slider-data {
  position: absolute;
  width: 80vw;
  bottom: 420px;
  left: 10vw;
  padding: 20px;
}

.slider-data .title {
  font-size: 40pt;
  color: #ffffff;
}

.slider-data .description {
  font-size: 12pt;
  color: #ffffff;
  display: block;
  text-align: left;
  line-height: 30px;
  margin-top: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Número máximo de linhas */
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}

.slider-controls {
  position: absolute;
  top: 10vh;
  right: 10vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 100;
}

.slider-controls .btn {
  width: 30px;
  font-size: 22pt;
  border: none;
  background: #c3c3c355;
  color: #111111;
  border-radius: 5px;
  margin: 0 2px;
  cursor: pointer;
  transition: all .1s ease-in-out;
}

.slider-controls .btn span {
  display: block;
}

.slider-controls .btn:hover {
  background: #11111155;
  color: #c3c3c3;
}

.no-visible {
  visibility: hidden;
}
</style>
