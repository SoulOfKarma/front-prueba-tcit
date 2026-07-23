import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { postsApi } from '@/services/posts.api'
import type { NewPost, Post } from '@/types/post'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<Post[]>([])
  const filterText = ref('')
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const hasLoaded = ref(false)

  const filteredPosts = computed(() => {
    const term = filterText.value.trim().toLowerCase()
    if (!term) return posts.value
    return posts.value.filter((post) => post.nombre.toLowerCase().includes(term))
  })

  async function fetchPosts() {
    if (hasLoaded.value) return
    isLoading.value = true
    error.value = null
    try {
      posts.value = await postsApi.getAll()
      hasLoaded.value = true
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Error al cargar los posts'
    } finally {
      isLoading.value = false
    }
  }

  async function createPost(newPost: NewPost) {
    error.value = null
    try {
      const created = await postsApi.create(newPost)
      posts.value.unshift(created)
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Error al crear el post'
      throw err
    }
  }

  async function deletePost(id: number) {
    error.value = null
    try {
      const deleted = await postsApi.remove(id)
      posts.value = posts.value.filter((post) => post.id !== deleted.id)
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Error al eliminar el post'
      throw err
    }
  }

  return {
    posts,
    filterText,
    isLoading,
    error,
    filteredPosts,
    fetchPosts,
    createPost,
    deletePost,
  }
})
