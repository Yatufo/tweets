import { CALL_API, CHAIN_API } from 'middleware/api'

export const LOADED_USERS = Symbol('LOADED_USERS')
export function loadUsers() {
  return {
    [CALL_API]: {
      method: 'get',
      path: '/api/questions',
      successType: LOADED_USERS
    }
}}
