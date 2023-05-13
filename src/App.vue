<template>
  <Suspense>
    <Issues />
  </Suspense>
</template>

<script setup>
import { Suspense } from "vue"
import Issues from './pages/Issues.vue'
</script>
