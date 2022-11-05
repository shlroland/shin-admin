<template>
  <q-input
    v-model="value.username"
    filled
    label="用户名"
    :rules="[(val) => val || '用户名必填']"
    lazy-rules
  />
  <q-input
    v-model="value.password"
    type="password"
    filled
    label="密码"
    :rules="[(val) => val || '密码必填']"
  />
  <q-input
    v-model="value.repeartPassword"
    type="password"
    filled
    label="确认密码"
    lazy-rules
    :rules="[(val) => val === modelValue.password || '两次密码不一致']"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  modelValue: {
    password: string
    username: string
    repeartPassword: string
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
