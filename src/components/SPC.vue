<script setup lang="ts">
import { store } from '@/store';

console.log(store.userPick)

</script>
<template>
    <section class="relative mt-[105px] md:mt-16 md:mb-[76px] max-w-[312px] h-[281px] md:max-w-[476px] md:h-[430px] mx-auto flex justify-center items-center">
        <img @click="() => {store.pick('paper'); store.bot()}" class="element w-[129.36px] h-[132.65px] md:w-[198px] md:h-[203px] cursor-pointer absolute top-0 left-0" src="/paper.svg" alt="">
        <img @click="() =>{ store.pick('scissor'); store.bot()}" class="element w-[129.36px] h-[132.65px] md:w-[198px] md:h-[203px] cursor-pointer absolute top-0 right-0" src="/scissor.svg" alt="">
        <img @click="() => {store.pick('rock'); store.bot()}" class="element w-[129.36px] h-[132.65px] md:w-[198px] md:h-[203px] cursor-pointer absolute bottom-0" src="/rock.svg" alt="">
        <svg class="block md:hidden" xmlns="http://www.w3.org/2000/svg" width="207" height="190" viewBox="0 0 207 190" fill="none">
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M194 8C194 8 2.98358 8 6.0484 8C9.11322 8 102.925 174 102.925 174L194 8Z" stroke="black" stroke-width="15"/>
        </svg>
        <svg class="hidden md:block" xmlns="http://www.w3.org/2000/svg" width="306" height="277" viewBox="0 0 306 277" fill="none">
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M292.5 7.5C292.5 7.5 0.895138 7.5 5.57388 7.5C10.2526 7.5 153.466 261.5 153.466 261.5L292.5 7.5Z" stroke="black" stroke-width="15"/>
        </svg>
      </section>
</template>