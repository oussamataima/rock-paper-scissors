<script setup lang="ts">
 import Rules from '@/components/Rules.vue';

</script>

<template>
  <main>
    <header class="border-[3px]  border-[#FFFFFF4A] max-w-[311px] mx-auto flex justify-between items-center p-3 pl-[23px] mt-8">
      <h1
        class="flex flex-col text-[21px] text-white font-bold uppercase leading-[0.762] tracking-[0.075em] w-fit text-shadow"
      >
        <span>rock</span>
        <span>paper</span>
        <span>scissor</span>
      </h1>
      <div class="w-20 h-[72px] bg-score rounded flex flex-col justify-center items-center ">
        <span class="text-[#2a44c2] font-semibold text-[10px] tracking-[0.17em] uppercase leading-normal">score</span>
        <span class="text-[#565467] font-bold text-[40px] uppercase leading-10">12</span>
      </div>
    </header>
    <section class="relative mt-[105px] max-w-[312px] h-[281px] mx-auto  flex justify-center items-center">
      <img class="w-[129.36px] h-[132.65px] absolute top-0 left-0" src="/paper.svg" alt="">
      <img class="w-[129.36px] h-[132.65px] absolute top-0 right-0" src="/scissor.svg" alt="">
      <img class="w-[129.36px] h-[132.65px] absolute bottom-0" src="/rock.svg" alt="">
      <img class="" src="/holder.svg" alt="">
    </section>
    <Rules/>
  </main>
</template>
<!-- <style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #000; /* Example background color */
}

.ellipse-container {
  background-image: url("/scisor.svg");
  border-radius: 100%;
  width: 292.611px;
  height: 286.699px;
  position: relative;

  box-shadow: 0 0 0 50px rgba(255, 255, 255, 0.05), 0 0 0 110px rgba(255, 255, 255, 0.05),
    0 0 0 180px rgba(255, 255, 255, 0.05);
  border-radius: 50%;
}
</style>

 p -->
