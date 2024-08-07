<script setup lang="ts">
import WL from "./WL.vue";
import { store } from '@/store';
</script>

<template>
  <section
    class="max-w-[311px] md:max-w-[700px] lg:max-w-[960px] grid grid-cols-2 mx-auto mt-20 pb-24 md:mt-[72px] gap-y-[62px] lg:grid-cols-3"
  >
    <div class="flex flex-col gap-4 md:gap-16 md:flex-col-reverse items-center">
      <div class="w-[129.36px] h-[132.65px] md:w-[292px] md:h-[300px]">
        <img
          v-if="store.userPick"
          :class="['cursor-pointer',store.winner === 'user' && !store.isLoading ? 'win' : 'element']"
          :src="`/${store.userPick}.svg`"
          alt=""
        />
      </div>
      <p class="text-white text-center uppercase font-bold text-[15px] md:text-2xl leading-8">
        You picked
      </p>
    </div>
    <div class="flex flex-col gap-4 md:gap-16 md:flex-col-reverse items-center lg:order-2">
      <div class="w-[129.36px] h-[132.65px] md:w-[292px] md:h-[300px]">
        <img
          v-if="store.botPick && !store.isLoading"
          :class="['cursor-pointer',store.winner === 'bot' && !store.isLoading ? 'win' : 'element']"

          :src="`/${store.botPick}.svg`"
          alt=""
        />
        <img class="size-[110px] md:size-auto animate-pulse" v-else src="/circle.svg" alt="">
      </div>
      <p class="text-white text-center uppercase font-bold text-[15px] md:text-2xl leading-8">
        The house picked
      </p>
    </div>
    <div  class="col-span-2 items-center mx-auto lg:col-span-1 h-fit lg:mt-[50%]">
        <transition name="fade">
            <WL v-if="!store.isLoading" />
            <div v-else class="w-[220px]"></div>
        </transition>
    </div>
  </section>
</template>

<style>
.loader {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
}
</style>


<!-- <img class="element w-[129.36px] h-[132.65px] md:w-auto md:h-auto cursor-pointer " src="/paper.svg" alt="">
<img class="element w-[129.36px] h-[132.65px] md:w-auto md:h-auto cursor-pointer absolute top-0 right-0" src="/scissor.svg" alt="">
<img class="element w-[129.36px] h-[132.65px] md:w-auto md:h-auto cursor-pointer absolute bottom-0" src="/rock.svg" alt=""> -->
