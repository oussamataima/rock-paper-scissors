<script setup lang="ts">
import { computed, ref } from "vue";
import Rulesbtn from "@/components/Rulesbtn.vue";
import CloseBtn from "@/components/CloseBtn.vue";

const show = ref(false);
const isShow = computed(() => show.value);
function showRules() {
  show.value = true;
}
</script>
<template>
  <section
    class="flex justify-center mt-[140px] mb-14 md:m-0 md:fixed md:bottom-8 md:right-8"
  >
    <Rulesbtn @show="showRules" />
  </section>
  <transition  name="slide-fade">
    <div v-if="isShow" class="bg-white fixed top-0 left-0 right-0 min-h-screen md:hidden">
      <h2
        class="text-[#3B4262] font-bold text-[32px] uppercase text-center mt-24 leading-8"
      >
        Rules
      </h2>
      <img class="mx-auto mt-[113px]" src="/rules_mobile.svg" alt="rules" />
      <div class="absolute bottom-14 left-1/2 right-1/2 translate-x-[-50%]">
        <CloseBtn @close="() => (show = false)" />
      </div>
    </div>
  </transition>
  <Transition  name="fade">
    <section v-if="isShow" class="hidden md:block ">
      <div @click="() => (show = false)" class="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
     <div
      
      class="fixed z-50 left-1/2 right-1/2 top-1/2 bottom-1/2 translate-y-[-50%] translate-x-[-50%] bg-white rounded-lg w-[400px] h-[415px] p-8"
    >
      <div class="flex justify-between">
        <h2 class="text-[#3B4262] font-bold text-[32px] uppercase leading-8">Rules</h2>
        <CloseBtn @close="() => (show = false)" />
      </div>
      <img class="mx-auto mt-12" src="/rules.svg" alt="rules" />
    </div>
    </section>
    
  </Transition>
</template>
