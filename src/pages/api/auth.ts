import { client } from '@/utils/axios'

export const loginRequest = (data: any) => {
  return client().post('/login', data)
}
