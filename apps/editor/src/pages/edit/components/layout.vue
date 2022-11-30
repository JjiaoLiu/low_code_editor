<template>
  <a-layout style="height:100vh">
    <a-layout-sider theme="light">
      <slot name="left"></slot>
    </a-layout-sider>
    <a-layout-content>
      <slot name="center"></slot>
    </a-layout-content>
    <a-layout-sider theme="light">
      <slot name="right"></slot>
    </a-layout-sider>
  </a-layout>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>