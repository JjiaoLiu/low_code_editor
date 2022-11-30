
<template>
    <VueDraggableNext :list="projectStore.currentPageElements">
        <div v-for="item in projectStore.currentPageElements" :key="item.id"
            style="border:1px solid #dddddd;height: 100px;">
            <component v-if="projectStore.isLoaded(item.mId)" @click="projectStore.setCurrentElement(item.id)"
                :is="materialMap[item.mId].name" v-bind="item.props" />
            <div v-else>
                loading
            </div>
        </div>
    </VueDraggableNext>
</template>

<script setup lang="ts">
import { materialMap } from '@/mock/data';
import { useProjectStore } from '@/store';
import { VueDraggableNext } from 'vue-draggable-next'
const projectStore = useProjectStore();
</script>