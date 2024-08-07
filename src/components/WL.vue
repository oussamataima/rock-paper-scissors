<script setup lang="ts">
import { store } from '@/store';
import { computed } from 'vue';

defineProps<{
  status?: 'win' | 'lose' | 'draw'
}>()
const text = computed(()=> {
  switch (store.status) {
    case 'win':
      return 'YOU WIN'
    case 'lose':
      return 'YOU LOSE'
    case 'draw':
      return 'DRAW'
    default:
      return ''
  }
})
</script>
<template>
  <div class="flex flex-col gap-4 w-fit items-center">
    <h3 class="text-[56px] text-white font-bold uppercase leading-[normal] text-center w-fit">{{ text }}</h3>
    <button
      class="w-[220px] h-12 bg-score shadow-custom uppercase tracking-[2.5px] flex justify-center items-center text-[#3B4262] font-semibold rounded-lg hover:bg-[#3B4262] hover:text-white transition duration-500"
      @click="store.reset()"
    >
      Play Again
    </button>
  </div>
</template>
