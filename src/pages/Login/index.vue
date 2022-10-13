<template>
  <q-layout>
    <q-page class="flex bg-image flex-center">
      <q-card :style="$q.screen.lt.sm ? { width: '80%' } : { width: '30%' }">
      </q-card>
    </q-page>
  </q-layout>
</template>

<script lang="ts">
export default {
  name: 'Login',
}
</script>

<script lang="ts" setup></script>
