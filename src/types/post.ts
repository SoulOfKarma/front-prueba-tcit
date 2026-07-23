export interface Post {
  id: number
  nombre: string
  descripcion: string
  createdAt: string
}

export type NewPost = Pick<Post, 'nombre' | 'descripcion'>
