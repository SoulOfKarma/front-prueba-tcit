import type { NewPost, Post } from '@/types/post'

const API_URL = import.meta.env.VITE_API_URL

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const body = await response.json().catch(() => null)
    throw new Error(body?.message ?? `Request failed with status ${response.status}`)
  }
  return response.json()
}

export const postsApi = {
  async getAll(): Promise<Post[]> {
    const response = await fetch(`${API_URL}/posts`)
    return handleResponse<Post[]>(response)
  },

  async create(post: NewPost): Promise<Post> {
    const response = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })
    return handleResponse<Post>(response)
  },

  async remove(id: number): Promise<Post> {
    const response = await fetch(`${API_URL}/posts/${id}`, {
      method: 'DELETE',
    })
    return handleResponse<Post>(response)
  },
}
