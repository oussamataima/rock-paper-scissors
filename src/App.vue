<script setup lang="ts">

import Rules from '@/components/Rules.vue';
import SPC from '@/components/SPC.vue';
import Gameplay from './components/Gameplay.vue';
import { store } from './store';

</script>

<template>
  <main>
    <header class="border-[2px]  border-[#FFFFFF4A] max-w-[311px] md:max-w-[700px] mx-auto flex justify-between items-center p-3 pl-[23px] md:py-[18px] md:pl-8 md:pr-6 mt-8 rounded-[15px]">
      <h1  
        class="flex flex-col text-[21px] md:text-[40px] text-white font-bold uppercase
         leading-[0.762] tracking-[0.075em] w-fit text-shadow md:leading-[0.8]"
      >
        <span>rock</span>
        <span>paper</span>
        <span>scissor</span>
      </h1>
      <div class="w-20 h-[72px] bg-score rounded flex flex-col justify-center items-center md:w-[150px] md:h-[114px]">
        <span class="text-[#2a44c2] font-semibold text-[10px] tracking-[0.17em] uppercase leading-normal md:text-[15px] md:tracking-[0.22em]">score</span>
        <span class="text-[#565467] font-bold text-[40px] uppercase leading-10 md:text-[66px] md:leading-[66px]">12</span>
      </div>
    </header>
    <SPC v-if="!store.userPick"/>
    <Gameplay  v-else :botPick="store.botPick as 'rock' | 'paper' | 'scissor'" :yourPick="store.userPick as 'rock' | 'paper' | 'scissor'"  />
    <Rules/>
  </main>
</template>
<style>

</style>
