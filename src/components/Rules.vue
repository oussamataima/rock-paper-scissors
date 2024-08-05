<script setup lang="ts">
import { ref } from 'vue';
import CloseBtn from './CloseBtn.vue';

const show = ref(false);

</script>
<template>
    <section v-if="show" class="flex justify-center mt-[140px] mb-14">
       <Rulesbtn @show="() => show = !show"/>
      </section>
      <div class="bg-white fixed top-0 left-0 right-0 min-h-screen">
        <h2 class="text-[#3B4262] font-bold text-[32px] text-center mt-24 leading-8">Rules</h2>
        <img class="mx-auto mt-[113px]" src="/rules_mobile.svg" alt="rules">
        <div class="absolute bottom-14 left-1/2 right-1/2 translate-x-[-50%] ">
            <CloseBtn/>
        </div>
        
      </div>
</template>