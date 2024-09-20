<template>
    <section class="container">
        <slot></slot>
    </section>
</template>

<style>
    .container{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-y: auto; 
        overflow-x: hidden; 
    }

</style>