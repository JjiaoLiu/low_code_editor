<template>
    <div class="editor-right">
        <div v-if="projectStore.currentElement === undefined">
            page
        </div>
        <div v-else-if="!projectStore.isLoaded(projectStore.currentElement.mId)">
            loading
        </div>
        <div v-else>
            <div v-for="key in Object.keys(editorProps)" :key="key">
                <input v-if="editorProps[key].type === 'string'" :value="editorProps[key].defaultValue"
                    @input="onPropsChange($event, key)">
                <input v-if="editorProps[key].type === 'number'" type="number" :value="editorProps[key].defaultValue"
                    @input="onPropsChange($event, key)">
                <input v-if="editorProps[key].type === 'color'" :value="editorProps[key].defaultValue"
                    @input="onPropsChange($event, key)">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getMaterialEditorProps, materialMap } from '@/mock/data';
import { useProjectStore } from '@/store';
import { computed } from 'vue';

const projectStore = useProjectStore()
const editorProps = computed(() => {
    if (!projectStore.currentElement) {
        return {};
    }
    return getMaterialEditorProps(materialMap[projectStore.currentElement.mId]);
});

function onPropsChange(e: Event, key: string) {
    const target = e.target as HTMLInputElement;
    console.log(target.value);
    projectStore.changeElementProps({
        [key]: target.value,
    });
}
</script>