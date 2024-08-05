<script setup lang="ts">
defineEmits(['show']);

</script>
<template>
    <button @click="$emit('show')" class="border border-white rounded-lg text-white font-semibold
    h-10 w-32 bg-transparent tracking-[2.5px] mx-auto hover:bg-white hover:text-[#3B4262] transition duration-500">
     Rules
   </button>
</template>