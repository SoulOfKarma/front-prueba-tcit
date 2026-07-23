<script setup lang="ts">
import InputText from 'primevue/inputtext'
import { usePostsStore } from '@/stores/posts'
import { ref } from 'vue'
import Button from 'primevue/button'

const store = usePostsStore()
const filtroLocal = ref('')
</script>

<template>
  <div class="post-filter">
    <label for="filter">Filtrar por nombre</label>
    <div class="row">
      <div class="col-8">
        <InputText id="filter" v-model="filtroLocal" placeholder="Buscar..." />
      </div>
      <div class="col-4">
        <Button
          label="Buscar"
          icon="pi pi-search"
          severity="secondary"
          @keyup.enter="store.filterText = filtroLocal"
          @click="store.filterText = filtroLocal"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-filter {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.row {
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
}

.col-8 {
  flex: 1;
}

.col-8 :deep(input) {
  width: 100%;
}
</style>
