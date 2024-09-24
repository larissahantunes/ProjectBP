<template>
    <div class="page"><slot> </slot>
    </div>
</template>

<style>
    .page {
      width: 100vw;
      height: 100vh;
      position: relative;
      z-index: -1;
    }
</style>