<template>
  <q-input
    v-model="value.username"
    filled
    label="用户名"
    lazy-rules
    :rules="[(val) => val || '用户名必填']"
  />

  <q-input
    v-model="value.password"
    type="password"
    filled
    label="密码"
    lazy-rules
    :rules="[(val) => val || '密码必填']"
  />
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = defineProps<{
  modelValue: {
    password: string
    username: string
  }
}>()
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>
