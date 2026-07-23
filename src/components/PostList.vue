<script setup lang="ts">
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import ProgressSpinner from 'primevue/progressspinner'
import { usePostsStore } from '@/stores/posts'
import type { Post } from '@/types/post'

const store = usePostsStore()

async function handleDelete(post: Post) {
  await store.deletePost(post.id)
}
</script>

<template>
  <div class="post-list">
    <ProgressSpinner v-if="store.isLoading" style="width: 2rem; height: 2rem" />

    <DataTable v-else :value="store.filteredPosts" data-key="id">
      <Column field="nombre" header="Nombre" />
      <Column field="descripcion" header="Descripción" />
      <Column header="Acciones" style="width: 8rem">
        <template #body="{ data }">
          <Button
            icon="pi pi-trash"
            severity="danger"
            text
            @click="handleDelete(data as Post)"
          />
        </template>
      </Column>
      <template #empty> No hay posts que coincidan con el filtro. </template>
    </DataTable>
  </div>
</template>
