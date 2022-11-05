<template>
  <q-layout v-cloak class="bg-image">
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card :style="$q.screen.lt.sm ? { width: '80%' } : { width: '30%' }">
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img :src="ProfileSvg" alt="avatar" />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                {{ isRegisterMode ? '注册' : '登录' }}
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form ref="form" class="q-gutter-md" @submit="submit">
              <LoginForm v-if="!isRegisterMode" v-model="formValue" />
              <RegisterForm v-else v-model="formValue" />
              <div class="row">
                <q-btn
                  :label="isRegisterMode ? '注册' : '登录'"
                  type="submit"
                  color="primary"
                />
                <q-space />
                <q-btn
                  label="注册"
                  type="button"
                  color="primary"
                  flat
                  @click="
                    () => {
                      isRegisterMode = !isRegisterMode
                      form?.resetValidation()
                      form?.reset()
                    }
                  "
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
export default {
  name: 'Login',
}
</script>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { QForm } from 'quasar'
import ProfileSvg from './profile.svg?url'
import RegisterForm from './RegisterForm.vue'
import LoginForm from './LoginForm.vue'

const form = ref<QForm>()
const isRegisterMode = ref(false)
const formValue = reactive({
  username: '',
  password: '',
  repeartPassword: '',
  firstname: '',
  lastname: '',
})

const submit = async () => {}
</script>

<style>
.bg-image {
  background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
}
</style>
