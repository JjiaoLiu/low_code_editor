<template>
    <div class="lc-image">
        <img :src="src" alt="" :style="{ width, height }" crossorigin="anonymous">
    </div>
</template>

<script setup lang="ts">
const { src, width, height } = defineProps<{
    src: string,
    width: string,
    height: string,
}>();
</script>