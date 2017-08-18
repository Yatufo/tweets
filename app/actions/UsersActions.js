import { CALL_API, CHAIN_API } from 'middleware/api'

export const LOADED_USERS = Symbol('LOADED_USERS')
export function loadQuestions() {
  return {
    [CALL_API]: {
      method: 'get',
      path: '/api/users',
      successType: LOADED_USERS
    }
  }
}
