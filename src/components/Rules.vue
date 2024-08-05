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
  <section class="flex justify-center mt-[140px] mb-14">
    <Rulesbtn @show="showRules" />
    
  </section>
  <transition name="slide-fade">
    <div v-if="isShow" class="bg-white fixed top-0 left-0 right-0 min-h-screen">
      <h2 class="text-[#3B4262] font-bold text-[32px] text-center mt-24 leading-8">
        Rules
      </h2>
      <img class="mx-auto mt-[113px]" src="/rules_mobile.svg" alt="rules" />
      <div class="absolute bottom-14 left-1/2 right-1/2 translate-x-[-50%]">
        <CloseBtn @close="() => (show = false)" />
      </div>
    </div>
  </transition>
 
</template>
<style>
/* Define the transition classes */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

/* Define the transition classes */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.slide-fade-enter-to, .slide-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}

</style>
