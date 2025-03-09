<template>
 <section class="video-card" @click="openVideo">
   <img :src="thumbnail" :alt="title" class="video-card--thumbnail"/>
   <div class="video-card--data">
    <h3 class="video-card--title">{{ title }}</h3>
   </div>
 </section>
</template>

<script setup>
const props = defineProps({
 title: String,
 videoId: String,
 thumbnail: String
});

const openVideo = () => {
 window.open(`https://www.youtube.com/watch?v=${props.videoId}`, "_blank");
};
</script>

<style scoped>
.video-card {
 width: 350px;
 height: 200px;
 border-radius: 10px;
 overflow: hidden;
 position: relative;
 cursor: pointer;
 transition: all .2s ease-in-out;
}

.video-card:hover {
 box-shadow: 0 0 20px 2px pink;
 transform: scale(1.05);
}

.video-card:hover .video-card--data {
 background: linear-gradient(0deg, pink 20%, transparent);
}

.video-card:hover .video-card--title {
 color: black;
}

.video-card .video-card--data {
 position: absolute;
 bottom: 0;
 left: 0;
 width: 100%;
 height: 100px;
 display: flex;
 align-items: end;
 justify-content: center;
 padding: 20px;
 background: linear-gradient(0deg, #444444 20%, transparent);
 transition: all .2s ease-in-out;
 /* opacity: 0; */
}

.video-card .video-card--thumbnail {
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
}

.video-card .video-card--title {
 text-align: center;
 font-size: 12pt;
 font-weight: 700;
 color: #ffffff;
}
</style>
