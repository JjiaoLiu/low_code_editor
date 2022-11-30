<template>
    <layout>
        <template v-slot:left>
            <left></left>
        </template>
        <template v-slot:center>
            <center></center>
        </template>
        <template v-slot:right>
            <right></right>
        </template>
    </layout>
</template>

<script setup lang="ts">
import layout from "./components/layout.vue";
import left from "./components/left.vue"
import center from "./components/center.vue"
import right from "./components/right.vue"
</script>

<style scoped>

</style>