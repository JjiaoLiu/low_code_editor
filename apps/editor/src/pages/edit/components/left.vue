<template>
    <div class="center">
        <div v-for="material in materialList" :key="material.id" @click="onClick($event, material)">
            {{ material.title }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { materialList } from "@/mock/data";
import { useProjectStore } from "@/store";
import { PageElement, IMaterial } from "@lcd1024/shared";
const projectStore = useProjectStore()
const onClick = (e: Event, m: IMaterial) => {
    projectStore.load(m);
    const ele = PageElement.create();
    ele.mId = m.id;
    ele.mVersion = m.version;
    projectStore.addElement(ele);
}
</script>

<style scoped>

</style>