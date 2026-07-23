<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import { usePostsStore } from '@/stores/posts'

const store = usePostsStore()

const name = ref('')
const description = ref('')
const isSubmitting = ref(false)

async function handleSubmit() {
  if (!name.value.trim() || !description.value.trim()) return

  isSubmitting.value = true
  try {
    await store.createPost({ nombre: name.value.trim(), descripcion: description.value.trim() })
    name.value = ''
    description.value = ''
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <form class="post-form" @submit.prevent="handleSubmit">
    <div class="field">
      <label for="name">Nombre</label>
      <InputText id="name" v-model="name" required />
    </div>
    <div class="field">
      <label for="description">Descripción</label>
      <Textarea id="description" v-model="description" rows="3" required />
    </div>
    <Button type="submit" label="Crear post" :loading="isSubmitting" />
  </form>
</template>

<style scoped>
.post-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
</style>
