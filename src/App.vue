<script setup lang="ts">
import { onMounted } from 'vue'
import Message from 'primevue/message'
import PostFilter from '@/components/PostFilter.vue'
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import Card from 'primevue/card'
import { usePostsStore } from '@/stores/posts'

const store = usePostsStore()

onMounted(() => {
  store.fetchPosts()
})
</script>

<template>
  <main class="app">
    <h1>Posts</h1>

    <Message v-if="store.error" severity="error">{{ store.error }}</Message>
    <Card>
      <template #title>Nuevo post</template>
      <template #content>
        <PostForm />
      </template>
    </Card>
    <Card>
      <template #title>Buscar posts</template>
      <template #content>
        <PostFilter />
        <PostList />
      </template>
    </Card>
  </main>
</template>

<style scoped>
.app {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.post-filter {
  margin-bottom: 1rem;
}
</style>
