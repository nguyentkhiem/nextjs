import { LoginPayload } from '@/types/auth.type'
import apiServices from './api'

const AuthServices = {
  login(payload: LoginPayload) {
    return apiServices.post('/auth/signin', payload)
  },
}

export default AuthServices
